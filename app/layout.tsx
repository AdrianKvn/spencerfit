import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spencer Fit | Entrenamiento de Élite",
  description:
    "Transforma tu cuerpo con programas de entrenamiento de élite. Fuerza, hipertrofia y composición corporal diseñados por Spencer Fit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
