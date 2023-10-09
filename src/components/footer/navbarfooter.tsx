"use client"
import { useRouter } from "next/navigation"
import { IconsFooter } from "./iconsfooter"

export const Navbarfooter = () => {
  const router = useRouter()
  const navigation = (path: string) => {
    router.push(path)
  }
  // console.log(JSON.stringify(IconsFooter))
  return (
    <div className="flex bottom-0 fixed z-20 w-full bg-emerald-500 py-3 sm:hidden">
      <section className="flex m-auto justify-between w-60 md:w-96">
        {IconsFooter?.map((icons, i) => (
          <div key={i} className="cursor-pointer" onClick={ () => { navigation(icons.link) } }>
            <span>
              <icons.icon />
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
