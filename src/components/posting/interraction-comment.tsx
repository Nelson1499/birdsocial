"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
import { type ReactNode, useState } from "react"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import type { TypeComment } from "@/types/typesdata"

export const InteractionComment = ({
  data,
  children,
  session,
  commentsnum
}: { data: TypeComment, children: ReactNode, session: any, commentsnum: number }) => {
  const { likes, id, birdretweets } = data
  const [showformcomment, setshowformcomment] = useState<boolean>(false)
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
          comment_id: id
        })
      } else {
        await supabase
          .from("likes")
          .insert({ user_id: user.id, comment_id: id })
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
      if (birdretweets?.user_has_repost_post !== undefined) {
        const { error } = await supabase.from("birdretweets").delete().match({
          user_id: user.id,
          comment_id: id
        })
        console.log(error)
      } else {
        const data = await supabase
          .from("birdretweets")
          .insert({ user_id: user.id, comment_id: id })
        console.log(data)
      }
    }
    router.refresh()
  }
  const toggleFormComment = () => {
    setshowformcomment(!showformcomment)
  }
  return (
    <>
      <div className="flex h-10 m-auto w-full items-center">
        <div className="m-auto space-x-20">
          <span
            className="cursor-pointer"
            onClick={toggleFormComment}
          >
            <ChatBubbleOutlineIcon className="text-2xl" /> {commentsnum}
          </span>
          <span onClick={handleRePost} className="cursor-pointer hover">
            <RepeatIcon
              className={`${
                birdretweets.amount_repost > 0 ? "text-green-500" : "text-white"
              }`}
            />
            {birdretweets?.amount_repost}
          </span>
          <span onClick={handleLikes} className="cursor-pointer">
            {likes.amount_likes > 0
              ? (
              <StarIcon className="text-2xl text-yellow-300" />
                )
              : (
              <StarBorderIcon className="text-2xl hover:text-yellow-300" />
                )}
          </span>
          {likes.amount_likes}
        </div>
      </div>
      {showformcomment && session !== null && <div>{ children }</div>}
    </>
  )
}
