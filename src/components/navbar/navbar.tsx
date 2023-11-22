import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import { Items } from "@/svg/svg.navbar"
import { AuthButtonServer } from "../button-auth/authbutton-server"
import Link from "next/link"
import { Buttonpostnavbar } from "../button-post/buttonpostnavbar"

export const Navbar = () => {
  const items = Items()
  return (
    <header className="hidden tablet:block tablet:w-[50px] desktop:w-[215px] h-full transition-all ease-in-out delay-75">
      <nav className="fixed mt-2 mx-1">
          <div className="px-1 font-bold flex text-xl space-x-1">
            <FlutterDashIcon fontSize="large" />
            <h2 className="hidden desktop:block transition-all">Birdsocial</h2>
          </div>
          {items.map((item) => (
            <ul
              className="my-2 text-2xl cursor-pointer w-full justify-center"
              key={item.title}
            >
              <Link href={item.link}>
                <li className="rounded-3xl text-lg flex w-max hover:bg-black hover:bg-opacity-20 p-2 space-x-1">
                  <item.icon fontSize="medium" />
                  <strong className="hidden desktop:block transition-all font-bold">
                    {item.title}
                  </strong>
                </li>
              </Link>
            </ul>
          ))}
          <Buttonpostnavbar />
          <AuthButtonServer />
        </nav>
    </header>
  )
}
