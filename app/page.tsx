import Image from "next/image"
import Section from "@/components/section"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <main>
      <section className="bg-striped">
        <Hero />
        <Section className="">
          <div className="relative">
            <Image
              src="/postage-stamp.png"
              alt=""
              width={375}
              height={100}
              className="mx-auto relative w-56 lg:w-96 -rotate-2"
            />
            <h1 className="absolute top-5 left-0 right-0 text-center text-[3.5rem] lg:text-[6rem] text-orange font-cursive leading-none -rotate-12 blur-[0.5px]">
              Kelly's <br /> Baby Shower
            </h1>
          </div>
        </Section>
      </section>
      <section className="bg-orange-background p-4">
        <div className="flex row gap-1 justify-center">
          <Image
            src="/lemon.png"
            alt=""
            width={50}
            height={100}
            className="w-12 -rotate-95"
          />
          <Image
            src="/lemon.png"
            alt=""
            width={50}
            height={100}
            className="w-12 -rotate-85"
          />
          <Image
            src="/lemon.png"
            alt=""
            width={50}
            height={100}
            className="w-12 -rotate-91"
          />
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="flex flex-row gap-1 justify-center">
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-row gap-1 justify-center">
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-row gap-1 justify-center">
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-row gap-1 justify-center">
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-base"
                src="/italian-tiles.png"
                alt=""
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
