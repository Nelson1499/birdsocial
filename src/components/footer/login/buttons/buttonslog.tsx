"use client"
import {
  // type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

export default function Buttonslog () {
  const supabase = createClientComponentClient()
  const handleSignGoogle = async () => {
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
  const handleSignGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        },
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }
  return (
    <div className="flex space-x-2 md:space-x-5">
      <button onClick={handleSignGoogle} title="Continuar con Google." className="bg-gray-800 w-max h-max p-2 rounded-full">
        <GoogleIcon />
      </button>
      <button onClick={handleSignGithub} title="Continuar con Github." className="bg-gray-800 w-max h-max p-2 rounded-full">
        <GitHubIcon />
      </button>
    </div>
  )
}
