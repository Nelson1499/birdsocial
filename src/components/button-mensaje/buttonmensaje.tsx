"use client"
import EmailIcon from "@mui/icons-material/Email"
import { useMiContextListUser } from "@/context/contextListUser"
const Buttonmensaje = ({ session }: { session: string | undefined }) => {
  const { showList, setshowList } = useMiContextListUser()

  return (
    <button
      onClick={() => {
        setshowList(!showList)
      }}
      className="p-2 text-white bg-blue-500 rounded fixed z-0 bottom-16 right-3 tablet:hidden"
    >
      <EmailIcon />
    </button>
  )
}

export default Buttonmensaje
