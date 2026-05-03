'use client'

import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, locale, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.programs, href: "#programas" },
    { label: t.nav.mentoria, href: "#mentoria" },
    { label: t.nav.about, href: "#sobre-mi" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#hero"
          data-testid="navbar-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-baseline gap-1.5 group"
          aria-label="Spencer Fit — inicio"
        >
          <span
            className="text-[#ffffff] group-hover:text-[#ccff00] transition-colors duration-300"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.12em" }}
          >
            SPENCER
          </span>
          <span
            className="text-[#ccff00]"
            style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "1.1rem" }}
          >
            fit
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[11px] font-medium text-[#555555] hover:text-[#ffffff] transition-colors tracking-[0.2em] uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: language toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={`Cambiar idioma a ${locale === 'es' ? 'English' : 'Español'}`}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#222222] hover:border-[#ccff00] transition-all duration-200"
          >
            <span className={`text-[10px] font-medium tracking-[0.15em] transition-colors ${locale === 'es' ? 'text-[#ccff00]' : 'text-[#555555]'}`}>ES</span>
            <span className="text-[#333333] text-[10px]">/</span>
            <span className={`text-[10px] font-medium tracking-[0.15em] transition-colors ${locale === 'en' ? 'text-[#ccff00]' : 'text-[#555555]'}`}>EN</span>
          </button>

          <a
            href="#programas"
            data-testid="navbar-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick("#programas"); }}
            className="group relative px-6 py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase overflow-hidden border border-[#ccff00] text-[#ccff00] hover:text-[#050505] transition-colors duration-300"
            aria-label="Ver programas de entrenamiento"
          >
            <span className="absolute inset-0 bg-[#ccff00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
            <span className="relative">{t.nav.cta}</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          data-testid="navbar-hamburger"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 bg-[#ffffff] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-[#ffffff] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#ffffff] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-[#222222] px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium text-[#555555] hover:text-[#ffffff] transition-colors tracking-[0.2em] uppercase py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-2 border border-[#222222] text-[10px] tracking-[0.15em]"
            >
              <span className={locale === 'es' ? 'text-[#ccff00]' : 'text-[#555555]'}>ES</span>
              <span className="text-[#333333]">/</span>
              <span className={locale === 'en' ? 'text-[#ccff00]' : 'text-[#555555]'}>EN</span>
            </button>
            <a
              href="#programas"
              onClick={(e) => { e.preventDefault(); handleNavClick("#programas"); }}
              className="flex-1 px-6 py-3 bg-[#ccff00] text-[#050505] text-[11px] font-medium tracking-[0.2em] uppercase text-center"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
