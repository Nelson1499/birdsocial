import Image from "next/image"
import { Interaction } from "./interaction"
import type { RelationPost } from "@/types/typesdata"

export const Post = ({ post }: { post: RelationPost[] | any }) => {
  const { birdtweets, users, likes, id, birdretweets, commentbirdtweets } = post as RelationPost
  // console.log(post)
  return (
    <article className="border-b-2 border-b-white border-opacity-10 py-4 items-center justify-center">
      <div className="flex my-2">
        <Image
          priority={true}
          width={500}
          height={500}
          className="w-12 h-12 rounded-full"
          src={users.avatar_url}
          alt="perfil"
        />
        <div className="block mx-2 justify-center item-center">
          <div className="flex">
            <h3>{users.name}</h3>
            <small className="text-gray-300 mx-2">@{users.username}</small>
          </div>
          <div className="w-full">
            <p>{birdtweets}</p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center">
        <Interaction data={{ birdretweets, id, likes, commentbirdtweets }} />
      </div>
    </article>
  )
}
