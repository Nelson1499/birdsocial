"use client"
import { useMiContextoSearch } from "@/context/searchcontext"
import SearchIcon from "@mui/icons-material/Search"
import type { ChangeEvent } from "react"
// type SetShowList = (value: string) => void

export const SearchMessage = () => {
  const { setCharacter } = useMiContextoSearch()
  const characterupdate = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value)
  }
  return (
    <section className="w-full flex flex-col space-y-2 justify-center items-center mb-2">
      <h2 className="mx-2 text-xl font-bold">Mensajes</h2>
      <label className="flex border space-x-1 w-[90%] m-auto rounded p-1">
        <SearchIcon />
        <input
          type="search"
          name="searchmessage"
          id="searchmessage"
          onChange={characterupdate}
          className="outline-none bg-transparent w-full"
        />
      </label>
    </section>
  )
}
