"use client"
import type { PostRelationDatabase } from "@/types/typesdata"
import {
  type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { useState } from "react"

export function AuthButton({
  session,
  users
}: {
  session: Session | null
  users: PostRelationDatabase
}) {
  const [show, setshow] = useState(false)
  const supabase = createClientComponentClient()
  const router = useRouter()
  console.log(users)
  const handleSign = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        },
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }
  const handleignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <>
      {(session !== null && show) && <div className="bg-black rounded flex p-2 mb-2 shadow shadow-white">
        <button onClick={handleignOut}>Cerrar la sesión de {users.username}</button>
      </div>}

      <div className="text-center cursor-pointer" onClick={() => { setshow(!show) }}>
        {session === null ? (
          <div className="">
            <button onClick={handleSign}>Authgoogle</button>
          </div>
        ) : (
          <div className="flex -ml-1">
            <Image
              className="lg:w-10 lg:h-10 w-8 h-8 rounded-full mr-2"
              src={users.avatar_url}
              width={100}
              height={100}
              alt="perfil"
            />
            <span className="mr-2 hidden lg:block">
              <p>{users.name}</p>
              <p>{users.username}</p>
            </span>
            <MoreHorizIcon className="hidden lg:block" />
          </div>
        )}
      </div>
    </>
  )
}
