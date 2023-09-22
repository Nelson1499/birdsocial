import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"
import type { Database } from "@/types/database"
import type { ObjectUser } from "@/types/typesdata"

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*), likes(*), birdretweets(*), commentbirdtweets(*)")
    .order("created_at", { ascending: false })
  // const posts = data as RelationPost[]
  const posts = data?.map(post => ({
    ...post,
    likes: {
      user_has_liked_post: post.likes.find(like => like?.user_id === session?.user?.id),
      amount_likes: post?.likes?.length
    },
    birdretweets: {
      user_has_repost_post: post.birdretweets.find(repost => repost?.user_id === session?.user?.id),
      amount_repost: post?.birdretweets?.length
    }

  })) ?? []
  const userAuthentication = session?.user?.user_metadata as ObjectUser

  return (
    <main className="lg:w-[600px] w-full h-max border-x-2 border-white border-opacity-10 relative">
      <div className="">
        <Title />
        <div className="mx-6">
          {session !== null && <Posting data={userAuthentication} />}
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
