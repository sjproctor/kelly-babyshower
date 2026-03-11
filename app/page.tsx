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
              className="mx-auto relative w-64 lg:w-120 -rotate-2"
            />
            <h1 className="absolute top-7 lg:top-15 left-0 right-0 text-center text-[2.7rem] lg:text-[5rem] text-orange font-cursive leading-none -rotate-12 blur-[0.5px]">
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

      {/* Masonry section */}
      <section>
        <div className="py-8 flex flex-row gap-1 justify-center">
          {/* Col-1 */}
          <div className="flex flex-col gap-1">
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
                src="/lemon-background.png"
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
                src="/lemon-background.png"
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
          {/* Col-2 */}
          <div className="flex flex-col gap-1">
            <div className="border-1 border-azzurro bg-sky">
              <Image
                className="h-auto max-w-full rounded-base"
                src="/lemon-tree.png"
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
          {/* Col-3 */}
          <div className="flex flex-col gap-1">
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
