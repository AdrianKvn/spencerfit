import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Body inválido' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('productId' in body) ||
    typeof (body as Record<string, unknown>).productId !== 'string'
  ) {
    return NextResponse.json({ error: 'productId es requerido' }, { status: 400 })
  }

  const { productId } = body as { productId: string }
  const product = PRODUCTS[productId]

  if (!product) {
    return NextResponse.json({ error: `Producto '${productId}' no encontrado` }, { status: 400 })
  }

  const host = request.headers.get('host') ?? 'localhost:3000'
  const protocol = host.startsWith('localhost') ? 'http' : 'https'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `${protocol}://${host}`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#programas`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: product.priceInCents,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      metadata: {
        productId,
      },
    })

    if (!session.url) {
      return NextResponse.json({ error: 'No se pudo generar la URL de pago' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error interno del servidor'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
