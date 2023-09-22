"use client"
import { type ReactNode, useState } from "react"

export const ButtonComment = ({ children }: { children: ReactNode }) => {
  const [showNestedComments, setShowNestedComments] = useState(false)
  // Función para alternar la visibilidad de los comentarios anidados
  const toggleNestedComments = () => {
    setShowNestedComments(!showNestedComments)
  }
  return (
    <div>
      { showNestedComments ? null : <button className="ml-1" onClick={toggleNestedComments}> Mostrar</button> }
      { showNestedComments &&
      <>
        {children}
      </>
      }
    </div>
  )
}
