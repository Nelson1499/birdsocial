"use client"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import { type ChangeEvent, useState, Fragment } from "react"
import { SearchUsers } from "@/db/supabase_search_users"
import { type UsersDB } from "@/types/typesdata"
import Image from "next/image"
import { useRouter } from "next/navigation"

type SetShowList = (value: boolean) => void
export default function Listusers ({
  setshowList,
  session
}: {
  setshowList: SetShowList
  session: string | undefined
}) {
  const router = useRouter()
  const [users, setusers] = useState<UsersDB[]>([])
  const [character, serCharacter] = useState<string>()
  const showusers = async (e: ChangeEvent<HTMLInputElement>) => {
    serCharacter(e.target.value)
    const data = await SearchUsers({ name: e.target.value, id: session })
    if (data !== null) setusers(data)
  }
  const navigation = (id: string) => {
    router.push(`/messages/${id}`)
  }
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-20"></div>
      <div className="z-20 w-full h-full tablet:max-h-[600px] tablet:max-w-[480px] tablet:m-auto fixed tablet:top-5 bg-white dark:bg-black tablet:rounded">
        <header className="border-b-2 border-gray-700">
          <div className="p-2 space-y-2">
            <div className="flex space-x-2">
              <ClearIcon
                className="cursor-pointer"
                onClick={() => {
                  setshowList(false)
                }}
              />
              <h1 className="text-xl font-extrabold ">Nuevo Mensaje</h1>
            </div>
            <label className="flex space-x-2">
              <SearchIcon />
              <input
                type="search"
                className="bg-transparent outline-none w-full flex"
                placeholder="Buscar personas"
                onChange={showusers}
              />
            </label>
          </div>
        </header>
        <ul className="w-full flex- justify-center items-center">
          {character !== ""
            ? (
            <Fragment>
              {users?.map((user, i) => (
                <li
                  key={i}
                  onClick={() => {
                    navigation(user.id)
                  }}
                  className="flex p-2 hover:bg-black hover:bg-opacity-30 cursor-pointer"
                >
                  <Image
                    className="rounded-full"
                    src={user.avatar_url}
                    height={50}
                    width={50}
                    alt="profile"
                  />
                  <div className="px-1">
                    <h1>{user.name}</h1>
                    <h2 className="text-gray-700">@{user.username}</h2>
                  </div>
                </li>
              ))}
            </Fragment>
              )
            : (
            <li className="text-center pt-10 font-semibold text-xl">Intenta buscar personas.</li>
              )}
        </ul>
      </div>
    </>
  )
}
