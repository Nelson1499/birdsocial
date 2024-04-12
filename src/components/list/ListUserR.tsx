import { SearchUsers } from "@/db/supabase_search_users"
import { type UsersDB } from "@/types/typesdata"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ListUserR = ({ character, session }: { character: string, session: string | undefined }) => {
  const router = useRouter()
  const [users, setUsers] = useState<UsersDB[]>([])

  useEffect(() => {
    updateList()
  }, [character])
  const updateList = async () => {
    const data = await SearchUsers({ name: character, id: session })
    if (data !== null) setUsers(data)
  }
  const navigation = (id: string) => {
    router.push(`/messages/${id}`)
  }
  return (
    <>
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
    </>
  )
}

export default ListUserR
