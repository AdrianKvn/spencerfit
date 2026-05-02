import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

describe('HeroSection', () => {
  it('renderiza el section con id="hero"', () => {
    render(<HeroSection />)
    expect(document.getElementById('hero')).toBeInTheDocument()
  })

  it('renderiza el título principal', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('muestra el contador "5+ Años"', () => {
    render(<HeroSection />)
    expect(screen.getByText(/^5\+$/)).toBeInTheDocument()
    expect(screen.getByText(/años/i)).toBeInTheDocument()
  })

  it('muestra el contador "200+ Atletas"', () => {
    render(<HeroSection />)
    expect(screen.getByText(/200\+/)).toBeInTheDocument()
    expect(screen.getByText(/atletas/i)).toBeInTheDocument()
  })

  it('muestra el contador "15+ Programas"', () => {
    render(<HeroSection />)
    expect(screen.getByText(/^15\+$/)).toBeInTheDocument()
    expect(screen.getByText(/^programas$/i)).toBeInTheDocument()
  })

  it('contiene un botón CTA visible', () => {
    render(<HeroSection />)
    const cta = screen.getByTestId('hero-cta-primary')
    expect(cta).toBeInTheDocument()
    expect(cta).toBeVisible()
  })
})
