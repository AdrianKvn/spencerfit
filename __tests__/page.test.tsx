import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage (integración)', () => {
  it('renderiza la sección hero', () => {
    render(<HomePage />)
    expect(document.getElementById('hero')).toBeInTheDocument()
  })

  it('renderiza la sección de programas', () => {
    render(<HomePage />)
    expect(document.getElementById('programas')).toBeInTheDocument()
  })

  it('renderiza la sección de mentoría', () => {
    render(<HomePage />)
    expect(document.getElementById('mentoria')).toBeInTheDocument()
  })

  it('renderiza la sección sobre mí', () => {
    render(<HomePage />)
    expect(document.getElementById('sobre-mi')).toBeInTheDocument()
  })

  it('contiene la Navbar con el logo', () => {
    render(<HomePage />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('contiene el Footer', () => {
    render(<HomePage />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
