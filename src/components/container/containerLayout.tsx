"use client"

import { useMiContexto } from "@/context/postingcontext"
import type { ReactNode } from "react"

export const ContainerLayout = ({ children }: { children: ReactNode }) => {
  const { showPosting } = useMiContexto()
  return (
    <div
      className={`flex items-center justify-center h-screen ${
        showPosting ? "overflow-hidden" : ""
      }`}
    >
      <div className="md:mx-10 w-full">
        <div className="w-full h-screen sm:flex">{children}</div>
      </div>
    </div>
  )
}
