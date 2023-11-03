import type { PostLikesDatabase, PostRespotDatabase, RelationPost } from "@/types/typesdata"

export const likesAndRepost = async (data: RelationPost[], session: any) => {
  return data?.map((post) => ({
    ...post,
    likes: {
      user_has_liked_post: post.likes.find(
        (like: PostLikesDatabase) => like?.user_id === session?.user?.id
      ),
      amount_likes: post?.likes?.length
    },
    birdretweets: {
      user_has_repost_post: post.birdretweets.find(
        (repost: PostRespotDatabase) => repost?.user_id === session?.user?.id
      ),
      amount_repost: post?.birdretweets?.length
    }
  })) ?? []
}
