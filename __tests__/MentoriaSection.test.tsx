import { render, screen } from '@testing-library/react'
import MentoriaSection from '@/components/MentoriaSection'

describe('MentoriaSection', () => {
  it('renderiza la sección con id="mentoria"', () => {
    render(<MentoriaSection />)
    expect(document.getElementById('mentoria')).toBeInTheDocument()
  })

  it('muestra el título "MENTORÍA 1:1"', () => {
    render(<MentoriaSection />)
    expect(screen.getByText(/mentoría 1:1/i)).toBeInTheDocument()
  })

  it('contiene el botón "APLICAR A MENTORÍA"', () => {
    render(<MentoriaSection />)
    const btn = screen.getByTestId('checkout-button')
    expect(btn).toBeInTheDocument()
    expect(btn.textContent).toMatch(/aplicar a mentoría/i)
  })

  it('muestra lista de beneficios con al menos 3 items', () => {
    render(<MentoriaSection />)
    const benefits = screen.getAllByTestId('mentoria-benefit')
    expect(benefits.length).toBeGreaterThanOrEqual(3)
  })

  it('muestra el precio de la mentoría', () => {
    render(<MentoriaSection />)
    expect(screen.getByTestId('mentoria-price')).toBeInTheDocument()
  })
})
