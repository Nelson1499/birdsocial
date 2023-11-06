"use client"

import { useMiContexto } from "@/context/postingcontext"
import type { ReactNode } from "react"

export const ContainerLayout = ({ children }: { children: ReactNode }) => {
  const { showPosting } = useMiContexto()
  return (
    <div
      className={`items-center justify-center w-full h-screen ${
        showPosting ? "overflow-hidden" : ""
      }`}
    >
      <div className="md:w-max w-full h-screen m-auto sm:flex">{children}</div>
    </div>
  )
}
