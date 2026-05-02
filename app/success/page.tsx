import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pago exitoso | Spencer Fit',
}

export default function SuccessPage() {
  return (
    <main
      data-testid="success-page"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-lg w-full flex flex-col items-center gap-8 text-center">
        {/* Check icon */}
        <div className="w-24 h-24 rounded-full bg-[#f97316]/10 border-2 border-[#f97316]/40 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#f97316]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            ¡Pago <span className="text-[#f97316]">completado!</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Gracias por tu compra. Recibirás un email con los detalles en breve.
          </p>
          <p className="text-gray-500 text-sm">
            Tu programa estará disponible en tu correo en los próximos minutos.
          </p>
        </div>

        <Link
          href="/"
          className="px-8 py-4 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold text-sm tracking-widest uppercase rounded transition-colors"
          aria-label="Volver al inicio"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
