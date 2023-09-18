"use client"
import { useRouter } from "next/navigation"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
export const TitlePost = () => {
  const router = useRouter()
  const navigation = () => {
    router.back()
  }
  return (
    <div className="w-full h-[53px] border-b-2 border-white border-opacity-10 bg-black bg-opacity-60 sticky top-0 z-10 flex ">
      <div className="items-center py-2 flex">
        <span className="cursor-pointer" onClick={navigation}>
          <ArrowBackIcon fontSize="large" />
        </span>
        <h2 className="text-2xl ml-5 font-semibold">Post</h2>
      </div>
    </div>
  )
}
