/**
 * Script de uso único para subir los PDFs locales a Vercel Blob.
 *
 * Uso:
 *   1. Coloca los PDFs en la carpeta pdfs/ junto a este script (scripts/pdfs/)
 *   2. Asegúrate de tener BLOB_READ_WRITE_TOKEN en tu .env.local
 *   3. npx tsx --env-file=.env.local scripts/upload-pdfs.ts
 *
 * El script imprime las env vars que debes agregar a Vercel y a .env.local.
 */

import { put } from '@vercel/blob'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const PRODUCT_PDFS: Array<{ envKey: string; filename: string; label: string }> = [
  { envKey: 'PDF_URL_FUERZA_12',           filename: 'fuerza-12.pdf',           label: 'Fuerza 12 Semanas' },
  { envKey: 'PDF_URL_HIPERTROFIA_AVANZADA', filename: 'hipertrofia-avanzada.pdf', label: 'Hipertrofia Avanzada' },
  { envKey: 'PDF_URL_FAT_LOSS_CARDIO',     filename: 'fat-loss-cardio.pdf',     label: 'Fat Loss + Cardio' },
  { envKey: 'PDF_URL_POWERBUILDING_PACK',  filename: 'powerbuilding-pack.pdf',  label: 'Powerbuilding Pack' },
  { envKey: 'PDF_URL_MENTORIA_1_1',        filename: 'mentoria-1-1.pdf',        label: 'Mentoría 1:1' },
]

const __dirname = dirname(fileURLToPath(import.meta.url))
const PDF_DIR = join(__dirname, 'pdfs')

async function main() {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) {
    console.error('❌  Falta BLOB_READ_WRITE_TOKEN en .env.local')
    process.exit(1)
  }

  console.log('Subiendo PDFs a Vercel Blob...\n')
  const results: string[] = []

  for (const { envKey, filename, label } of PRODUCT_PDFS) {
    const filePath = join(PDF_DIR, filename)

    if (!existsSync(filePath)) {
      console.warn(`⚠️  Archivo no encontrado: scripts/pdfs/${filename} (${label}) — omitiendo`)
      continue
    }

    const file = readFileSync(filePath)
    const blob = await put(filename, file, {
      access: 'private',
      token,
      contentType: 'application/pdf',
    })

    console.log(`✅  ${label}: ${blob.url}`)
    results.push(`${envKey}=${blob.url}`)
  }

  if (results.length === 0) {
    console.log('\nNo se subió ningún archivo. Coloca los PDFs en scripts/pdfs/ e intenta de nuevo.')
    return
  }

  console.log('\n--- Copia estas líneas en .env.local y en Vercel → Settings → Env Vars ---')
  console.log(results.join('\n'))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
