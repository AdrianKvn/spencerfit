import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renderiza el footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('muestra "SPENCER FIT"', () => {
    render(<Footer />)
    expect(screen.getByText(/spencer fit/i)).toBeInTheDocument()
  })

  it('contiene link a Instagram', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('contiene link a YouTube', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  })

  it('contiene link a TikTok', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('muestra el año de copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })
})
