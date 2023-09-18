"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { InteractionPost } from "@/types/typesdata"

export const InteractionCentral = ({
  data, numcomments
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
        <div className="space-x-5 flex">
        <span className="flex">{numcomments}<p className="text-gray-400 mx-2">Comments</p></span>
        <span className="flex">{birdretweets.amount_repost}<p className="text-gray-400 mx-2">BirdRetweets</p></span>
        <span className="flex">{likes.amount_likes}<p className="text-gray-400 mx-2">Likes</p></span>
        </div>
      </div>
      <div className="flex h-10 m-auto border-t-2 border-white border-opacity-20 py-2 w-full items-center">
        <div className="m-auto space-x-20">
          <span className="cursor-pointer">
            <ChatBubbleOutlineIcon className="text-2xl" />
          </span>
          <span onClick={handleRePost} className="cursor-pointer hover">
            <RepeatIcon
              className={`${
                birdretweets.user_has_repost_post !== undefined
                  ? "text-green-500"
                  : "text-white"
              }`}
            />
          </span>
          <span onClick={handleLikes} className="cursor-pointer">
            {
            likes.user_has_liked_post !== undefined
              ? (
              <StarIcon className="text-2xl text-yellow-300" />
                )
              : (
              <StarBorderIcon className="text-2xl hover:text-yellow-300" />
                )
            }
          </span>
        </div>
      </div>
    </>
  )
}
