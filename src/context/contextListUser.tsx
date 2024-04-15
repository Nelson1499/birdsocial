"use client"

import type { MiContextShowList } from "@/types/typescontext"
import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

const MiContexto = createContext<MiContextShowList>({
  showList: false,
  setshowList: () => {}
})

const MiContextoProviderListUser = ({ children }: { children: ReactNode }) => {
  const [showList, setshowList] = useState(false)

  return (
    <MiContexto.Provider
      value={{ showList, setshowList }}
    >
      {children}
    </MiContexto.Provider>
  )
}

const useMiContextListUser = () => {
  return useContext(MiContexto)
}

export { MiContextoProviderListUser, useMiContextListUser }
