import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="bg-[url('/background.png')] bg-repeat-x bg-size-[auto_100%] border-b-1 border-dark-azure pb-16">
        <div className="flex justify-center py-28 lg:py-8">
          <Image
            className="w-80 lg:w-120"
            src="/hero.png"
            alt="Ciao Bambino, join us to celebrate"
            width={300}
            height={600}
          />
        </div>
      </section>

      <div className="bg-[url('/background-body.png')] py-20 min-h-lvh">
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
        <section className="flex flex-wrap justify-center gap-4 w-full px-4">
          <div className="w-100 h-60 md:w-120 md:h-70 relative shrink-0">
            <Image
              className="object-contain"
              src="/time-date.png"
              alt=""
              fill
            />
          </div>
          <Link
            href="https://www.google.com/maps/place/2707+Malibu+Rd,+Boise,+ID+83705/@43.5778988,-116.2306942,17z/data=!3m1!4b1!4m6!3m5!1s0x54ae57e771e1c4d9:0x4afa883c20147fbb!8m2!3d43.5778988!4d-116.2281193!16s%2Fg%2F11c4vx5fg7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="w-100 h-60 md:w-120 md:h-70 relative shrink-0"
            aria-label="click here for a google map of 2707 Malibu, Boise ID"
          >
            <Image className="object-contain" src="/address.png" alt="" fill />
          </Link>
        </section>

        {/* Image collage section */}
        <section className="my-4">
          <div className="flex justify-around md:justify-center gap-3 mt-2 mx-4">
            <Image
              className="object-scale-down w-18"
              src="/starfish.png"
              alt=""
              width={100}
              height={50}
              fill={false}
            />
            <Image
              className="object-scale-down rotate-1"
              src="/vintage-beach.png"
              alt=""
              width={50}
              height={100}
              fill={false}
            />
            <Image
              className="object-scale-down w-18 -rotate-2"
              src="/sailboat.png"
              alt=""
              width={50}
              height={100}
              fill={false}
            />
            <Image
              className="object-scale-down w-18 -rotate-1"
              src="/stork.png"
              alt=""
              width={50}
              height={100}
              fill={false}
            />
            <Image
              className="object-scale-down w-18 rotate-1"
              src="/shells-in-frame.png"
              alt=""
              width={50}
              height={100}
              fill={false}
            />
          </div>
          <div className="flex justify-center gap-4 mb-2"></div>
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
          <Link href="/rsvp">
            <Image
              className="px-4 lg:px-0"
              src="/rsvp.png"
              alt=""
              width={500}
              height={300}
            />
          </Link>
        </section>
      </div>
    </>
  )
}
