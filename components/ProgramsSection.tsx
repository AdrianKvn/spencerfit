import CheckoutButton from '@/components/CheckoutButton'

interface Program {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  price: string;
  description: string;
  featured?: boolean;
}

const programs: Program[] = [
  {
    id: "fuerza-12",
    name: "Programa Fuerza 12 Semanas",
    badge: "STRENGTH",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    price: "$49",
    description: "Construye una base sólida de fuerza con periodización progresiva y técnica perfecta.",
  },
  {
    id: "hipertrofia-avanzada",
    name: "Hipertrofia Avanzada",
    badge: "HYPERTROPHY",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    price: "$59",
    description: "Maximiza el crecimiento muscular con técnicas avanzadas de volumen e intensidad.",
  },
  {
    id: "fat-loss-cardio",
    name: "Fat Loss + Cardio",
    badge: "HYBRID",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
    price: "$39",
    description: "Quema grasa mientras preservas músculo con el protocolo de entrenamiento híbrido.",
  },
  {
    id: "powerbuilding-pack",
    name: "Powerbuilding Pack ★",
    badge: "PACK",
    badgeColor: "bg-[#f97316]/20 text-[#f97316] border-[#f97316]/30",
    price: "$89",
    description: "El pack completo: fuerza + hipertrofia + fat loss. La transformación total.",
    featured: true,
  },
];

const gradients = [
  "from-blue-900/40 via-[#111] to-[#0a0a0a]",
  "from-purple-900/40 via-[#111] to-[#0a0a0a]",
  "from-green-900/40 via-[#111] to-[#0a0a0a]",
  "from-orange-900/40 via-[#111] to-[#0a0a0a]",
];

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      data-testid="programs-section"
      className="bg-[#0a0a0a] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16 text-center">
          <span className="text-[#f97316] text-sm font-bold tracking-[0.3em] uppercase">
            Entrena con un plan
          </span>
          <h2
            data-testid="programs-title"
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            PROGRAMAS DE{" "}
            <span className="text-[#f97316]">ENTRENAMIENTO</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada programa está diseñado para un objetivo específico. Elige el
            tuyo y empieza hoy.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <article
              key={program.id}
              data-testid={`program-card-${program.id}`}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f97316]/10 ${
                program.featured
                  ? "border-[#f97316]/40"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {program.featured && (
                <div className="absolute top-3 right-3 z-10 bg-[#f97316] text-white text-xs font-bold px-2 py-0.5 rounded tracking-wide">
                  POPULAR
                </div>
              )}

              {/* Image placeholder */}
              <div
                className={`relative w-full aspect-video bg-gradient-to-br ${gradients[index]}`}
                aria-hidden="true"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                  </svg>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-4 p-5 bg-[#111] flex-1">
                <span
                  className={`self-start text-xs font-bold px-2.5 py-1 rounded border tracking-widest ${program.badgeColor}`}
                >
                  {program.badge}
                </span>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-white leading-snug">
                    {program.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span
                    data-testid={`program-price-${program.id}`}
                    className="text-2xl font-black text-[#f97316]"
                  >
                    {program.price}
                  </span>
                  <CheckoutButton
                    productId={program.id}
                    className="w-full px-4 py-3 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-bold tracking-widest uppercase rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
