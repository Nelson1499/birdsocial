"use client"

import type { MiContextoType } from "@/types/typescontext"
import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

const MiContexto = createContext<MiContextoType>({
  showNavbar: false,
  setShowNavbar: () => {}
})

const MiContextoProviderNabvar = ({ children }: { children: ReactNode }) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  return (
    <MiContexto.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </MiContexto.Provider>
  )
}

const useMiContextoNavbar = () => {
  return useContext(MiContexto)
}

export { MiContextoProviderNabvar, useMiContextoNavbar }
