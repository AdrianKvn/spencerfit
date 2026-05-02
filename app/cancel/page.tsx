import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pago cancelado | Spencer Fit',
}

export default function CancelPage() {
  return (
    <main
      data-testid="cancel-page"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-lg w-full flex flex-col items-center gap-8 text-center">
        {/* X icon */}
        <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Pago <span className="text-gray-400">cancelado</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            No se realizó ningún cargo. Puedes intentarlo de nuevo cuando quieras.
          </p>
        </div>

        <Link
          href="/#programas"
          className="px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-bold text-sm tracking-widest uppercase rounded transition-colors"
          aria-label="Ver programas de entrenamiento"
        >
          Ver programas
        </Link>
      </div>
    </main>
  )
}
