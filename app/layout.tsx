import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACTIVZ GNM-X | Suplemento Activador Nrf2 - Félix Puente",
  description:
    "Descubre ACTIVZ GNM-X, el suplemento activador de Nrf2 que potencia tu energía celular y bienestar. 30 cápsulas con envío gratuito. Félix Puente - Bienestar y Salud Natural.",
  keywords: [
    "ACTIVZ GNM-X",
    "Nrf2",
    "suplemento natural",
    "energía celular",
    "bienestar",
    "salud natural",
    "antioxidante",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
