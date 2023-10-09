"use server"
import { revalidatePath } from "next/cache"
import { ServerActions } from "@/componentsclients/component-server-actions"
export const addNewComment = async (formData: FormData) => {
  const post = formData.get("post")
  const idpost = formData.get("id_post")
  const username = formData.get("username")
  if (post === null) return
  const supabase = ServerActions()
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const data = await supabase.from("commentbirdtweets").insert({ comment: post, user_id: user.id, id_birdtweets: idpost, comment_id: null, responsepost: username })
  console.log(data)

  revalidatePath("/")
}
