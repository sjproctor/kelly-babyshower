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

      {/* Address and date section */}
      <section className="flex flex-col items-center">
        <div className="lg:flex lg:flex-row lg:gap-4">
          <Image
            className="px-4 lg:px-0 pb-4"
            src="/address-only.png"
            alt=""
            width={500}
            height={300}
          />
          <Image
            className="px-4 lg:px-0 pb-4"
            src="/date-time.png"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </section>

      {/* Image trio section */}
      <section className="flex flex-col items-center pb-4">
        {/* <div className="flex flex-row gap-2 mb-2 px-8 lg:px-20 py-4 lg:py-12 bg-[url('/frame-thin.png')] bg-no-repeat bg-size-[100%_100%]"> */}
        <div className="flex flex-row gap-2 mb-2">
          <Image
            className="lg:w-48"
            src="/starfish.png"
            alt=""
            width={100}
            height={200}
          />
          <Image
            className="lg:w-48"
            src="/vintage-beach.png"
            alt=""
            width={100}
            height={200}
          />
          <Image
            className="lg:w-48"
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
        <Image
          className="px-4 lg:px-0"
          src="/rsvp.png"
          alt=""
          width={500}
          height={300}
        />
      </section>

      {/* Map section */}
      <section className="flex flex-col items-center pb-4">
        <a
          href="https://www.google.com/maps?ll=43.577899,-116.228119&z=16&t=m&hl=en&gl=US&mapclient=embed&q=2707+Malibu+Rd+Boise,+ID+83705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.6034166332322!2d-116.22842554800161!3d43.577597375198785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae57e771e1c4d9%3A0x4afa883c20147fbb!2s2707%20Malibu%20Rd%2C%20Boise%2C%20ID%2083705!5e0!3m2!1sen!2sus!4v1774305479984!5m2!1sen!2sus"
              loading="lazy"
              className="absolute inset-0 w-full h-full p-8 md:p-12 lg:p-18"
            />
            <Image
              className="relative z-10 w-full"
              src="/frame-yellow.png"
              alt=""
              width={700}
              height={300}
              aria-hidden="true"
            />
          </div>
        </a>
      </section>
    </main>
  )
}
