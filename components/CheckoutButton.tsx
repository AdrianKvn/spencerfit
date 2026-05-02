'use client'

import { useState } from 'react'

interface CheckoutButtonProps {
  productId: string
  label?: string
  className?: string
}

export default function CheckoutButton({
  productId,
  label = 'COMPRAR AHORA',
  className,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })

      if (response.ok) {
        const data = (await response.json()) as { url: string }
        window.location.href = data.url
      } else {
        setError('Hubo un problema. Intenta de nuevo.')
      }
    } catch {
      setError('Hubo un problema. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        data-testid="checkout-button"
        disabled={loading}
        onClick={handleClick}
        aria-label={label}
        className={className}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Cargando...
          </span>
        ) : (
          label
        )}
      </button>
      {error !== null && (
        <p className="text-red-400 text-xs text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
