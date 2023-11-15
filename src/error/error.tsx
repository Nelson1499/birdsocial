"use client"
export const Errorinternet = () => {
  if (typeof window !== "undefined" && !navigator.onLine) throw new Error("No hay conexión a Internet", { cause: "nointernet" })

  return true
}
