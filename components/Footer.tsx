import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="flex items-center flex-start m-2">
      <Link href="/" aria-label="back to home page">
        <Image
          src="/lemon.png"
          alt=""
          width={50}
          height={50}
          className="rotate-12"
        />
      </Link>
      <p className="text-dark-azure font-cursive ml-2">
        Crafted with love by
        <br className="sm:hidden" /> Sarah Proctor &copy; 2026
      </p>
    </div>
  )
}
