import { Componentclient } from "@/componentsclients/component-client"

export const Querypost = async () => {
  const supabase = Componentclient()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*), likes(*), birdretweets(*), commentbirdtweets(*)")
    .order("created_at", { ascending: false })
  return data
}

export const QueryPostAndComments = async (id: string) => {
  const supabase = Componentclient()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*), likes(*), birdretweets(*), commentbirdtweets(*)")
    .eq("id", id)
  const { data: comments, error } = await supabase
    .from("commentbirdtweets")
    .select("*, users(*), likes(*), birdretweets(*)")
    .eq("id_birdtweets", id)
  console.log(error)
  return { data, comments }
}
