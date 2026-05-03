'use client'

import CheckoutButton from '@/components/CheckoutButton'
import { useLang } from "@/lib/LanguageContext"

interface Program {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  price: string;
  description: string;
  featured?: boolean;
  index: number;
}

const programs: Program[] = [
  {
    id: "fuerza-12",
    name: "Programa Fuerza 12 Semanas",
    badge: "STRENGTH",
    badgeColor: "text-[#ffffff]",
    price: "$49",
    description: "Construye una base sólida de fuerza con periodización progresiva y técnica perfecta.",
    index: 0,
  },
  {
    id: "hipertrofia-avanzada",
    name: "Hipertrofia Avanzada",
    badge: "AVANZADO",
    badgeColor: "text-[#e8c547]",
    price: "$59",
    description: "Maximiza el crecimiento muscular con técnicas avanzadas de volumen e intensidad.",
    index: 1,
  },
  {
    id: "fat-loss-cardio",
    name: "Fat Loss + Cardio",
    badge: "HÍBRIDO",
    badgeColor: "text-[#ffffff]",
    price: "$39",
    description: "Quema grasa mientras preservas músculo con el protocolo de entrenamiento híbrido.",
    index: 2,
  },
  {
    id: "powerbuilding-pack",
    name: "Powerbuilding Pack",
    badge: "★ COMPLETO",
    badgeColor: "text-[#ccff00]",
    price: "$89",
    description: "El pack completo: fuerza + hipertrofia + fat loss. La transformación total.",
    featured: true,
    index: 3,
  },
];

export default function ProgramsSection() {
  const { t } = useLang();
  return (
    <section
      id="programas"
      data-testid="programs-section"
      className="bg-[#050505] py-28 lg:py-36 relative overflow-hidden"
    >
      {/* Background number */}
      <div
        className="absolute -top-8 right-0 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(160px, 25vw, 320px)",
          color: "#1e1e1e",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        01
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col gap-6 mb-20">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#ccff00]" aria-hidden="true" />
            <span
              className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t.programs.eyebrow}
            </span>
          </div>
          <h2
            data-testid="programs-title"
            className="leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            {t.programs.title1}<br />
            <span className="text-[#ccff00]">{t.programs.title2}</span>
          </h2>
          <p
            className="text-[#555555] text-[15px] max-w-lg leading-relaxed mt-2"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            {t.programs.subtitle}
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141414]">
          {programs.map((program) => (
            <article
              key={program.id}
              data-testid={`program-card-${program.id}`}
              className="relative flex flex-col bg-[#050505] p-7 overflow-hidden group cursor-pointer
                transition-all duration-300
                hover:bg-[#0d0d0d]
                hover:-translate-y-1
                hover:shadow-[0_8px_40px_rgba(204,255,0,0.15)]"
            >
              {/* Lima eléctrico que crece desde abajo al hacer hover */}
              <div
                className="absolute inset-x-0 bottom-0 h-0 bg-[#ccff00] transition-all duration-500 ease-out group-hover:h-1"
                aria-hidden="true"
              />

              {/* Brillo lateral izquierdo */}
              <div
                className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#ccff00]/15 to-transparent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {/* Borde superior activo en featured o en hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                  program.featured
                    ? "bg-[#ccff00]"
                    : "bg-transparent group-hover:bg-[#ccff00]/50"
                }`}
                aria-hidden="true"
              />

              {/* Card number — visible y se ilumina en hover */}
              <span
                className="mb-4 block transition-colors duration-300 text-[#282828] group-hover:text-[#ccff00]/30"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3rem",
                  lineHeight: 1,
                  letterSpacing: "0.04em",
                }}
                aria-hidden="true"
              >
                {String(program.index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-4 flex-1">
                {/* Badge */}
                <span
                  className={`text-[9px] font-medium tracking-[0.35em] uppercase transition-colors duration-300 ${program.badgeColor}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {program.badge}
                  {program.featured && (
                    <span className="ml-2 text-[#555555]">{t.programs.popular}</span>
                  )}
                </span>

                {/* Name — se vuelve lima en hover */}
                <h3
                  className="leading-tight transition-colors duration-300 text-[#ffffff] group-hover:text-[#ccff00]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.6rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {program.name}
                </h3>

                {/* Description — se aclara en hover */}
                <p
                  className="text-[13px] leading-relaxed flex-1 transition-colors duration-300 text-[#555555] group-hover:text-[#888888]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {program.description}
                </p>
              </div>

              {/* Price + CTA */}
              <div className="relative flex items-end justify-between mt-8 pt-6 border-t border-[#141414] group-hover:border-[#ccff00]/20 transition-colors duration-300">
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-[#555555] text-[9px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.programs.priceLabel}
                  </span>
                  <span
                    data-testid={`program-price-${program.id}`}
                    className="transition-colors duration-300 text-[#ffffff] group-hover:text-[#ccff00]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {program.price}
                  </span>
                </div>
                <CheckoutButton
                  productId={program.id}
                  className={`px-5 py-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                    program.featured
                      ? "bg-[#ccff00] text-[#050505] hover:opacity-90"
                      : "border border-[#222222] text-[#555555] group-hover:border-[#ccff00] group-hover:text-[#ccff00]"
                  } disabled:opacity-30 disabled:cursor-not-allowed`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
