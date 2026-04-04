import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function RsvpPage() {
  return (
    <>
      <div className="bg-[url('/lemon-background.png')] bg-repeat-y bg-size-[100%_auto] object-cover">
        <div className="p-4">
          <Link href="/" aria-label="back to home page">
            <FaArrowLeft size="28" className="text-cypress" />
          </Link>
        </div>
        <section className="flex justify-around md:justify-center gap-3 mt-2 mx-4">
          <Image
            className="object-scale-down w-16 rotate-1"
            src="/blue-shells.png"
            alt=""
            width={200}
            height={400}
            fill={false}
          />
          <Image
            className="object-scale-down w-24"
            src="/bike.png"
            alt=""
            width={400}
            height={200}
            fill={false}
          />
          <Image
            className="object-scale-down w-18 -rotate-2"
            src="/ciao-bella.png"
            alt=""
            width={200}
            height={400}
            fill={false}
          />
          <Image
            className="object-scale-down w-18"
            src="/shells.png"
            alt=""
            width={200}
            height={400}
            fill={false}
          />
        </section>
        <section className="m-4">
          <form className="bg-background p-4 rounded-lg max-w-xl mx-auto">
            <div className="flex justify-center">
              <Image
                className="object-scale-down w-80 md:70 rounded-sm pb-4"
                src="/bring-a-book.png"
                alt=""
                width={400}
                height={200}
                fill={false}
                aria-label="Kelly asks that you please bring a book in lieu of a card."
              />
            </div>
            <h2 className="font-heading font-semibold text-gray-900 text-center text-2xl">
              RSVP
            </h2>
            <div className="mt-6">
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Your name(s)
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="given-name"
                    placeholder="Your name(s)"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="guests"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Number in your party (including yourself)
                </label>
                <div className="mt-2">
                  <input
                    id="guests"
                    type="number"
                    name="guests"
                    placeholder="0"
                    min="1"
                    required
                    className="block w-20 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Your preferred contact email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Include a message for Kelly and the baby (optional)
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <button
                type="submit"
                className="rounded-md bg-sage px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* Map section */}
        <section className="px-4 py-8 md:px-36">
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
      </div>
    </>
  )
}
