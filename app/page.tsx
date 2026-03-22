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
      <div className="flex row -m-2">
        <Image
          src="/tiles.png"
          alt=""
          width={500}
          height={200}
          className="w-full object-cover"
        />
      </div>

      {/* Masonry section */}
      <section className="flex row justify-center m-8">
        {/* Col-1 */}
        <div className="flex flex-col items-end mt-20">
          <Image
            className="-mr-10"
            src="/starfish.png"
            alt=""
            width={275}
            height={475}
          />
          <Image className="" src="/bike.png" alt="" width={400} height={600} />
          <Image
            className=""
            src="/shells-in-frame.png"
            alt=""
            width={300}
            height={500}
          />
        </div>
        {/* Col-2 */}
        <div className="flex flex-col items-center">
          <Image className="" src="/date.png" alt="" width={300} height={500} />
          <Image
            className=""
            src="/address.png"
            alt=""
            width={400}
            height={300}
          />
          <Image
            className=""
            src="/shells.png"
            alt=""
            width={300}
            height={500}
          />
        </div>
        {/* Col-3 */}
        <div className="flex flex-col mt-10">
          <Image
            className="-ml-12"
            src="/framed-lemons.png"
            alt=""
            width={400}
            height={475}
          />
          <Image
            className="-ml-2"
            src="/vintage-beach.png"
            alt=""
            width={300}
            height={500}
          />
          <Image
            className=""
            src="/italian-tiles.png"
            alt=""
            width={300}
            height={500}
          />
        </div>
      </section>
    </main>
  )
}
