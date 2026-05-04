import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RSVP — Ciao Bambino",
  description: "RSVP for Kelly's baby shower on Saturday, June 13th"
}

export default function RsvpLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
