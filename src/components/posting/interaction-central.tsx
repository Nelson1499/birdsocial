"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { InteractionPost } from "@/types/typesdata"

export const InteractionCentral = ({
  data,
  numcomments
}: {
  data: unknown | InteractionPost
  numcomments: number | any
}) => {
  const { likes, id, birdretweets } = data as InteractionPost
  const router = useRouter()
  const handleLikes = async () => {
    const supabase = createClientComponentClient()
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (user !== null) {
      if (likes.user_has_liked_post !== undefined) {
        await supabase.from("likes").delete().match({
          user_id: user.id,
          birdtweets_id: id
        })
      } else {
        await supabase
          .from("likes")
          .insert({ user_id: user.id, birdtweets_id: id })
      }
    }
    router.refresh()
  }
  const handleRePost = async () => {
    const supabase = createClientComponentClient()
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (user !== null) {
      if (birdretweets.user_has_repost_post !== undefined) {
        await supabase.from("birdretweets").delete().match({
          user_id: user.id,
          birdtweets_id: id
        })
      } else {
        const { error } = await supabase
          .from("birdretweets")
          .insert({ user_id: user.id, birdtweets_id: id })
        console.log(error)
      }
    }
    router.refresh()
  }
  return (
    <>
      <div className="flex h-max m-auto border-t-2 border-white border-opacity-20 w-full items-center">
        <div className="space-x-5 flex mx-2">
          <span className="flex">
            {numcomments}
            <p className="text-gray-400 mx-2">Comments</p>
          </span>
          <span className="flex">
            {birdretweets.amount_repost}
            <p className="text-gray-400 mx-2">BirdRetweets</p>
          </span>
          <span className="flex">
            {likes.amount_likes}
            <p className="text-gray-400 mx-2">Likes</p>
          </span>
        </div>
      </div>
      <div className="flex h-10 m-auto border-t-2 border-white border-opacity-20 w-full items-center">
        <div className="m-auto flex w-64 justify-between">
          <button className="p-1 rounded-full hover:bg-sky-500 hover:bg-opacity-30 mr-1 hover:text-sky-500">
            <ChatBubbleOutlineIcon className="text-2xl" />
          </button>
          <button
            onClick={handleRePost}
            className="p-1 rounded-full hover:text-green-500 hover:bg-green-500 hover:bg-opacity-30 mr-1"
          >
            <RepeatIcon
              className={`${
                birdretweets.user_has_repost_post !== undefined &&
                "text-green-500"
              }`}
            />
          </button>
          <button
            onClick={handleLikes}
            className="p-1 rounded-full hover:bg-red-500 hover:bg-opacity-30 mr-1 hover:text-red-500"
          >
            {likes.user_has_liked_post !== undefined
              ? (
              <FavoriteIcon className="text-2xl text-red-500" />
                )
              : (
              <FavoriteBorderIcon className="text-2xl " />
                )}
          </button>
        </div>
      </div>
    </>
  )
}
