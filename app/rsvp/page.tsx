import Image from "next/image"

export default function RsvpPage() {
  return (
    <main>
      <section className="flex flex-col items-center m-4">
        <Image className="" src="/bike.png" alt="" width={500} height={300} />
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
