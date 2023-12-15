"use client"
import "./title.css"
import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import Image from "next/image"
import type { ObjectUser } from "@/types/typesdata"
import perfil from "@/images/perfil.jpg"
import { useMiContextoNavbar } from "@/context/navbarcontext"
import type { MiContextoType } from "@/types/typescontext"
import { useEffect, useState } from "react"
export const Title = ({ data }: { data: ObjectUser }) => {
  const { showNavbar, setShowNavbar }: MiContextoType = useMiContextoNavbar()
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop
      const titleheader = document.getElementById("progressheader")
      if (scrollTop > lastScrollTop) {
        titleheader?.classList.add("hiddentitle")
        titleheader?.classList.remove("showtitle")
      } else {
        titleheader?.classList.remove("hiddentitle")
        titleheader?.classList.add("showtitle")
      }
      setLastScrollTop(scrollTop)
    }

    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [lastScrollTop])
  return (
      <header id="progressheader" className="w-full border-white sticky bg-white dark:bg-black top-0 z-10 py-2 shadow shadow-slate-500">
        <nav className="h-max flex">
          <div role="button"
            className="grow w-max active:bg-transparent outline-none"
            onClick={() => {
              setShowNavbar(!showNavbar)
            }}
          >
            <Image
              src={data?.avatar_url ?? perfil}
              className="rounded-full h-10 w-10 mx-2 my-1 cursor-pointer tablet:hidden outline"
              alt="perfil"
              width={500}
              height={500}
            />
          </div>
          <div className="items-center justify-center text-center grow-0 lg:flex">
            <div className="m-auto">
              <FlutterDashIcon />
            </div>
            <h2 className="text-xl font-semibold">Inicio</h2>
          </div>
          <div className="grow">
            <div className="rounded-full h-10 w-10 mx-2 my-1 lg:hidden"></div>
          </div>
        </nav>
      </header>
  )
}
