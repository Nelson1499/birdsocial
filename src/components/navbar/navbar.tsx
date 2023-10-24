import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import { Items } from "@/svg/svg.navbar"
import { AuthButtonServer } from "../button-auth/authbutton-server"
import Link from "next/link"

export const Navbar = () => {
  const items = Items()
  return (
    <div className="fixed justify-center ml-10 z-10">
      <div className="-ml-1 px-2 my-4 font-bold flex text-xl">
        <FlutterDashIcon fontSize="large" />
        <h2 className="hidden lg:block transition-all">Birdsocial</h2>
      </div>
      {items.map((item) => (
        <div className="my-4 text-2xl cursor-pointer w-full justify-center" key={item.title}>
          <Link href={item.link}>
            <div className={`rounded-3xl text-lg flex w-max ${item.class}`}>
              <item.icon fontSize="medium" />
              <span className="hidden lg:block transition-all">{item.title}</span>
            </div>
          </Link>
        </div>
      ))}
      <div className="fixed bottom-3">
        <AuthButtonServer />
      </div>
    </div>
  )
}
