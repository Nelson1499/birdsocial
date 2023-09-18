"use server"
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"

export const addNewComment = async (formData: FormData) => {
  const post = formData.get("post")
  const idpost = formData.get("id_post")
  const username = formData.get("username")
  if (post === null) return
  const supabase = createServerActionClient({ cookies })
  // revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const data = await supabase.from("commentbirdtweets").insert({ comment: post, user_id: user.id, id_birdtweets: idpost, comment_id: null, responsepost: username })
  console.log(data)

  revalidatePath("/")
}
