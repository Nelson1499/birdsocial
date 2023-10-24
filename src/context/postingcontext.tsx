"use client"

import type { MiContextoTypePosting } from "@/types/typescontext"
import { type ReactNode, createContext, useContext, useState } from "react"

// Creamos el contexto
const MiContexto = createContext<MiContextoTypePosting>({
  showPosting: false,
  setShowPosting: () => {}
})

// Creamos un proveedor para envolver nuestra aplicación con el contexto
const MiContextoProvider = ({ children }: { children: ReactNode }) => {
  // Puedes almacenar cualquier valor que desees proporcionar en el contexto
  const [showPosting, setShowPosting] = useState<boolean>(false)

  return (
    <MiContexto.Provider value={{ showPosting, setShowPosting }}>
      {children}
    </MiContexto.Provider>
  )
}

// Creamos un gancho personalizado para usar el contexto más fácilmente
const useMiContexto = () => {
  return useContext(MiContexto)
}

export { MiContextoProvider, useMiContexto }
