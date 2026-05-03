import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="bg-[url('/background-hero.png')] bg-repeat-x bg-size-[auto_100%] pb-18">
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

      {/* Below the fold */}
      <section className="bg-[url('/background-body.png')] py-20 min-h-lvh">
        <div className="flex flex-col items-center">
          <Image
            className="px-4 pb-4 -rotate-3"
            src="/kelly.png"
            alt=""
            width={500}
            height={300}
          />

          {/* Locations data */}
          <div className="lg:flex m-8">
            <Image
              className="p-4"
              src="/date-time.png"
              alt="Saturday, June 13, 1 pm to 4 pm"
              width={500}
              height={300}
            />
            <Link
              href="https://www.google.com/maps/place/2707+Malibu+Rd,+Boise,+ID+83705/@43.5778988,-116.2306942,17z/data=!3m1!4b1!4m6!3m5!1s0x54ae57e771e1c4d9:0x4afa883c20147fbb!8m2!3d43.5778988!4d-116.2281193!16s%2Fg%2F11c4vx5fg7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click for a Google map of 2707 Malibu Road, Boise ID"
            >
              <Image
                className="p-4"
                src="/address.png"
                alt="2707 Malibu Road, Boise ID"
                width={500}
                height={300}
              />
            </Link>
          </div>
          <div className="m-4">
            <Image
              className="Please consider carpooling, ride shares, or biking to reduce parking congestion"
              src="/bike.png"
              alt=""
              width={600}
              height={350}
            />
          </div>
          <div className="m-4">
            <Link
              href="https://my.babylist.com/baby-reg-kelly-whipple"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Click Kelly's registry"
            >
              <Image
                className="lg:w-md"
                src="/registry.png"
                alt="Bambino registry"
                width={300}
                height={400}
              />
            </Link>
          </div>
          <div className="m-4">
            <Link href="/rsvp" aria-label="Click here to RSVP">
              <Image
                className="px-4 lg:px-0"
                src="/rsvp.png"
                alt="Please RSVP by June 1st"
                width={500}
                height={300}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
