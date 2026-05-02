'use client'

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Programas", href: "#programas" },
  { label: "Mentoría", href: "#mentoria" },
  { label: "Sobre Mí", href: "#sobre-mi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#hero"
          data-testid="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="text-xl font-black tracking-widest text-white hover:text-[#f97316] transition-colors"
          aria-label="Spencer Fit — inicio"
        >
          SPENCER <span className="text-[#f97316]">FIT</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="#programas"
            data-testid="navbar-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#programas");
            }}
            className="px-5 py-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-bold tracking-widest uppercase rounded transition-colors"
            aria-label="Ver programas de entrenamiento"
          >
            VER PROGRAMAS
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
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors tracking-wide uppercase py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programas"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#programas");
            }}
            className="mt-2 px-5 py-3 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-bold tracking-widest uppercase rounded text-center transition-colors"
            aria-label="Ver programas de entrenamiento"
          >
            VER PROGRAMAS
          </a>
        </div>
      )}
    </header>
  );
}
