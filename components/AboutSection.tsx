export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      data-testid="about-section"
      className="bg-[#0a0a0a] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo placeholder */}
          <div
            data-testid="about-image"
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1"
            aria-label="Foto de Spencer Fit"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f97316]/15 via-transparent to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-16 h-16 border border-[#f97316]/30 rounded-xl" aria-hidden="true" />
            <div className="absolute bottom-6 right-6 w-24 h-24 border border-[#f97316]/20 rounded-full" aria-hidden="true" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#f97316]/10 border-2 border-[#f97316]/40 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#f97316]/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="text-white/30 text-sm font-bold tracking-widest uppercase">
                FOTO SPENCER
              </span>
            </div>

            {/* Highlight badge */}
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#f97316]/30 rounded-xl px-4 py-3">
              <div className="text-2xl font-black text-[#f97316]">5+</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide">Años de experiencia</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <span className="text-[#f97316] text-sm font-bold tracking-[0.3em] uppercase">
                Conoce al entrenador
              </span>
              <h2
                data-testid="about-title"
                className="text-4xl sm:text-5xl font-black tracking-tight"
              >
                SPENCER <span className="text-[#f97316]">FIT</span>
              </h2>
            </div>

            <div
              data-testid="about-bio"
              className="flex flex-col gap-5 text-gray-400 leading-relaxed"
            >
              <p>
                Soy Spencer, entrenador personal certificado con más de 5 años
                de experiencia en el mundo del fitness de alto rendimiento. Mi
                pasión nació en el gimnasio cuando descubrí el poder
                transformador del entrenamiento con pesas y la disciplina que
                construye no solo cuerpos, sino caracteres.
              </p>
              <p>
                A lo largo de mi carrera he trabajado con más de 200 atletas de
                todos los niveles, desde principiantes hasta competidores de
                élite. Mi metodología combina ciencia del ejercicio, nutrición
                práctica y mentalidad de campeón para crear transformaciones
                reales y sostenibles.
              </p>
              <p>
                Cada programa que diseño lleva mi sello personal: resultados
                medibles, técnica impecable y progresión constante. No creo en
                los atajos, creo en el trabajo inteligente y consistente.
              </p>
            </div>

            {/* Featured quote */}
            <blockquote
              data-testid="about-quote"
              className="border-l-4 border-[#f97316] pl-6 py-2"
            >
              <p className="text-xl font-black text-[#f97316] italic leading-snug">
                "La disciplina construye campeones"
              </p>
              <footer className="text-gray-500 text-sm mt-2">— Spencer Fit</footer>
            </blockquote>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {[
                { label: "Certificación NSCA", icon: "🏅" },
                { label: "Nutrición Deportiva", icon: "🥗" },
                { label: "Powerlifting Coach", icon: "🏋️" },
                { label: "Online Coaching", icon: "💻" },
              ].map((credential) => (
                <div
                  key={credential.label}
                  className="flex items-center gap-3 p-3 bg-[#111] rounded-lg border border-white/10"
                >
                  <span className="text-lg" aria-hidden="true">{credential.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">
                    {credential.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
