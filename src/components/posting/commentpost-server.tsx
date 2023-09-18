"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/database"
import { Postcomment } from "./commentpost"
import type { ObjectUser, PostLikesDatabase, PostRespotDatabase, RelationPostComment, TypeComment } from "@/types/typesdata"

export const commentpostServer = async ({
  post, styleData
}: {
  post: RelationPostComment | any
  styleData: boolean | any
}) => {
  const { id } = post as RelationPostComment
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("commentbirdtweets")
    .select("*, users(*), likes(*), birdretweets(*)")
    .eq("comment_id", id)

  const datos: TypeComment = {
    ...post,
    likes: {
      user_has_liked_post: post.likes?.find(
        (like: PostLikesDatabase) => like.user_id === session?.user?.id
      ),
      amount_likes: post?.likes?.length
    },
    birdretweets: {
      user_has_repost_post: post.birdretweets?.find(
        (repost: PostRespotDatabase) => repost.user_id === session?.user?.id
      ),
      amount_repost: post?.birdretweets?.length
    },
    nestedComments: data
  }
  const userAuthentication = session?.user?.user_metadata as ObjectUser

  return <Postcomment post={datos} styleData={styleData} session={session} userAuthentication={userAuthentication} />
}
