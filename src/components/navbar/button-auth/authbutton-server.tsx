import { AuthButton } from "./authbutton-client"
import { Componentclient } from "@/componentsclients/component-client"

export async function AuthButtonServer () {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const id = session?.user?.id
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", id ?? "")
  const user = data ?? []
  if (user !== null) {
    return <AuthButton users={user[0]} session={session} />
  }
}
