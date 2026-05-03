import type { Metadata } from "next"
import {
  Anton,
  Corinthia,
  Cormorant_Garamond,
  Dancing_Script,
  Italiana,
  Montserrat
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Footer from "@/components/Footer"

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

const dancing = Dancing_Script({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing"
})

const italiana = Italiana({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-italiana"
})

const montserrat = Montserrat({
  weight: ["200", "300"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "Ciao Bambino",
  description: "Please join us to celebrate Kelly on June 13th, 2026",
  openGraph: {
    title: "Ciao Bambino",
    description: "Please join us to celebrate Kelly on June 13th, 2026",
    url: "https://kelly-babyshower.vercel.app/",
    siteName: "Ciao Bambino",
    images: [
      {
        url: "https://kelly-babyshower.vercel.app/preview.png" // Must be absolute
      }
    ],
    type: "website"
  }
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
        className={`${anton.variable} ${corinthia.variable} ${cormorant.variable} ${dancing.variable} ${montserrat.variable} ${italiana.variable} antialiased text-base`}
      >
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
