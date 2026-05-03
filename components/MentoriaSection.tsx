'use client'

import CheckoutButton from '@/components/CheckoutButton'
import { useLang } from "@/lib/LanguageContext"

export default function MentoriaSection() {
  const { t } = useLang();

  return (
    <section
      id="mentoria"
      data-testid="mentoria-section"
      className="bg-[#0d0d0d] py-28 lg:py-36 relative overflow-hidden"
    >
      {/* Background number — más visible */}
      <div
        className="absolute -bottom-12 left-0 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(160px, 25vw, 320px)",
          color: "#1e1e1e",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        02
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-start">

          {/* Left */}
          <div className="flex flex-col gap-10">

            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#ccff00]" aria-hidden="true" />
              <span className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.mentoria.eyebrow}
              </span>
            </div>

            <div>
              <h2
                data-testid="mentoria-title"
                className="leading-none text-[#ffffff]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", letterSpacing: "0.02em", lineHeight: 0.95 }}
              >
                {t.mentoria.title}
              </h2>
              <div className="flex items-baseline gap-4 mt-1">
                <span
                  className="text-[#ccff00]"
                  style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
                >
                  {t.mentoria.subtitle}
                </span>
                <div className="flex-1 h-px bg-[#222222] mt-2 hidden sm:block" aria-hidden="true" />
              </div>
            </div>

            <p
              data-testid="mentoria-description"
              className="text-[#555555] text-[15px] leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              {t.mentoria.description}
            </p>

            <ul data-testid="mentoria-benefits" className="flex flex-col gap-5" role="list">
              {t.mentoria.benefits.map((benefit, i) => (
                <li key={i} data-testid="mentoria-benefit" className="flex items-start gap-5 group">
                  <span
                    className="text-[#ccff00] mt-0.5 shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[#555555] group-hover:text-[#ffffff] transition-colors text-[14px] leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 pt-8 border-t border-[#222222]">
              <div className="flex flex-col gap-1">
                <span className="text-[#555555] text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {t.mentoria.investmentLabel}
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    data-testid="mentoria-price"
                    className="text-[#ffffff]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", letterSpacing: "0.04em", lineHeight: 1 }}
                  >
                    $199
                  </span>
                  <span className="text-[#555555] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t.mentoria.priceUnit}
                  </span>
                </div>
              </div>

              <CheckoutButton
                productId="mentoria-1-1"
                label={t.mentoria.cta.toUpperCase()}
                className="group relative px-8 py-4 border border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-[#050505] text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Right: Stats card */}
          <div data-testid="mentoria-visual" className="relative">
            <div className="w-full h-px bg-[#ccff00] mb-0" aria-hidden="true" />

            <div className="border border-[#222222] border-t-0 p-8 flex flex-col gap-8">
              <blockquote className="flex flex-col gap-4">
                <div
                  className="text-[#ccff00]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", lineHeight: 0.8, letterSpacing: "0.04em" }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="text-[#ffffff]" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.4 }}>
                  {t.mentoria.quoteText}
                </p>
                <footer className="text-[#555555] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  — Spencer Fit
                </footer>
              </blockquote>

              <div className="h-px bg-[#222222]" aria-hidden="true" />

              <div className="grid grid-cols-2 gap-px bg-[#222222]">
                {t.mentoria.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 p-5 bg-[#0d0d0d]">
                    <span className="text-[#ffffff]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", letterSpacing: "0.04em", lineHeight: 1 }}>
                      {stat.value}
                    </span>
                    <span className="text-[#555555] text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
