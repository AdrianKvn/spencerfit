import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'
import { sendPurchaseEmail } from '@/lib/email'

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
    const productId = session.metadata?.productId
    const customerEmail = session.customer_email ?? session.customer_details?.email

    if (productId && customerEmail) {
      const product = PRODUCTS[productId]
      if (product) {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
          const downloadUrl = `${baseUrl}/api/download/${productId}?session_id=${session.id}`
          await sendPurchaseEmail(customerEmail, product.name, downloadUrl)
        } catch (error) {
          // Logueamos el error pero respondemos 200 para que Stripe no reintente
          console.error('Error enviando email de compra:', error)
        }
      } else {
        console.error(`Producto desconocido en webhook: ${productId}`)
      }
    }
  }

  return NextResponse.json({ received: true })
}
