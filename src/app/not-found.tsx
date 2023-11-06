import Image from "next/image"
import Link from "next/link"
import notfoundimg from "../images/bird-notfound.png"

export default function NotFound () {
  return (
    <div className="sm:w-[600px] w-full h-max sm:pb-1 pb-10">
      <div className="flex items-center justify-center">
        <section className="text-center">
          <h2 className="text-xl font-bold">Not Found</h2>
          <Image
            className="w-96 h-96 rounded bg-slate-100"
            src={notfoundimg}
            width={500}
            height={500}
            alt="not found"
          />
          <Link href="/" className="bg-sky-500 rounded p-2 shadow shadow-black z-10 ">Return Home</Link>
        </section>
      </div>
    </div>
  )
}
