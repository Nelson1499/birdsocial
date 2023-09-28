"use client"
import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import Image from "next/image"
import type { ObjectUser } from "@/types/typesdata"
import perfil from "@/images/perfil.jpg"
import { useState } from "react"
import type { ReactNode } from "react"
import { Navbarmobile } from "../navbar/navbarmobile"

export const Title = ({ data, children }: { data: ObjectUser, children: ReactNode }) => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <>
      <div className="w-full py-1 h-max border-b-2 border-white border-opacity-10 bg-black bg-opacity-60 flex sticky top-0 z-10">
        <div className="grow ml-4" onClick={() => { setShowNavbar(!showNavbar) }}>
          <Image
            src={data?.avatar_url ?? perfil}
            className="rounded-full h-10 w-10 mx-2 my-1 lg:hidden"
            alt="portada"
            width={500}
            height={500}
          />
        </div>
        <div className="items-center justify-center text-center grow-0">
          <div className="lg:hidden m-auto">
            <FlutterDashIcon />
          </div>
          <h2 className="text-xl font-semibold">Inicio</h2>
        </div>
        <div className="grow">
          <div className="rounded-full h-14 w-14 mx-2 my-1 lg:hidden"></div>
        </div>
      </div>
      <div className="lg:hidden">
        {showNavbar ? <Navbarmobile /> : children }
      </div>
      <div className="hidden lg:block">
        {children}
      </div>
    </>
  )
}
