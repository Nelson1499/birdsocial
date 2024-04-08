"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

const Listaslogin = () => {
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
    <div className="space-y-2">
      <li onClick={handleSignGoogle}className="cursor-pointer p-2 rounded bg-gray-500 text-white" ><GoogleIcon/> Iniciar sesión con Google</li>
      <li onClick={handleSignGithub} className="cursor-pointer p-2 rounded bg-gray-500 text-white"><GitHubIcon /> Iniciar sesión con Github</li>
    </div>
  )
}

export default Listaslogin
