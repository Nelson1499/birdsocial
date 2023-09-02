"use client"
import {
  type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

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
    <div>
      {session === null
        ? (<div>
            <button onClick={handleSign}>Authgoogle</button>
          </div>
          )
        : (
        <div>
          <button onClick={handleignOut}>cerrar</button>
        </div>)}
    </div>
  )
}
