"use client"

import { useMiContexto } from "@/context/postingcontext"
import type { ReactNode } from "react"

export const ContainerLayout = ({ children }: { children: ReactNode }) => {
  const { showPosting } = useMiContexto()
  return (
    <section
      className={`items-center justify-center w-full h-screen ${
        showPosting ? "overflow-hidden" : ""
      }`}
    >
      <article className="md:w-max w-full h-screen m-auto sm:flex">{children}</article>
    </section>
  )
}
