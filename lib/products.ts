export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  price: string
  type: 'program' | 'mentoria'
  badge: string
  // URL pública del PDF en Vercel Blob. Vacía hasta que se ejecute scripts/upload-pdfs.ts
  pdfBlobUrl: string
}

export const PRODUCTS: Record<string, Product> = {
  'fuerza-12': {
    id: 'fuerza-12',
    name: 'Programa Fuerza 12 Semanas',
    description: 'Construye una base sólida de fuerza con periodización progresiva.',
    priceInCents: 4900,
    price: '$49',
    type: 'program',
    badge: 'STRENGTH',
    pdfBlobUrl: process.env.PDF_URL_FUERZA_12 ?? '',
  },
  'hipertrofia-avanzada': {
    id: 'hipertrofia-avanzada',
    name: 'Hipertrofia Avanzada',
    description: 'Maximiza el crecimiento muscular con técnicas avanzadas.',
    priceInCents: 5900,
    price: '$59',
    type: 'program',
    badge: 'HYPERTROPHY',
    pdfBlobUrl: process.env.PDF_URL_HIPERTROFIA_AVANZADA ?? '',
  },
  'fat-loss-cardio': {
    id: 'fat-loss-cardio',
    name: 'Fat Loss + Cardio',
    description: 'Quema grasa mientras preservas músculo.',
    priceInCents: 3900,
    price: '$39',
    type: 'program',
    badge: 'HYBRID',
    pdfBlobUrl: process.env.PDF_URL_FAT_LOSS_CARDIO ?? '',
  },
  'powerbuilding-pack': {
    id: 'powerbuilding-pack',
    name: 'Powerbuilding Pack ★',
    description: 'El programa completo de fuerza e hipertrofia combinados.',
    priceInCents: 8900,
    price: '$89',
    type: 'program',
    badge: 'PACK',
    pdfBlobUrl: process.env.PDF_URL_POWERBUILDING_PACK ?? '',
  },
  'mentoria-1-1': {
    id: 'mentoria-1-1',
    name: 'Mentoría 1:1 con Spencer',
    description: 'Coaching personalizado con seguimiento semanal.',
    priceInCents: 19900,
    price: '$199',
    type: 'mentoria',
    badge: 'PREMIUM',
    pdfBlobUrl: process.env.PDF_URL_MENTORIA_1_1 ?? '',
  },
}
