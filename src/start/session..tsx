import { Componentclient } from "@/componentsclients/component-client"

export const Session = async () => {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  return session
}
