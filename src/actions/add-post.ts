"use server"
import { revalidatePath } from "next/cache"
import { ServerActions } from "@/componentsclients/component-server-actions"

export const addNewPost = async (formData: FormData) => {
  const post = formData.get("post")
  if (post === null) return
  const supabase = ServerActions()
  // revisar si el usuario está autenticado
  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return
  const { error } = await supabase.from("birdtweets").insert({ birdtweets: post, user_id: user.id })
  console.log(error)
  revalidatePath("/")
}
