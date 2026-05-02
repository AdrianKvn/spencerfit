import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

// El webhook necesita el body sin procesar para verificar la firma de Stripe.
// En App Router se usa request.text() en lugar del bodyParser de Pages Router.
export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET no está definida')
    return NextResponse.json({ error: 'Configuración incompleta' }, { status: 500 })
  }

  if (!sig) {
    return NextResponse.json({ error: 'Falta la firma de Stripe' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Firma inválida'
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const productId = session.metadata?.productId ?? 'desconocido'
    const customerEmail = session.customer_email ?? session.customer_details?.email ?? 'sin email'

    // En producción: enviar email de confirmación y registrar compra en base de datos
    console.log(`Compra completada — producto: ${productId}, cliente: ${customerEmail}`)
  }

  return NextResponse.json({ received: true })
}
