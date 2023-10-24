import type { Dispatch, SetStateAction } from "react"
export interface MiContextoType {
  showNavbar: boolean
  setShowNavbar: Dispatch<SetStateAction<boolean>>
}
export interface MiContextoTypePosting {
  showPosting: boolean
  setShowPosting: Dispatch<SetStateAction<boolean>>
}
