import Image from "next/image"
import Section from "@/components/section"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-striped">
        <Hero />
        <Image
          src="/title-badge.png"
          alt=""
          width={375}
          height={100}
          className="mx-auto py-8 relative w-72 lg:w-120 -rotate-3"
        />
      </section>

      {/* Tile border */}
      <div className="flex flex-row -mt-2">
        <Image
          src="/tiles.png"
          alt=""
          width={500}
          height={300}
          className="w-full object-cover"
        />
      </div>

      {/* Masonry section */}
      <section className="flex flex-col items-center py-8">
        <Image className="" src="/date.png" alt="" width={300} height={400} />
        <Image
          className=""
          src="/address.png"
          alt=""
          width={400}
          height={300}
        />
        <div className="flex flex-row gap-1 mb-2">
          <Image
            className=""
            src="/starfish.png"
            alt=""
            width={125}
            height={250}
          />
          <Image
            className=""
            src="/shells.png"
            alt=""
            width={125}
            height={250}
          />
          <Image
            className=""
            src="/shells-in-frame.png"
            alt=""
            width={125}
            height={250}
          />
        </div>
        <div className="flex flex-row gap-1 mb-2">
          <Image className="" src="/bike.png" alt="" width={175} height={100} />
          <Image
            className=""
            src="/framed-lemons.png"
            alt=""
            width={175}
            height={100}
          />
        </div>
        <Image
          className="-ml-2"
          src="/vintage-beach.png"
          alt=""
          width={300}
          height={500}
        />
        <Image
          className=""
          src="/sailboat.png"
          alt=""
          width={300}
          height={500}
        />
      </section>
    </main>
  )
}
