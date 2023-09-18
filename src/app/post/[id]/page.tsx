import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/database"
import type { ObjectUser, RelationPostPrincipal } from "@/types/typesdata"
import type { Paramstypes } from "@/types/paramsTypes"
import { PostCentral } from "@/components/posting/post-central"
import { CommentPost } from "@/components/form/post-comments"
import { commentpostServer as CommentpostServer } from "@/components/posting/commentpost-server"
import { TitlePost } from "@/components/header/post-title"
export default async function Posting ({
  params: { id }
}: {
  params: Paramstypes
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*), likes(*), birdretweets(*), commentbirdtweets(*)")
    .eq("id", id)
  const { data: comments, error } = await supabase
    .from("commentbirdtweets")
    .select("*, users(*), likes(*), birdretweets(*)")
    .eq("id_birdtweets", id)
  // const posts = data as RelationPost[]
  const postcenter: RelationPostPrincipal[] | any[] =
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
  console.log(error)
  return (
    <main className="">
      <div className="md:w-[600px] w-full h-max border-x-2 border-white border-opacity-10 relative">
        <TitlePost />
        <div className="mx-6">
          {/* {session !== null && <Posting data={ userAuthentication } />} */}
          <PostCentral post={postcenter} numcomments={comments?.length} />
          {session !== null && (
            <CommentPost data={userAuthentication} post={postcenter[0]} />
          )}
          {comments?.map((post) => (
            <div
              key={post.id}
              className="border-b border-white border-opacity-10 mx-5"
            >
              <CommentpostServer post={post} styleData={null} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
