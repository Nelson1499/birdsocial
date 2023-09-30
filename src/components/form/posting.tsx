"use client"
import Image from "next/image"
import type { ObjectUser } from "@/types/typesdata"
import { type RefObject, useEffect, useRef, useState, type ChangeEvent } from "react"
import { addNewPost } from "@/actions/add-post"
import { ButtonPost } from "../posting/button-post"

export const Posting = ({ data }: { data: ObjectUser }) => {
  const [text, setText] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const addPost = async (formData: FormData) => {
    await addNewPost(formData)
    formRef.current?.reset()
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
  return (
    <form
      ref={formRef}
      action={addPost}
      className="flex border-b-2 border-b-white border-opacity-10 py-4 my-2"
    >
      <Image
        priority={true}
        width={500}
        height={500}
        className="w-12 h-12 rounded-full"
        src={data.avatar_url}
        alt="perfil"
      />
      <div className="w-full mx-4">
        <textarea
          maxLength={225}
          placeholder="¿Que Contas?"
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
        <ButtonPost />
      </div>
    </form>
  )
}
