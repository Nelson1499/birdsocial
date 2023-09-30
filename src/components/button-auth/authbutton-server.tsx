import { AuthButton } from "./authbutton-client"
import { Componentclient } from "@/componentsclients/component-client"

export async function AuthButtonServer () {
  const supabase = Componentclient()
  const { data: { session } } = await supabase.auth.getSession()
  return <AuthButton session={session} />
}
