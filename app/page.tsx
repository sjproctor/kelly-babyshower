import Image from "next/image"
import Section from "@/components/section"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Everything below the hero */}
      <Section className="bg-striped">
        <h1 className="text-center text-[5rem] text-orange font-heading">
          Kelly's Baby Shower
        </h1>
      </Section>

      <div className="flex gap-4 justify-center">
        <p className="m-5">More info here</p>
        <p className="m-5">More info here</p>
        <p className="m-5">More info here</p>
      </div>

      <Image
        className="w-full"
        src="/lemon-garland.png"
        alt="Lemon garland"
        width={200}
        height={40}
      />
    </main>
  )
}
