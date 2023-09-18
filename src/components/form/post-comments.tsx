"use client"
import Image from "next/image"
import type { ObjectUser, TypeComment } from "@/types/typesdata"
import { useRef } from "react"
import { ButtonComment } from "../posting/button-comment"
import { addNewComment } from "@/actions/add-comment-post"

export const CommentPost = ({ data, post }: { data: ObjectUser, post: TypeComment }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const addPost = async (formData: FormData) => {
    await addNewComment(formData)
    formRef.current?.reset()
  }
  const { username } = post.users

  return (
    <form
      ref={formRef}
      action={addPost}
      className="my-2 justify-center items-center border-b-2 border-white border-opacity-10"
    >
      <div className="flex">
      <Image
        priority={true}
        width={500}
        height={500}
        className="w-12 h-12 rounded-full"
        src={data.avatar_url}
        alt="perfil"
      />
      <textarea
        maxLength={225}
        placeholder="¡Dale una respuesta!"
        name="post"
        id="post"
        className="mx-3 py-2 w-full min-h-[140px]"
      />
      <input type="hidden" name="username" id="username" value={username} />
      <input type="hidden" name="id_post" id="id_post" value={post.id} />
        <div><ButtonComment /></div>
      </div>
    </form>
  )
}
