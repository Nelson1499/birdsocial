"use client"

import { useMiContextoNavbar } from "@/context/navbarcontext"
import { useMiContexto } from "@/context/postingcontext"
import type { MiContextoType } from "@/types/typescontext"
import type { ReactNode } from "react"

export const ContainerLayout = ({ children }: { children: ReactNode }) => {
  const { showPosting } = useMiContexto()
  const { showNavbar, responsiveNavbar }: MiContextoType = useMiContextoNavbar()

  return (
    <section
      className={`items-center justify-center w-full h-screen ${
        showPosting ? "overflow-hidden" : ""
      }`}
    >
      <article className={`sm:w-max w-full h-screen m-auto sm:flex ${showNavbar && responsiveNavbar && "overflow-hidden"}`}>{children}</article>
    </section>
  )
}
