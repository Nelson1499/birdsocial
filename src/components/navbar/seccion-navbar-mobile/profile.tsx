"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import profileuser from "@/images/perfil.jpg"
import AddIcon from "@mui/icons-material/Add"
import type {
  ObjectUser,
  UsersDB,
  followDatabase
} from "@/types/typesdata"
import { useCallback, useEffect, useState } from "react"
import {
  type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import { useMiContextoNavbar } from "@/context/navbarcontext"
import type { MiContextoType } from "@/types/typescontext"

export const Profile = ({
  profile,
  session
}: {
  profile: ObjectUser
  session: Session | any
}) => {
  const [follow, setFollow] = useState<followDatabase[]>([])
  const [following, setFollowing] = useState<followDatabase[]>([])
  const [user, setUser] = useState<UsersDB[]>([])
  const supabase = createClientComponentClient()
  const { showNavbar }: MiContextoType = useMiContextoNavbar()
  const router = useRouter()
  const usersdata = useCallback(async () => {
    const { data, error } = await supabase
      .from("follow")
      .select("*")
      .eq("user_id", session?.user?.id)
    const { data: dataf, error: errorfollowing } = await supabase
      .from("follow")
      .select("*")
      .eq("follow_user_id", session?.user?.id)
    const { data: datauser, error: erroruser } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.user?.id)
    if (error !== null || errorfollowing !== null || erroruser !== null) {
      console.error("Error fetching user data:", error)
      console.error("Error fetching user data:", errorfollowing)
      console.error("Error fetching user data:", erroruser)
    } else {
      setFollow(data)
      setFollowing(dataf)
      setUser(datauser)
    }
  }, [session?.user?.id])

  useEffect(() => {
    usersdata()
  }, [showNavbar])
  return (
    <article className="m-2 border-b-2 border-white border-opacity-10">
      <header>
        <ul className="flex justify-between">
          <li
            onClick={() => {
              session !== null && router.push(`/${user[0]?.username}`)
            }}
          >
            <Image
              className="rounded-full w-10 h-10 outline-1"
              src={user[0]?.avatar_url ?? profileuser}
              alt="Imagen de perfil"
              width={100}
              height={100}
            />
          </li>
          <li className="flex items-center justify-center rounded-full h-5 w-5 outline outline-1 outline-gray-500">
            <a href="#">
              <AddIcon fontSize="medium" className="w-5" />
            </a>
          </li>
        </ul>
      </header>
      <section>
        <h1
          onClick={() => {
            router.push(`/${user[0]?.username}`)
          }}
        >
          {user[0]?.name}
        </h1>
        <p
          onClick={() => {
            router.push(`/${user[0]?.username}`)
          }}
          className="text-sm leading-none text-gray-500"
        >
          @{user[0]?.username}
        </p>
        <div className="flex gap-2 my-2">
          <p>{follow.length} Siguiendo</p>
          <p>{following.length} Seguidores</p>
        </div>
      </section>
    </article>
  )
}
