import Image from "next/image"

export default function Footer() {
  return (
    <div className="flex items-center flex-start m-2">
      <Image src="/lemon.png" alt="" width={50} height={50} />
      <p className="text-dark-azure font-cursive ml-2">
        Crafted with love by
        <br className="sm:hidden" /> Sarah Proctor &copy; 2026
      </p>
    </div>
  )
}
