"use client"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { useEffect, useState } from "react"

export const Darkmode = () => {
  const [theme, settheme] = useState("")

  useEffect(() => {
    if (theme.length !== 0) localStorage.setItem("theme", theme)
    const themelocal = localStorage.getItem("theme")
    if (theme === "Dark" || themelocal === "Dark") {
      document.querySelector("html")?.classList.add("dark")
    } else {
      document.querySelector("html")?.classList.remove("dark")
    }
  }, [theme])
  const handleChangeTheme = () => {
    settheme((prevTheme: string) => (prevTheme === "Light" ? "Dark" : "Light"))
  }
  return (
    <li className="row-span-1">
      <label
        onClick={handleChangeTheme}
        className="flex justify-between cursor-pointer"
      >
        {theme === "Dark" ? "Light mode" : "Dark mode"}
        {theme === "Dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </label>
    </li>
  )
}
