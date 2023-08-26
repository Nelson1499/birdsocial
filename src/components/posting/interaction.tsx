"use client"
import RepeatIcon from "@mui/icons-material/Repeat"
// import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"

export const Interaction = () => {
  return (
    <div className="flex h-10 w-full items-center">
      <div className="m-auto space-x-20">
        <ChatBubbleOutlineIcon className="text-2xl" />
        <RepeatIcon className="text-2xl" />
        <StarBorderIcon className="text-2xl" />
      </div>
    </div>
  )
}
