"use server"
import { revalidatePath } from "next/cache"
import { ServerActions } from "@/componentsclients/component-server-actions"

export const addComment = async (formData: FormData) => {
  const post = formData.get("post")
  const idpost = formData.get("id_post")
  const username = formData.get("username")
  if (post === null) return
  const supabase = ServerActions()
  // revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const { error } = await supabase.from("commentbirdtweets").insert({ comment: post, user_id: user.id, comment_id: idpost, responsepost: username })
  console.log(error)
  revalidatePath("/")
}
