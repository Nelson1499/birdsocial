import { AuthLoginClient } from "./login-client"
import { Componentclient } from "@/componentsclients/component-client"

export async function AuthLoginServer () {
  const supabase = Componentclient()
  const { data: { session } } = await supabase.auth.getSession()
  return <AuthLoginClient session={session} />
}
