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

export function AuthButton ({
  session,
  users
}: {
  session: Session | null
  users: PostRelationDatabase
}) {
  const [show, setshow] = useState(false)
  const supabase = createClientComponentClient()
  const router = useRouter()
  const handleignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <aside className="fixed bottom-3 flex flex-col-reverse items-end h-max">
      <section className="flex-col flex">
        {(session !== null && show) && <div role="dialog" className="bg-black rounded p-2 shadow shadow-white">
          <button onClick={handleignOut}>Cerrar la sesión de {users.username}</button>
        </div>}
        <button className="text-center cursor-pointer hover:bg-black hover:bg-opacity-20 rounded-full p-2 w-max" onClick={() => { setshow(!show) }}>
          {session !== null &&
          (
            <div className="flex">
              <Image
                className="lg:w-10 lg:h-10 w-8 h-8 rounded-full"
                src={users?.avatar_url}
                width={100}
                height={100}
                alt="perfil"
              />
              <span className="hidden desktop:block">
                <p>{users?.name}</p>
                <p>{users?.username}</p>
              </span>
              <MoreHorizIcon className="hidden desktop:block" />
            </div>
          )}
        </button>
      </section>
    </aside>
  )
}
