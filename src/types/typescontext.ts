import type { Dispatch, SetStateAction } from "react"
export interface MiContextoType {
  showNavbar: boolean
  setShowNavbar: Dispatch<SetStateAction<boolean>>
  responsiveNavbar: boolean
  pathname: string
}
export interface MiContextoTypePosting {
  showPosting: boolean
  setShowPosting: Dispatch<SetStateAction<boolean>>
}

export interface MiContextoTypeSearch {
  character: string
  setCharacter: Dispatch<SetStateAction<string>>
}

export interface MiContextShowList {
  showList: boolean
  setshowList: Dispatch<SetStateAction<boolean>>
}
