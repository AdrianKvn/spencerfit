import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/blob'
import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return new NextResponse('Enlace de descarga inválido.', { status: 400 })
  }

  const product = PRODUCTS[productId]
  if (!product) {
    return new NextResponse('Producto no encontrado.', { status: 404 })
  }

  let session
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId)
  } catch {
    return new NextResponse('Sesión de pago no encontrada.', { status: 404 })
  }

  if (session.payment_status !== 'paid') {
    return new NextResponse('El pago no ha sido confirmado.', { status: 403 })
  }

  if (session.metadata?.productId !== productId) {
    return new NextResponse('Este enlace no corresponde al producto adquirido.', { status: 403 })
  }

  if (!product.pdfBlobUrl) {
    return new NextResponse('El archivo no está disponible aún. Contáctanos.', { status: 503 })
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) {
    return new NextResponse('Error de configuración del servidor.', { status: 500 })
  }

  const blob = await get(product.pdfBlobUrl, { access: 'private', token })
  if (!blob) {
    return new NextResponse('Archivo no encontrado en el servidor.', { status: 404 })
  }

  const filename = `${productId}.pdf`
  return new NextResponse(blob.stream as ReadableStream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  })
}
