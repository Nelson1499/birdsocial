"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
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
      <div className="m-auto space-x-20">
        <span className="cursor-pointer" onClick={ navigation }>
          <ChatBubbleOutlineIcon className="text-2xl" /> {commentbirdtweets.length}
        </span>
        <span onClick={handleRePost} className="cursor-pointer hover">
          <RepeatIcon
            className={`${
              birdretweets.user_has_repost_post !== undefined
                ? "text-green-500"
                : "text-white"
            }`}
          />
          {birdretweets.amount_repost}
        </span>
        <span onClick={handleLikes} className="cursor-pointer">
          {
            likes.user_has_liked_post !== undefined ? <StarIcon className="text-2xl text-yellow-300" /> : <StarBorderIcon className="text-2xl hover:text-yellow-300" />
          }
        </span>
        {likes.amount_likes}
      </div>
    </div>
  )
}
