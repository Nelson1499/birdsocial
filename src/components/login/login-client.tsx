"use client"
import {
  type Session,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs"
import GoogleIcon from "@mui/icons-material/Google"

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
  return (
    <div className="mx-auto w-80 py-20">
      {session === null
        ? (<>
          <h1 className="text-2xl font-extrabold">
            Entérate lo que está pasando en el mundo en este momento.
          </h1>
          <button
            onClick={handleSign}
            className="bg-white text-black w-full py-1 rounded-full mt-10 self-start outline-none"
          >
            <GoogleIcon /> Continuar con Google
          </button>
        </>
          )
        : null}
    </div>
  )
}
