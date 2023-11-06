import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import { Items } from "@/svg/svg.navbar"
import { AuthButtonServer } from "../button-auth/authbutton-server"
import Link from "next/link"
import { Buttonpostnavbar } from "../button-post/buttonpostnavbar"

export const Navbar = () => {
  const items = Items()
  return (
    <div className="sm:w-[50px] desktop:w-[215px] h-full hidden sm:block">
      <div className="fixed">
          <div className="px-2 my-4 font-bold flex text-xl">
            <FlutterDashIcon fontSize="large" />
            <h2 className="hidden desktop:block transition-all">Birdsocial</h2>
          </div>
          {items.map((item) => (
            <div
              className="my-4 text-2xl cursor-pointer w-full justify-center"
              key={item.title}
            >
              <Link href={item.link}>
                <div className={`rounded-3xl text-lg flex w-max ${item.class}`}>
                  <item.icon fontSize="medium" />
                  <span className="hidden desktop:block transition-all">
                    {item.title}
                  </span>
                </div>
              </Link>
            </div>
          ))}
          <Buttonpostnavbar />
          <div className="fixed bottom-3">
            <AuthButtonServer />
          </div>
        </div>
    </div>
  )
}
