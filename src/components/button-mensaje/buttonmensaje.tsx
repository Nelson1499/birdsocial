"use client"
import EmailIcon from "@mui/icons-material/Email"
import { useState } from "react"
import Listusers from "../list/Listusers"
const Buttonmensaje = ({ session }: { session: string | undefined }) => {
  const [showList, setshowList] = useState(false)
  return (
    <>
      {showList && <Listusers setshowList={setshowList} session={session} />}
      <button
        onClick={() => {
          setshowList(!showList)
        }}
        className="p-2 text-white bg-blue-500 rounded fixed z-0 bottom-16 right-3 tablet:hidden"
      >
        <EmailIcon />
      </button>
    </>
  )
}

export default Buttonmensaje
