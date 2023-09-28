import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { AuthLoginClient } from "./login-client"

export async function AuthLoginServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  return <AuthLoginClient session={session} />
}
