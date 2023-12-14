"use client"
import { useRouter } from "next/navigation"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
export const TitlePost = () => {
  const router = useRouter()
  const navigation = () => {
    router.back()
  }
  return (
    <header className="w-full h-[53px] border-opacity-10 bg-white dark:bg-black sticky top-0 z-10">
      <nav className="items-center py-2 flex">
        <button className="active:outline-none" onClick={navigation}>
          <ArrowBackIcon />
        </button>
        <h2 className="text-xl ml-3 font-semibold">Post</h2>
      </nav>
    </header>
  )
}
