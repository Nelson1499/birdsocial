"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { InteractionPost } from "@/types/typesdata"

export const Interaction = ({ data }: { data: InteractionPost }) => {
  const { likes, id, birdretweets, commentbirdtweets } = data
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
  const navigation = () => {
    router.push(`post/${id}`)
  }
  return (
    <div className="flex h-10 m-auto w-full items-center">
      <div className="m-auto flex justify-between items-center w-64">
        <span
          className="cursor-pointer hover:text-sky-500"

        >
          <button onClick={navigation} className="p-1 rounded-full hover:bg-sky-500 hover:bg-opacity-30 mr-1">
            <ChatBubbleOutlineIcon className="text-2xl hover:text-sky-500" />
          </button>
          {commentbirdtweets.length}
        </span>
        <span

          className="cursor-pointer hover:text-green-500"
        >
          <button onClick={handleRePost} className="p-1 rounded-full hover:bg-green-500 hover:bg-opacity-30 mr-1">
            <RepeatIcon
              className={`hover:text-green-500 ${
                birdretweets.user_has_repost_post !== undefined
                  ? "text-green-500"
                  : "text-white"
              }`}
            />
          </button>
          {birdretweets.amount_repost}
        </span>
        <span className="cursor-pointer hover:text-red-500">
          <button
            onClick={handleLikes}
            className="p-1 rounded-full hover:bg-red-500 hover:bg-opacity-30 mr-1"
          >
            {likes.user_has_liked_post !== undefined
              ? (
              <FavoriteIcon className="text-2xl text-red-500" />
                )
              : (
              <FavoriteBorderIcon className="text-2xl hover:text-red-500" />
                )}
          </button>
          {likes.amount_likes}
        </span>
      </div>
    </div>
  )
}
