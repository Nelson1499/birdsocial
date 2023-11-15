import { Componentclient } from "@/componentsclients/component-client"

export const Session = async () => {
  try {
    const supabase = Componentclient()
    const {
      data: { session }
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.log(error)
  }
}
