import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-[url('/background.png')] bg-repeat-x bg-size-[auto_100%]">
        <div className="flex justify-center py-8">
          <Image
            className="w-80 lg:w-120"
            src="/hero.png"
            alt="Ciao Bambino, join us to celebrate"
            width={300}
            height={600}
          />
        </div>
      </section>

      {/* Tile border */}
      <div className="bg-[url('/tile-border.png')] bg-repeat-x bg-size-[auto_100%] h-16 lg:h-24"></div>

      {/* Masonry section */}
      <section className="flex flex-col items-center py-8">
        <div className="flex flex-row gap-1 mb-2">
          <Image
            className=""
            src="/address-only.png"
            alt=""
            width={175}
            height={100}
          />
          <Image
            className=""
            src="/date-time.png"
            alt=""
            width={175}
            height={100}
          />
        </div>
        <Image className="" src="/date.png" alt="" width={300} height={400} />
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
