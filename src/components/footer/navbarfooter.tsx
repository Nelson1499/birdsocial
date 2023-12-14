"use client"
import "./navbarf.css"
import { useRouter } from "next/navigation"
import { IconsFooter } from "./iconsfooter"
import { useEffect, useState } from "react"
import { Buttonpostresponsive } from "../button-post/buttonpost"

export const Navbarfooter = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const router = useRouter()
  const navigation = (path: string) => {
    router.push(path)
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop
      const footernavbar = document.getElementById("progress")
      if (scrollTop > lastScrollTop) {
        footernavbar?.classList.add("hiddenfooter")
        footernavbar?.classList.remove("showfooter")
      } else {
        footernavbar?.classList.remove("hiddenfooter")
        footernavbar?.classList.add("showfooter")
      }
      setLastScrollTop(scrollTop)
    }

    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [lastScrollTop])

  return (
    <footer id="progress" className="flex bottom-0 fixed text-white z-10 w-full">
      <Buttonpostresponsive />
      <div className="bg-blue-500 dark:bg-black py-3 tablet:hidden w-full">
        <section className="flex m-auto justify-between w-60 md:w-96">
          {IconsFooter?.map((icons, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => {
                navigation(icons.link)
              }}
            >
              <span>
                <icons.icon />
              </span>
            </div>
          ))}
        </section>
      </div>
    </footer>
  )
}
