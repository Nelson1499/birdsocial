"use client"

import type { MiContextoTypeSearch } from "@/types/typescontext"
import { type ReactNode, createContext, useContext, useState } from "react"

// Creamos el contexto
const MiContexto = createContext<MiContextoTypeSearch>({
  character: "",
  setCharacter: () => {}
})

// Creamos un proveedor para envolver nuestra aplicación con el contexto
const MiContextoProviderSearch = ({ children }: { children: ReactNode }) => {
  // Puedes almacenar cualquier valor que desees proporcionar en el contexto
  const [character, setCharacter] = useState<string>("")

  return (
    <MiContexto.Provider value={{ character, setCharacter }}>
      {children}
    </MiContexto.Provider>
  )
}

// Creamos un gancho personalizado para usar el contexto más fácilmente
const useMiContextoSearch = () => {
  return useContext(MiContexto)
}

export { MiContextoProviderSearch, useMiContextoSearch }
