import { render, screen } from '@testing-library/react'
import ProgramsSection from '@/components/ProgramsSection'

describe('ProgramsSection', () => {
  it('renderiza 4 cards de programas', () => {
    render(<ProgramsSection />)
    const cards = screen.getAllByTestId(/^program-card-/)
    expect(cards).toHaveLength(4)
  })

  it('cada card tiene un botón "COMPRAR AHORA"', () => {
    render(<ProgramsSection />)
    const buttons = screen.getAllByTestId('checkout-button')
    expect(buttons).toHaveLength(4)
    buttons.forEach((btn) => {
      expect(btn.textContent).toMatch(/comprar ahora/i)
    })
  })

  it('renderiza el programa "Programa Fuerza 12 Semanas"', () => {
    render(<ProgramsSection />)
    expect(screen.getByText(/programa fuerza 12 semanas/i)).toBeInTheDocument()
  })

  it('renderiza el programa "Powerbuilding Pack"', () => {
    render(<ProgramsSection />)
    expect(screen.getByText(/powerbuilding pack/i)).toBeInTheDocument()
  })

  it('muestra precios en las cards', () => {
    render(<ProgramsSection />)
    const prices = screen.getAllByTestId(/^program-price-/)
    expect(prices.length).toBeGreaterThan(0)
    prices.forEach((price) => {
      expect(price.textContent).toMatch(/\$|€|USD|EUR|\d+/)
    })
  })
})
