"use client"

import type { MiContextoType } from "@/types/typescontext"
import { usePathname } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

const MiContexto = createContext<MiContextoType>({
  showNavbar: false,
  setShowNavbar: () => {},
  responsiveNavbar: false,
  pathname: ""
})

const MiContextoProviderNabvar = ({ children }: { children: ReactNode }) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [responsiveNavbar, setResponsiveNavbar] = useState<boolean>(true)
  const pathname = usePathname()
  useEffect(() => {
    const handleResize = () => {
      const isResponsive = window.innerWidth < 640
      if (isResponsive !== responsiveNavbar) {
        setResponsiveNavbar(isResponsive)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [showNavbar, responsiveNavbar])
  return (
    <MiContexto.Provider
      value={{ showNavbar, setShowNavbar, responsiveNavbar, pathname }}
    >
      {children}
    </MiContexto.Provider>
  )
}

const useMiContextoNavbar = () => {
  return useContext(MiContexto)
}

export { MiContextoProviderNabvar, useMiContextoNavbar }
