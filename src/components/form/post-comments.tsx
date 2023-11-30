"use client"
import Image from "next/image"
import type { ObjectUser, RelationPost } from "@/types/typesdata"
import { useRef } from "react"
import { ButtonComment } from "../posting/button-comment"
import { addNewComment } from "@/actions/add-comment-post"

export const CommentPost = ({ data, post }: { data: ObjectUser, post: RelationPost[] }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const addPost = async (formData: FormData) => {
    await addNewComment(formData)
    formRef.current?.reset()
  }
  const { username } = post[0].users
  return (
    <form
      ref={formRef}
      action={addPost}
      className="my-2 justify-center items-center border-b-2 border-white border-opacity-10"
    >
      <section className="flex mx-2 md:mx-5">
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
      <input type="hidden" name="id_post" id="id_post" value={post[0].id} />
      <ButtonComment />
      </section>
    </form>
  )
}
