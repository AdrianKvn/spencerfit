import { render, screen } from '@testing-library/react'
import AboutSection from '@/components/AboutSection'

describe('AboutSection', () => {
  it('renderiza la sección con id="sobre-mi"', () => {
    render(<AboutSection />)
    expect(document.getElementById('sobre-mi')).toBeInTheDocument()
  })

  it('muestra el nombre "Spencer Fit"', () => {
    render(<AboutSection />)
    expect(screen.getByText(/spencer fit/i)).toBeInTheDocument()
  })

  it('contiene la frase "La disciplina construye campeones"', () => {
    render(<AboutSection />)
    expect(
      screen.getByText(/la disciplina construye campeones/i)
    ).toBeInTheDocument()
  })
})
