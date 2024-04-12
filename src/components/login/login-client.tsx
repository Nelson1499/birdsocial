"use client"
import {
  type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

export function AuthLoginClient ({ session }: { session: Session | any }) {
  const supabase = createClientComponentClient()
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
    <article className="m-auto w-full h-full md:h-max md:max-w-[800px] py-20 md:rounded bg-blue-500 text-white shadow-md shadow-black">
      {session === null
        ? (
        <div className="max-w-96 m-auto">
          <h1 className="text-xl md:text-2xl font-extrabold">
            Entérate lo que está pasando en el mundo en este momento.
          </h1>
          <button
            onClick={handleSign}
            className="bg-white text-lg text-black w-full py-2 rounded-full mt-10 self-start outline-none"
          >
            <GoogleIcon /> Continuar con Google
          </button>
          <button
            onClick={handleSignGithub}
            className="bg-white text-lg text-black w-full py-2 rounded-full mt-10 self-start outline-none"
          >
            <GitHubIcon /> Continuar con Github
          </button>
        </div>
          )
        : null}
    </article>
  )
}
