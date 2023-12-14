"use client"
import { useMiContexto } from "@/context/postingcontext"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"

export const Buttonpostnavbar = () => {
  const { setShowPosting } = useMiContexto()

  return (
    <div className="my-4 text-2xl cursor-pointer w-full flex justify-center text-white">
      <button onClick={() => { setShowPosting(true) }} className="rounded-3xl text-lg flex w-max bg-blue-500 p-2">
        <DriveFileRenameOutlineIcon fontSize="medium" />
        <strong className="hidden desktop:block transition-all font-bold">Crear post</strong>
      </button>
    </div>
  )
}
