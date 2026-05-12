import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="bg-[url('/background-hero.png')] bg-repeat-x bg-size-[auto_100%] pb-18 h-[90vh]">
        <div className="flex justify-center py-28 lg:py-8">
          <h1 className="sr-only">Oops wrong spot.</h1>
          <Link href="/" aria-label="back to home page" aria-live="polite">
            <Image
              className="w-80 lg:w-120"
              src="/not-found.png"
              alt="Not found"
              width={300}
              height={200}
            />
          </Link>
        </div>
      </section>
    </>
  )
}
