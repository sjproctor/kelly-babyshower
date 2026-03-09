import type { Metadata } from "next"
import {
  Anton,
  Corinthia,
  Cormorant_Garamond,
  Italiana,
  Montserrat
} from "next/font/google"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton"
})

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-corinthia"
})

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-garamond"
})

const italiana = Italiana({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

const montserrat = Montserrat({
  weight: ["200", "300"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "Ciao Bambino",
  description: "Kelly's baby shower"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* text-base is a Tailwind utility class that sets the font size to 1rem (16px) */}
      <body
        className={`${corinthia.variable} ${anton.variable} ${cormorant.variable} ${montserrat.variable} ${italiana.variable} antialiased text-base`}
      >
        {children}
      </body>
    </html>
  )
}
