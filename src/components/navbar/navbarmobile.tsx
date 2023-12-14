"use client"
import { useMiContextoNavbar } from "@/context/navbarcontext"
import { Profile } from "./seccion-navbar-mobile/profile"
import type { MiContextoType } from "@/types/typescontext"
import type { ObjectUser } from "@/types/typesdata"
import { type Session } from "@supabase/supabase-js"
import type { MouseEvent } from "react"
import { Darkmode } from "./seccion-navbar-mobile/dark-mode"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
export const Navbarmobile = ({ data, session }: { data: ObjectUser | any, session: Session | any }) => {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const { showNavbar, responsiveNavbar, setShowNavbar }: MiContextoType = useMiContextoNavbar()
  const out = () => {
    setShowNavbar(false)
  }

  const handleClickEnPost = (e: MouseEvent<HTMLDivElement | HTMLFormElement>) => {
    e.stopPropagation()
  }
  const handleignOut = async () => {
    await supabase.auth.signOut()
    setShowNavbar(false)
    router.refresh()
  }
  return (
    <nav onClick={out} className={`fixed left-0 w-screen h-screen flex z-20 bg-opacity-10 dark:bg-opacity-10 bg-black dark:bg-white ${responsiveNavbar ? !showNavbar ? "hidden" : "block" : "hidden"}`}>
      <div onClick={handleClickEnPost} className="bg-white dark:bg-black fixed left-0 w-9/12 h-screen">
        <Profile profile={data} session={session} />
        <section>
          <ul className="mx-2">
            <li className="row-span-1">Perfil</li>
            <Darkmode />
            <li className="row-span-1 cursor-pointer" onClick={handleignOut}>Cerrar sesión</li>
          </ul>
        </section>
      </div>
    </nav>
  )
}
