import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"
import { Componentclient } from "@/componentsclients/component-client"
import { MiContextoProviderNabvar } from "@/context/navbarcontext"
import type { ObjectUser } from "@/types/typesdata"
import { redirect } from "next/navigation"

export default async function Home () {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*), likes(*), birdretweets(*), commentbirdtweets(*)")
    .order("created_at", { ascending: false })
  // const posts = data as RelationPost[]
  const posts =
    data?.map((post) => ({
      ...post,
      likes: {
        user_has_liked_post: post.likes.find(
          (like) => like?.user_id === session?.user?.id
        ),
        amount_likes: post?.likes?.length
      },
      birdretweets: {
        user_has_repost_post: post.birdretweets.find(
          (repost) => repost?.user_id === session?.user?.id
        ),
        amount_repost: post?.birdretweets?.length
      }
    })) ?? []
  const userAuthentication = session?.user?.user_metadata as ObjectUser
  if (session === null) { redirect("/login") }
  return (
    <main className="sm:w-[600px] w-full h-max sm:border-x-2 border-white border-opacity-10 pb-10">
      <MiContextoProviderNabvar>
        <Title data={userAuthentication} />
          <div className="mx-2 md:mx-6">
            {session !== null ? <div className="hidden md:block"><Posting data={userAuthentication} /></div> : null}
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
      </MiContextoProviderNabvar>
    </main>
  )
}
