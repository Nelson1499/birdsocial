import Image from "next/image"
import type { RelationPostPrincipal } from "@/types/typesdata"
import { InteractionCentral } from "./interaction-central"
import { Addspace } from "@/utilities/textutilities"
export const PostCentral = ({ post, numcomments }: { post: RelationPostPrincipal[], numcomments: number | any }) => {
  const { birdtweets, users, likes, id, birdretweets } = post[0]
  return (
    <article className="border-b-2 border-b-white border-opacity-10 items-center justify-center">
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
        <div className="w-full p-2">
          <p>{Addspace(birdtweets, 70)}</p>
        </div>
      </div>
      <div className="w-full justify-center">
        <InteractionCentral data={{ birdretweets, id, likes }} numcomments={numcomments} />
      </div>
    </article>
  )
}
