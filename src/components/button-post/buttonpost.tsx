"use client"
import { useMiContexto } from "@/context/postingcontext"
import BorderColorIcon from "@mui/icons-material/BorderColor"
export const Buttonpostresponsive = () => {
  const { setShowPosting } = useMiContexto()
  return (
    <button onClick={() => { setShowPosting(true) }} className="p-2 bg-blue-500 rounded fixed z-0 bottom-16 right-3 tablet:hidden">
      <BorderColorIcon />
    </button>
  )
}
