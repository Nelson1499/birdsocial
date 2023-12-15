import Image from "next/image"
import { Interaction } from "./interaction"
import type { RelationPost } from "@/types/typesdata"
export const Post = ({ post }: { post: RelationPost[] | any }) => {
  const { birdtweets, users, likes, id, birdretweets, commentbirdtweets } =
    post as RelationPost
  return (
    <section className="border-b border-b-slate-400 py-2 items-center justify-center text-base">
      <article>
        <figure className="flex mx-2 md:mx-5">
        <Image
          priority={true}
          width={500}
          height={500}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          src={users.avatar_url}
          alt="perfil"
        />
        <figcaption className="block mx-2 justify-center item-center w-[90%]">
          <div className="flex">
            <h3>{users.name}</h3>
            <small className="text-gray-500 mx-1">@{users.username}</small>
          </div>
          <section className="w-[95%] md:w-full">
            <p className="w-full break-words">{birdtweets}</p>
          </section>
          <footer className="w-full justify-center block">
            <Interaction
              data={{ birdretweets, id, likes, commentbirdtweets }}
            />
          </footer>
        </figcaption>
        </figure>
      </article>
    </section>
  )
}
