"use server"
import { revalidatePath } from "next/cache"
import { ServerActions } from "@/componentsclients/component-server-actions"

export const following = async (formData: FormData) => {
  const userfollow = formData.get("id_user_follow")

  if (userfollow === null) return
  const supabase = ServerActions()
  // revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const { error } = await supabase.from("follow").insert({ user_id: user.id, follow_user_id: userfollow })
  console.log(error)
  revalidatePath("/")
}
export const Deletefollowing = async (formData: FormData) => {
  const userfollow = formData.get("id_user_follow")

  if (userfollow === null) return
  const supabase = ServerActions()
  // revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const { error } = await supabase.from("follow").delete().match({
    user_id: user.id,
    follow_user_id: userfollow
  })
  console.log(error)
  revalidatePath("/")
}
