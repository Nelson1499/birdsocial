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
    <div className="my-2">
      <header className="text-gray-400">Respondió a @{responsepost}</header>
      <div>
        <figure className="flex my-2">
          <Image
            width={500}
            height={500}
            className="w-12 h-12 rounded-full"
            src={users.avatar_url}
            alt="perfil"
          />
          <figcaption>
            <div className="block ml-2 justify-center item-center">
              <div className="flex">
                <h3>{users.name}</h3>
                <small className="text-gray-300 mx-2">@{users.username}</small>
              </div>
              <div className="w-full break-all">
                <p>{comment}</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <InteractionComment
        commentsnum={nestedComments.length}
        data={post}
        session={session}
      >
        <CommentForm data={userAuthentication} post={post} />
      </InteractionComment>
      {nestedComments?.length > 0
        ? (
        <ButtonComment>
          {nestedComments?.map((nestedComment, index) => (
            <CommentpostServer
              key={nestedComment.id}
              post={nestedComment}
              styleData={index === nestedComments.length - 1}
            />
          ))}
        </ButtonComment>
          )
        : null}
    </div>
  )
}
