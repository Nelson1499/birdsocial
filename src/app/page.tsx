import { Buttonpostresponsive } from "@/components/button-post/buttonpost"
import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"
import { MiContextoProviderNabvar } from "@/context/navbarcontext"
import { Querypost } from "@/db/supabase_query"
import { Session } from "@/start/session."
import type { ObjectUser } from "@/types/typesdata"
import { redirect } from "next/navigation"

export default async function Home () {
  const session = await Session()
  const data = await Querypost()
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
    <main className="sm:w-[600px] w-full h-max sm:border-x-2 border-white border-opacity-10 sm:pb-1 pb-10">
      <MiContextoProviderNabvar>
        <Title data={userAuthentication} />
          <div className="">
            {session !== null ? <div className="hidden md:block"><Posting data={userAuthentication} /></div> : null}
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
      </MiContextoProviderNabvar>
      <Buttonpostresponsive />
    </main>
  )
}
