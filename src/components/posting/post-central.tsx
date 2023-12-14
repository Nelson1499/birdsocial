import Image from "next/image"
import type { RelationPost } from "@/types/typesdata"
import { InteractionCentral } from "./interaction-central"
export const PostCentral = ({ post, numcomments }: { post: RelationPost[], numcomments: number | any }) => {
  const { birdtweets, users, likes, id, birdretweets } = post[0]
  return (
    <section className="border-b-2 border-b-slate-400 items-center justify-center mx-2 md:mx-5">
      <article>
        <figure className="flex my-2">
          <Image
            priority={true}
            width={500}
            height={500}
            className="w-12 h-12 rounded-full"
            src={users.avatar_url}
            alt="perfil"
          />
          <figcaption className="block mx-2 justify-center item-center">
            <h3>{users.name}</h3>
            <h3 className="text-gray-500 ">@{users.username}</h3>
          </figcaption>
        </figure>
        <section className="w-full p-2 break-all">
          <p>{birdtweets}</p>
        </section>
      </article>
      <footer className="w-full justify-center">
        <InteractionCentral data={{ birdretweets, id, likes }} numcomments={numcomments} />
      </footer>
    </section>
  )
}
