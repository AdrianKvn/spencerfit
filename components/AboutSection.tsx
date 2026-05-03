'use client'

import { useLang } from "@/lib/LanguageContext"

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section
      id="sobre-mi"
      data-testid="about-section"
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
        03
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: Photo placeholder */}
          <div
            data-testid="about-image"
            className="relative w-full aspect-[4/5] order-2 lg:order-1"
            aria-label="Foto de Spencer Fit"
          >
            {/* Offset border decoration */}
            <div
              className="absolute -bottom-4 -left-4 border border-[#222222]"
              style={{ width: "calc(100% + 16px)", height: "calc(100% + 16px)" }}
              aria-hidden="true"
            />

            <div className="relative w-full h-full bg-[#141414] overflow-hidden">
              {/* Side accent bar */}
              <div
                className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#ccff00]"
                aria-hidden="true"
              />

              {/* Horizontal lines texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 30px, #222222 30px, #222222 31px)",
                }}
                aria-hidden="true"
              />

              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full border border-[#222222] flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#222222]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span
                  className="text-[#222222] text-[10px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  FOTO SPENCER
                </span>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 right-6 bg-[#050505] border border-[#222222] px-4 py-3">
                <div
                  className="text-[#ccff00]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  5+
                </div>
                <div
                  className="text-[#555555] text-[9px] tracking-[0.3em] uppercase mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.about.yearsLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10 order-1 lg:order-2 lg:pt-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#ccff00]" aria-hidden="true" />
              <span
                className="text-[#ccff00] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.about.eyebrow}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2
                data-testid="about-title"
                className="leading-none text-[#ffffff]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                  letterSpacing: "0.02em",
                  lineHeight: 0.95,
                }}
              >
                SPENCER
              </h2>
              <span
                className="text-[#ccff00] block mt-1"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.1,
                }}
              >
                fit
              </span>
              {/* Texto accesible para tests */}
              <span className="sr-only">Spencer Fit</span>
            </div>

            {/* Bio */}
            <div
              data-testid="about-bio"
              className="flex flex-col gap-5"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              <p className="text-[#555555] text-[14px] leading-relaxed">{t.about.bio1}</p>
              <p className="text-[#555555] text-[14px] leading-relaxed">{t.about.bio2}</p>
            </div>

            {/* Quote */}
            <blockquote
              data-testid="about-quote"
              className="flex gap-5 items-start py-2"
            >
              <div
                className="text-[#ccff00] shrink-0"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3rem",
                  lineHeight: 0.7,
                }}
                aria-hidden="true"
              >
                "
              </div>
              <p
                className="text-[#ffffff]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                }}
              >
                {t.about.quote}
              </p>
            </blockquote>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-px bg-[#222222] border border-[#222222]">
              {t.about.credentials.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-[#050505]"
                >
                  <span
                    className="text-[#ccff00] shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#555555] text-[12px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                    {label}
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
