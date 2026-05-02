import CheckoutButton from '@/components/CheckoutButton'

const benefits = [
  "Plan de entrenamiento 100% personalizado según tus objetivos",
  "Seguimiento semanal de progreso con ajustes en tiempo real",
  "Plan nutricional adaptado a tu estilo de vida",
  "Acceso directo por WhatsApp para dudas y soporte diario",
  "Análisis de técnica mediante videollamadas mensuales",
];

export default function MentoriaSection() {
  return (
    <section
      id="mentoria"
      data-testid="mentoria-section"
      className="bg-[#111] py-24 lg:py-32 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[#f97316] text-sm font-bold tracking-[0.3em] uppercase">
                Experiencia Premium
              </span>
              <h2
                data-testid="mentoria-title"
                className="text-4xl sm:text-5xl font-black tracking-tight"
              >
                MENTORÍA <span className="text-[#f97316]">1:1</span>
              </h2>
              <p
                data-testid="mentoria-description"
                className="text-gray-400 text-lg leading-relaxed"
              >
                No es solo un programa. Es una transformación completa con
                acompañamiento personalizado. Trabajamos juntos para alcanzar tu
                versión élite, adaptando cada detalle a tus necesidades.
              </p>
            </div>

            {/* Benefits list */}
            <ul
              data-testid="mentoria-benefits"
              className="flex flex-col gap-4"
              role="list"
            >
              {benefits.map((benefit) => (
                <li key={benefit} data-testid="mentoria-benefit" className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f97316]/20 border border-[#f97316]/40 flex items-center justify-center text-[#f97316] text-xs font-bold mt-0.5"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-gray-300 leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-sm uppercase tracking-wide">
                  Inversión
                </span>
                <span
                  data-testid="mentoria-price"
                  className="text-4xl font-black text-white"
                >
                  Desde{" "}
                  <span className="text-[#f97316]">$199</span>
                  <span className="text-lg font-normal text-gray-400">/mes</span>
                </span>
              </div>

              <CheckoutButton
                productId="mentoria-1-1"
                label="APLICAR A MENTORÍA"
                className="px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-bold text-sm tracking-widest uppercase rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Right: Visual card */}
          <div
            data-testid="mentoria-visual"
            className="relative rounded-2xl overflow-hidden border border-[#f97316]/20 p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-transparent" />

            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#f97316]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-black text-white">
                  ¿Por qué elegir la Mentoría?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Los programas estándar dan resultados. La mentoría 1:1 da
                  transformaciones. Tendrás a Spencer disponible para guiarte
                  en cada paso del camino.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Tasa de éxito", value: "94%" },
                  { label: "Clientes activos", value: "47" },
                  { label: "Transformaciones", value: "200+" },
                  { label: "Satisfacción", value: "★ 4.9" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-xl font-black text-[#f97316]">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
