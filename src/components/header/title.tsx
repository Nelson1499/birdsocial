"use client"
import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import Image from "next/image"
import type { ObjectUser } from "@/types/typesdata"
import perfil from "@/images/perfil.jpg"
import { useState, useEffect } from "react"
import { Navbarmobile } from "../navbar/navbarmobile"
import { useMiContextoNavbar } from "@/context/navbarcontext"
import type { MiContextoType } from "@/types/typescontext"

export const Title = ({ data }: { data: ObjectUser }) => {
  const { showNavbar, setShowNavbar }: MiContextoType =
    useMiContextoNavbar()
  const [responsiveNavbar, setResponsiveNavbar] = useState(true)
  useEffect(() => {
    const handleResize = () => {
      setResponsiveNavbar(window.innerWidth < 640)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      <div className="w-full border-white sticky bg-black top-0 z-10 py-2">
        <div className="h-max flex">
          <div
            className="grow"
            onClick={() => {
              setShowNavbar(!showNavbar)
            }}
          >
            <Image
              src={data?.avatar_url ?? perfil}
              className="rounded-full h-10 w-10 mx-2 my-1 sm:hidden"
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
        </div>
      </div>
      {showNavbar && responsiveNavbar ? <Navbarmobile /> : null}
    </>
  )
}
