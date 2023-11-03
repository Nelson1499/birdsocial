import Image from "next/image"
import type { RelationPost } from "@/types/typesdata"
import { InteractionCentral } from "./interaction-central"
export const PostCentral = ({ post, numcomments }: { post: RelationPost[], numcomments: number | any }) => {
  const { birdtweets, users, likes, id, birdretweets } = post[0]
  return (
    <article className="border-b-2 border-b-white border-opacity-10 items-center justify-center mx-2 md:mx-5">
      <div className="">
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
            <h3>{users.name}</h3>
            <h3 className="text-gray-300 ">@{users.username}</h3>
          </div>
        </div>
        <div className="w-full p-2 break-all">
          <p>{birdtweets}</p>
        </div>
      </div>
      <div className="w-full justify-center">
        <InteractionCentral data={{ birdretweets, id, likes }} numcomments={numcomments} />
      </div>
    </article>
  )
}
