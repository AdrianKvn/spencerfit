const stats = [
  { value: "5+", label: "Años" },
  { value: "200+", label: "Atletas" },
  { value: "15+", label: "Programas" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-16 overflow-hidden"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span
                data-testid="hero-eyebrow"
                className="text-[#f97316] text-sm font-bold tracking-[0.3em] uppercase"
              >
                Entrenamiento de Élite
              </span>

              <h1
                data-testid="hero-title"
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              >
                FORJA TU{" "}
                <span className="text-[#f97316]">MEJOR</span>
                <br />
                VERSIÓN
              </h1>

              <p
                data-testid="hero-subtitle"
                className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg"
              >
                Programas de entrenamiento diseñados para transformar tu cuerpo
                y llevar tu rendimiento al siguiente nivel. Sin excusas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#programas"
                data-testid="hero-cta-primary"
                className="px-8 py-4 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold text-sm tracking-widest uppercase rounded transition-colors text-center"
                aria-label="Ver todos los programas de entrenamiento"
              >
                VER PROGRAMAS
              </a>
              <a
                href="#mentoria"
                data-testid="hero-cta-secondary"
                className="px-8 py-4 border border-white/30 hover:border-[#f97316] hover:text-[#f97316] text-white font-bold text-sm tracking-widest uppercase rounded transition-colors text-center"
                aria-label="Conocer la mentoría personalizada"
              >
                MENTORÍA 1:1
              </a>
            </div>

            {/* Stats */}
            <div
              data-testid="hero-stats"
              className="flex gap-8 pt-4 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-[#f97316]">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Placeholder image */}
          <div
            data-testid="hero-image"
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
            aria-label="Foto de Spencer Fit"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f97316]/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-[#f97316]/50 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#f97316]/60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="text-white/40 text-sm font-bold tracking-widest uppercase">
                FOTO SPENCER
              </span>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f97316]/5 rounded-tr-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
