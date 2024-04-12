"use client"

import { useMiContextoNavbar } from "@/context/navbarcontext"

const Headerclient = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useMiContextoNavbar()
  return (
    <header
      id="navbar"
      className={`${
        pathname === "/login" ? "hidden" : "hidden tablet:block"
      } tablet:w-[50px] desktop:w-[215px] h-full transition-all ease-in-out delay-75 z-10`}
    >
      {children}
    </header>
  )
}

export default Headerclient
