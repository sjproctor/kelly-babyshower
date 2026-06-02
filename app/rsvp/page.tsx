"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

type RsvpData = {
  name: string
  guests: string
  email: string
  message: string
  declining: boolean
}

type FieldErrors = Partial<Record<"name" | "guests" | "email", string>>

export default function RsvpPage() {
  const [formData, setFormData] = useState<RsvpData>({
    name: "",
    guests: "",
    email: "",
    message: "",
    declining: false
  })
  const [submitted, setSubmitted] = useState<RsvpData | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const nameRef = useRef<HTMLInputElement>(null)
  const guestsRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const validate = (data: RsvpData): FieldErrors => {
    const errs: FieldErrors = {}
    if (!data.name.trim()) errs.name = "Please enter your name."
    if (!data.declining) {
      const guestsNum = Number(data.guests)
      if (!data.guests.trim() || Number.isNaN(guestsNum) || guestsNum < 1) {
        errs.guests = "Please enter at least 1 guest."
      }
    }
    if (!data.email.trim()) {
      errs.email = "Please enter your email address."
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errs.email = "Please enter a valid email address."
    }
    return errs
  }

  const clearFieldError = (field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const submitRsvp = async () => {
    setError(null)
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs)
      if (errs.name) nameRef.current?.focus()
      else if (errs.guests) guestsRef.current?.focus()
      else if (errs.email) emailRef.current?.focus()
      return
    }
    setFieldErrors({})
    setSubmitting(true)
    const payload: RsvpData = formData.declining
      ? { ...formData, guests: "0" }
      : formData
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" }
      })

      if (res.ok) {
        setSubmitted(payload)
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setError("Something went wrong submitting your RSVP. Please try again.")
      }
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <>
      <div className="bg-[url('/background-rsvp.png')] bg-repeat-y bg-size-[100%_auto] object-cover">
        <div className="p-2">
          <Link href="/" aria-label="back to home page" aria-live="polite">
            <Image width={100} height={75} src="/home.png" alt="" />
          </Link>
        </div>
        <section className="m-4">
          <div className="flex justify-center">
            <Image
              className="pb-4 rounded-md"
              src="/bring-a-book.png"
              alt="Kelly asks that you please bring a book in lieu of a card."
              width={400}
              height={200}
              loading="eager"
            />
          </div>
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-background p-6 rounded-lg max-w-xl mx-auto"
            >
              <h1 className="font-heading font-semibold text-gray-900 text-center text-2xl">
                Thank you, {submitted.name}!
              </h1>
              <p className="font-body text-gray-700 text-center text-xl mt-2">
                {submitted.declining
                  ? "We're sorry you can't make it and thank you for letting us know. You'll be missed!"
                  : "Your RSVP has been submitted."}
              </p>
              <dl className="font-body text-gray-800 my-6 mx-8 space-y-2">
                <div className="flex gap-2">
                  <p className="font-bold text-xl">Name: {submitted.name}</p>
                </div>
                {!submitted.declining && (
                  <div className="flex gap-2">
                    <p className="font-bold text-xl">
                      Party size: {submitted.guests}
                    </p>
                  </div>
                )}
                <div className="flex gap-2">
                  <p className="font-bold text-xl">Email: {submitted.email}</p>
                </div>
                {submitted.message && (
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">Message:</p>
                    <p className="whitespace-pre-wrap font-bold text-xl">
                      {submitted.message}
                    </p>
                  </div>
                )}
              </dl>

              {!submitted.declining && (
                <div className="flex justify-center">
                  <Image
                    src="/submitted.png"
                    alt="We look forward to seeing you on Saturday June 13th. Drop in anytime between 1 pm and 4 pm. See the map below for directions to 2707 Malibu Road 83705"
                    width={400}
                    height={200}
                    loading="eager"
                  />
                </div>
              )}

              <div className="flex justify-center pt-6">
                <Link
                  href="/"
                  className="rounded-md bg-gray-blue px-3 py-2 text-xl font-bold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue font-body mx-2"
                >
                  Back to home
                </Link>
                <Link
                  href="https://my.babylist.com/baby-reg-kelly-whipple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-blue px-3 py-2 text-xl font-bold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue font-body mx-2"
                >
                  Registry
                </Link>
              </div>
            </div>
          ) : (
            <form
              className="bg-background p-4 rounded-lg max-w-xl mx-auto"
              noValidate
              onSubmit={(e) => {
                e.preventDefault()
                submitRsvp()
              }}
            >
              <h1 className="font-heading font-semibold text-gray-900 text-center text-2xl">
                RSVP
              </h1>
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
                      ref={nameRef}
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Name(s)"
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        clearFieldError("name")
                      }}
                      required
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={
                        fieldErrors.name ? "name-error" : undefined
                      }
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-blue sm:text-lg aria-invalid:outline-red-600"
                    />
                    {fieldErrors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-700 font-body"
                      >
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="my-4">
                  <label className="flex items-center gap-2 text-lg font-medium text-gray-900 font-body cursor-pointer">
                    <input
                      type="checkbox"
                      name="declining"
                      checked={formData.declining}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          declining: e.target.checked
                        })
                        clearFieldError("guests")
                      }}
                      className="h-5 w-5 rounded border-gray-300 text-gray-blue focus:outline-2 focus:outline-offset-2 focus:outline-gray-blue"
                    />
                    Declining with regrets
                  </label>
                </div>
                {!formData.declining && (
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
                        ref={guestsRef}
                        type="number"
                        name="guests"
                        placeholder="0"
                        min="1"
                        onChange={(e) => {
                          setFormData({ ...formData, guests: e.target.value })
                          clearFieldError("guests")
                        }}
                        required
                        aria-invalid={!!fieldErrors.guests}
                        aria-describedby={
                          fieldErrors.guests ? "guests-error" : undefined
                        }
                        className="block w-20 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-blue sm:text-lg aria-invalid:outline-red-600"
                      />
                      {fieldErrors.guests && (
                        <p
                          id="guests-error"
                          className="mt-1 text-sm text-red-700 font-body"
                        >
                          {fieldErrors.guests}
                        </p>
                      )}
                    </div>
                  </div>
                )}
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
                      ref={emailRef}
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        clearFieldError("email")
                      }}
                      required
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-blue sm:text-lg aria-invalid:outline-red-600"
                    />
                    {fieldErrors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-700 font-body"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
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
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-blue sm:text-lg"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center my-4">
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="inline-flex items-center gap-2 rounded-md bg-gray-blue px-3 py-2 text-xl font-bold text-white shadow-xs cursor-pointer hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue font-body disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting && (
                    <span
                      aria-hidden="true"
                      className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                    />
                  )}
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                <p role="status" aria-live="polite" className="sr-only">
                  {submitting ? "Submitting your RSVP, please wait." : ""}
                </p>
              </div>
            </form>
          )}
        </section>

        {/* Map section */}
        <section aria-label="Party location map">
          <Link
            href="https://www.google.com/maps?ll=43.577899,-116.228119&z=16&t=m&hl=en&gl=US&mapclient=embed&q=2707+Malibu+Rd+Boise,+ID+83705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open map of 2707 Malibu Rd, Boise, ID 83705 in Google Maps"
            className="relative block mx-auto max-w-xl lg:max-w-2xl px-4 lg:px-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue"
          >
            <Image
              src="/frame-blue.png"
              alt=""
              aria-hidden="true"
              width={1683}
              height={1426}
              className="w-full h-auto"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[10%] w-[80%] h-[80%] bg-[#fffdf2] flex items-center justify-center"
            >
              <span className="font-body text-gray-700 text-lg">
                Loading Google map...
              </span>
            </div>
            <iframe
              title="Map of 2707 Malibu Rd, Boise, ID 83705"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.6034166332322!2d-116.22842554800161!3d43.577597375198785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae57e771e1c4d9%3A0x4afa883c20147fbb!2s2707%20Malibu%20Rd%2C%20Boise%2C%20ID%2083705!5e0!3m2!1sen!2sus!4v1774305479984!5m2!1sen!2sus"
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute inset-[10%] w-[80%] h-[80%]"
            />
          </Link>
          <div className="flex justify-center py-4">
            <Link
              href="https://www.google.com/maps?ll=43.577899,-116.228119&z=16&t=m&hl=en&gl=US&mapclient=embed&q=2707+Malibu+Rd+Boise,+ID+83705"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-gray-blue px-3 py-2 text-xl font-bold text-white shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-blue font-body"
            >
              Open in Google Maps
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
