import Image from "next/image"
import type { ObjectUser, TypeComment } from "@/types/typesdata"
import { InteractionComment } from "./interraction-comment"
import { commentpostServer as CommentpostServer } from "./commentpost-server"
import { ButtonComment } from "../button-comment/button"
import { CommentForm } from "../form/post-comment-comments"
export const Postcomment = ({
  post,
  session,
  userAuthentication,
  styleData
}: {
  post: TypeComment
  session: any
  userAuthentication: ObjectUser
  styleData: boolean
}) => {
  const { comment, users, nestedComments, responsepost } = post
  return (
    <div className="my-2 ">
      <h3 className="text-gray-400">Respondió a @{responsepost}</h3>
      <article className={`${
        (styleData === null ? (styleData ? "border-l-2" : "") : "")}
        ${nestedComments.length > 0 ? "border-l-2" : ""}
        items-center justify-center relative`}
    >
        <div className="flex my-2 mx-2 z-0">
          <Image
            priority={true}
            width={500}
            height={500}
            className="w-12 h-12 rounded-full absolute -left-6 top-0"
            src={users.avatar_url}
            alt="perfil"
          />
          <div className="block mx-5 justify-center item-center">
            <div className="flex">
              <h3>{users.name}</h3>
              <small className="text-gray-300 mx-2">@{users.username}</small>
            </div>
            <div className="w-full">
              <p>{comment}</p>
            </div>
          </div>
        </div>
        <div>
          <InteractionComment commentsnum={nestedComments.length} data={post} session={session}>
            <CommentForm data={userAuthentication} post={post} />
          </InteractionComment>
        </div>
      </article>
      {nestedComments?.length > 0
        ? (
        <ButtonComment>
          {nestedComments?.map((nestedComment, index) => (
            <div key={nestedComment.id}>
              <CommentpostServer post={nestedComment} styleData={index === nestedComments.length - 1} />
            </div>
          ))
          }
        </ButtonComment>
          )
        : null}
    </div>
  )
}
