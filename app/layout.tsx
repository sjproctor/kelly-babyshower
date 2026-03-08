import type { Metadata } from "next"
import {
  Pacifico,
  Bebas_Neue,
  Cormorant_Garamond,
  Josefin_Sans
} from "next/font/google"
import "./globals.css"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico"
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
})

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-garamond"
})

const josefin = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-josefin"
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
      <body
        className={`${pacifico.variable} ${bebasNeue.variable} ${cormorant.variable} ${josefin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
