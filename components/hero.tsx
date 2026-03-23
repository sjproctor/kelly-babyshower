// Hero component
import Image from "next/image"

export default function Hero() {
  return (
    <div className="pt-20">
      <p className="font-script text-dark-azure font-bold leading-none text-center text-[11rem] blur-[0.6px] -rotate-6 z-10 relative">
        Ciao
      </p>
      <p className="font-block text-orange font-bold uppercase leading-none text-center text-[5rem] -mt-[0.6em]">
        Bambino
      </p>
      <Image
        src="/lemon-garland.png"
        alt="lemon garland"
        width={300}
        height={150}
        className="mx-auto -mt-7"
        aria-hidden="true"
      />
    </div>
  )
}
