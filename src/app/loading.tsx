import loading from "@/images/loading.svg"
import Image from "next/image"
export default function Loading () {
  return (
    <div className="sm:w-[600px] w-full h-screen sm:border-x-2 border-white border-opacity-10 sm:pb-1 flex pb-10 justify-center items-center">
      <span className="m-auto">
        <Image
          src={loading}
          className="w-32 h-max"
          width={200}
          height={200}
          alt="loading"
        />
      </span>
    </div>
  )
}
