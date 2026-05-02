import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renderiza el logo SPENCER FIT', () => {
    render(<Navbar />)
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-logo').textContent).toMatch(/SPENCER\s*FIT/i)
  })

  it('renderiza el link de Programas con href correcto', () => {
    render(<Navbar />)
    const link = screen.getByTestId('nav-link-programas')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#programas')
  })

  it('renderiza el link de Mentoría con href correcto', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /mentoría/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#mentoria')
  })

  it('renderiza el link de Sobre Mí con href correcto', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /sobre mí/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#sobre-mi')
  })

  it('renderiza el botón CTA "VER PROGRAMAS"', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /ver programas/i })).toBeInTheDocument()
  })
})
