"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

type RsvpData = {
  name: string
  guests: string
  email: string
  message: string
}

export default function RsvpPage() {
  const [formData, setFormData] = useState<RsvpData>({
    name: "",
    guests: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState<RsvpData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const submitRsvp = async () => {
    setError(null)
    const res = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
      setSubmitted(formData)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      setError("Something went wrong submitting your RSVP. Please try again.")
    }
  }
  return (
    <>
      <div className="bg-[url('/background-rsvp.png')] bg-repeat-y bg-size-[100%_auto] object-cover">
        <div className="p-4">
          <Link href="/" aria-label="back to home page">
            <FaArrowLeft size="28" className="text-cypress" />
          </Link>
        </div>
        <section className="m-4">
          <div className="flex justify-center">
            <Image
              className="pb-4 rounded-md"
              src="/bring-a-book.png"
              alt=""
              width={400}
              height={200}
              loading="eager"
              aria-label="Kelly asks that you please bring a book in lieu of a card."
            />
          </div>
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-background p-6 rounded-lg max-w-xl mx-auto"
            >
              <h2 className="font-heading font-semibold text-gray-900 text-center text-2xl">
                Thank you, {submitted.name}!
              </h2>
              <p className="font-body text-gray-700 text-center text-xl mt-2">
                Your RSVP has been submitted.
              </p>
              <dl className="font-body text-gray-800 mt-6 space-y-2 bg-sage p-6 rounded-md">
                <div className="flex gap-2">
                  <p className="font-semibold text-white text-lg">
                    Name: {submitted.name}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-white text-lg">
                    Party size: {submitted.guests}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-white text-lg">
                    Email: {submitted.email}
                  </p>
                </div>
                {submitted.message && (
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white text-lg">Message:</p>
                    <p className="whitespace-pre-wrap">{submitted.message}</p>
                  </div>
                )}
              </dl>

              <div className="flex justify-center">
                <Image
                  className="py-8"
                  src="/submitted.png"
                  alt=""
                  width={400}
                  height={200}
                  loading="eager"
                  aria-label="We look forward to seeing you on Saturday June 13th. Drop in anytime between 1 pm and 4 pm. See the map below for directions to 2707 Malibu Road 83705"
                />
              </div>

              <div className="flex justify-center">
                <Link
                  href="/"
                  className="rounded-md bg-sage px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-lemon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage font-body mx-2"
                >
                  Back to home
                </Link>
                <Link
                  href="https://my.babylist.com/baby-reg-kelly-whipple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-sage px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-lemon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage font-body mx-2"
                >
                  Registry
                </Link>
              </div>
            </div>
          ) : (
            <form
              className="bg-background p-4 rounded-lg max-w-xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault()
                submitRsvp()
              }}
            >
              <h2 className="font-heading font-semibold text-gray-900 text-center text-2xl">
                RSVP
              </h2>
              <p className="font-body text-gray-700 text-center text-xl">
                Please feel free to drop in anytime between 1 pm and 4 pm.
              </p>
              {error && (
                <div
                  role="alert"
                  className="mt-4 rounded-md bg-red-50 border border-red-200 px-3 py-2 text-red-800 font-body text-base"
                >
                  {error}
                </div>
              )}
              <div className="mt-6">
                <div className="my-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-900 font-body"
                  >
                    Your name(s)*
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="given-name"
                      placeholder="Name(s)"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-lg"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="guests"
                    className="block text-lg font-medium text-gray-900 font-body"
                  >
                    Number in your party (including yourself)*
                  </label>
                  <div className="mt-2">
                    <input
                      id="guests"
                      type="number"
                      name="guests"
                      placeholder="0"
                      min="1"
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      required
                      className="block w-20 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-lg"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-900 font-body"
                  >
                    Your preferred contact email*
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-lg"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-900 font-body"
                  >
                    Include a message for Kelly and the baby (optional)
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Message..."
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sage sm:text-lg"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-4">
                <button
                  type="submit"
                  className="rounded-md bg-sage px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-lemon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage font-body"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
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
