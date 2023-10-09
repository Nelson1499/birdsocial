import Image from "next/image"
import { Interaction } from "./interaction"
import type { RelationPost } from "@/types/typesdata"

export const Post = ({ post }: { post: RelationPost[] | any }) => {
  const { birdtweets, users, likes, id, birdretweets, commentbirdtweets } =
    post as RelationPost
  return (
    <article className="border-b-2 border-b-white border-opacity-10 py-2 items-center justify-center text-sm md:text-xl">
      <div className="flex">
        <Image
          priority={true}
          width={500}
          height={500}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          src={users.avatar_url}
          alt="perfil"
        />
        <div className="block mx-2 justify-center item-center w-full">
          <div className="md:flex">
            <h3>{users.name}</h3>
            <small className="text-gray-300 md:mx-2">@{users.username}</small>
          </div>
          <div className="w-full">
            <p>{birdtweets}</p>
          </div>
          <div className="w-full justify-center block">
            <Interaction
              data={{ birdretweets, id, likes, commentbirdtweets }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
