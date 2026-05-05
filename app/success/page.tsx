import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pago exitoso | Spencer Fit',
}

export default function SuccessPage() {
  return (
    <main
      data-testid="success-page"
      className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 pt-[70px]"
    >
      <div className="flex flex-col items-center gap-10 text-center max-w-sm w-full">

        {/* Check icon */}
        <div className="animate-reveal-up w-20 h-20 rounded-full bg-[#ccff00]/5 border border-[#ccff00]/30 flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ccff00"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-5 animate-reveal-up delay-100">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#ccff00]" />
            <span className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase">
              Compra exitosa
            </span>
            <span className="h-px w-8 bg-[#ccff00]" />
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl tracking-[0.04em] uppercase leading-none"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            ¡Pago completado!
          </h1>

          {/* Body */}
          <p className="text-[#555555] text-sm leading-relaxed">
            Gracias por tu compra. Recibirás un email con el enlace de descarga en breve.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="animate-reveal-up delay-200 px-8 py-4 bg-[#ccff00] hover:opacity-90 text-[#050505] text-[11px] font-medium tracking-[0.25em] uppercase transition-opacity"
          aria-label="Volver al inicio"
        >
          Volver al inicio
        </Link>

      </div>
    </main>
  )
}
