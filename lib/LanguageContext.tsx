'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Locale, type Translations } from './translations'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  const toggle = () => setLocale((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

const defaultValue: LanguageContextValue = {
  locale: 'es',
  t: translations['es'],
  toggle: () => {},
}

export function useLang() {
  return useContext(LanguageContext) ?? defaultValue
}
