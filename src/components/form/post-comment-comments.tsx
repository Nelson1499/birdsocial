"use client"
import Image from "next/image"
import type { ObjectUser, RelationPostComment } from "@/types/typesdata"
import { type ChangeEvent, type RefObject, useRef, useState, useEffect } from "react"
import { ButtonComment } from "../posting/button-comment"
import { addComment } from "@/actions/add-comments-comments"

export const CommentForm = ({
  data,
  post
}: {
  data: ObjectUser
  post: RelationPostComment
}) => {
  const [text, setText] = useState("")
  const formReferens = useRef<HTMLFormElement>(null)
  const addPost = async (formData: FormData) => {
    await addComment(formData)
    formReferens.current?.reset()
    setText("")
  }
  const textareaRef: RefObject<HTMLTextAreaElement> = useRef(null)

  useEffect(() => {
    adjustTextareaHeight()
  }, [text])

  const adjustTextareaHeight = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setText(value)
  }
  const { username } = post.users
  return (
    <form
      ref={formReferens}
      action={addPost}
      className="my-2 p-2 mx-2 rounded justify-center items-center border-2 border-white border-opacity-10 w-full"
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
          className="mx-3 py-2 w-full resize-y"
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          style={{
            resize: "none"
          }}
        />
        <input type="hidden" name="username" id="username" value={username} />
        <input type="hidden" name="id_post" id="id_post" value={post.id} />
      </div>
      <div className="flex justify-end items-end">
        <div className="ml-auto">
          <ButtonComment />
        </div>
      </div>
    </form>
  )
}
