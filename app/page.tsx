import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-[url('/background.png')] bg-repeat-x bg-size-[auto_100%]">
        <div className="flex justify-center py-24 lg:py-8">
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
      <div className="bg-[url('/tile-border.png')] bg-repeat-x bg-size-[auto_100%] h-16 lg:h-24 mb-4"></div>

      {/* Name badge section */}
      <section className="flex flex-col items-center">
        <Image
          className="px-4 pb-4 -rotate-3"
          src="/kelly.png"
          alt=""
          width={500}
          height={300}
        />
      </section>

      {/* Address and date section */}
      <section className="flex flex-col items-center">
        <div className="lg:flex lg:flex-row lg:gap-4">
          <Image
            className="px-4 lg:px-0 pb-4"
            src="/address.png"
            alt=""
            width={600}
            height={300}
          />
          <Image
            className="px-4 lg:px-0 pb-4"
            src="/date-time.png"
            alt=""
            width={600}
            height={300}
          />
        </div>
      </section>

      {/* Image trio section */}
      <section className="flex flex-col items-center pb-4">
        {/* <div className="flex flex-row gap-2 mb-2 px-8 lg:px-20 py-4 lg:py-12 bg-[url('/frame-thin.png')] bg-no-repeat bg-size-[100%_100%]"> */}
        <div className="flex flex-row gap-2 mb-2">
          <Image
            className="lg:w-44"
            src="/starfish.png"
            alt=""
            width={100}
            height={200}
          />
          <Image
            className="lg:w-44"
            src="/vintage-beach.png"
            alt=""
            width={100}
            height={200}
          />
          <Image
            className="lg:w-44"
            src="/sailboat.png"
            alt=""
            width={100}
            height={200}
          />
        </div>
      </section>

      {/* Registry section */}
      <section className="flex flex-col items-center pb-4">
        <a
          href="https://my.babylist.com/baby-reg-kelly-whipple"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="lg:w-md"
            src="/registry.png"
            alt=""
            width={300}
            height={600}
          />
        </a>
      </section>

      {/* RSVP section */}
      <section className="flex flex-col items-center pb-4">
        <a href="/rsvp">
          <Image
            className="px-4 lg:px-0"
            src="/rsvp.png"
            alt=""
            width={500}
            height={300}
          />
        </a>
      </section>

      {/* Tile footer */}
      <div className="bg-[url('/tile-border.png')] bg-repeat-x bg-size-[auto_100%] h-16 lg:h-24 mt-4"></div>
      <div className="bg-dark-azure h-14 flex items-center justify-between">
        <p className="text-background font-cursive mx-8">
          Crafted with love by
          <br className="sm:hidden" /> Sarah Proctor &copy; 2026
        </p>
        <Image
          className="mx-8"
          src="/lemon.png"
          alt=""
          width={50}
          height={50}
        />
      </div>
    </main>
  )
}
