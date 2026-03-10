import Image from "next/image"
import Section from "@/components/section"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Everything below the hero */}
      <Section className="bg-striped">
        <h1 className="text-center text-[3rem] lg:text-[5rem] text-orange font-heading font-bold">
          Kelly's Baby Shower
        </h1>
      </Section>

      <div className="flex gap-4 justify-center">
        <p className="p-10">More info here</p>
        <p className="p-10">More info here</p>
        <p className="p-10">More info here</p>
      </div>
      <div className="bg-tile flex gap-4 justify-center">
        <p className="p-10">More info here</p>
        <p className="p-10">More info here</p>
        <p className="p-10">More info here</p>
      </div>
    </main>
  )
}
