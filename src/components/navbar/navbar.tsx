import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import { Items } from "@/svg/svg.navbar"
import { AuthButtonServer } from "../button-auth/authbutton-server"
import Link from "next/link"

export const Navbar = () => {
  const items = Items()
  return (
    <div className="fixed">
      <div className="px-4 font-bold space-x-2 my-2 flex text-xl">
        <FlutterDashIcon fontSize="large" />
        <h2>Birdsocial</h2>
      </div>
      {items.map((item) => (
        <div className="my-2 text-2xl cursor-pointer" key={item.title}>
          <Link href={item.link}>
            <div className="space-x-2 py-4 px-4 rounded-3xl hover:bg-black hover:bg-opacity-20 text-xl flex w-max">
              <item.icon fontSize="medium" />
              <h3>{item.title}</h3>
            </div>
          </Link>
        </div>
      ))}
      <AuthButtonServer />
    </div>
  )
}
