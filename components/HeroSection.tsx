'use client'

import { useLang } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();
  const stats = [
    { value: "5+", label: t.hero.statsYears },
    { value: "200+", label: t.hero.statsAthletes },
    { value: "15+", label: t.hero.statsPrograms },
  ];

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center bg-[#050505] pt-[70px] overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[45%] h-full bg-[#0d0d0d] hidden lg:block"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

      <div className="absolute top-[90px] left-6 lg:left-10 flex items-center gap-3 animate-reveal-left" aria-hidden="true">
        <span className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Vol. 01</span>
        <div className="w-12 h-px bg-[#ccff00] animate-line" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-0 items-center">

          <div className="flex flex-col gap-10 lg:pr-20">
            <div className="flex items-center gap-4 animate-reveal-up delay-100">
              <div className="w-8 h-px bg-[#ccff00]" aria-hidden="true" />
              <span className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase" data-testid="hero-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.hero.eyebrow}
              </span>
            </div>

            <div className="flex flex-col gap-2 animate-reveal-up delay-200">
              <h1
                data-testid="hero-title"
                className="leading-none text-[#ffffff]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 12vw, 10rem)", letterSpacing: "0.02em", lineHeight: "0.92" }}
              >
                {t.hero.line1}
                <br />
                <span className="text-[#ccff00]">{t.hero.line2.split(' ')[0]}</span>
                {" "}{t.hero.line2.split(' ').slice(1).join(' ')}
                <br />
                {t.hero.line3}
              </h1>
              <p
                className="text-[#555555] mt-4 max-w-md leading-relaxed text-[15px]"
                data-testid="hero-subtitle"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up delay-300">
              <a
                href="#programas"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#ccff00] text-[#050505] text-[11px] font-medium tracking-[0.25em] uppercase hover:opacity-90 transition-opacity"
              >
                {t.hero.ctaPrimary}
                <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#mentoria"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#222222] text-[#ffffff] text-[11px] font-medium tracking-[0.25em] uppercase hover:border-[#ffffff] transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div data-testid="hero-stats" className="flex gap-10 pt-8 border-t border-[#222222] animate-reveal-up delay-400">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-[#ffffff]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.8rem", letterSpacing: "0.04em", lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span className="text-[#555555] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-testid="hero-image"
            className="relative w-full lg:w-[380px] xl:w-[440px] aspect-[3/4] animate-reveal-up delay-300"
            aria-label="Foto de Spencer Fit"
          >
            <div className="absolute -top-4 -right-4 inset-0 border border-[#222222]" style={{ width: "calc(100% + 16px)", height: "calc(100% + 16px)" }} aria-hidden="true" />
            <div className="relative w-full h-full bg-[#141414] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ccff00]" aria-hidden="true" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #222222 40px, #222222 41px)" }} aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full border border-[#333333] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#333333]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span className="text-[#333333] text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>FOTO SPENCER</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#050505] to-transparent">
                <p className="text-[#555555] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }} aria-hidden="true">
                  Spencer — {t.hero.photoLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-reveal-up delay-700" aria-hidden="true">
        <span className="text-[#555555] text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#222222] to-transparent" />
      </div>
    </section>
  );
}
