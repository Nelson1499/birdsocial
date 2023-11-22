"use client"

export const Errorinternet = () => {
  if (typeof window !== "undefined") {
    // Define el controlador de eventos
    if (!navigator.onLine) throw new Error("No hay conexión a Internet", { cause: "nointernet" })

    return true
  }
}
