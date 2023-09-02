"use client"
import Image from "next/image"
import type { ObjectUser } from "@/types/typesdata"
import { useRef } from "react"
import { addNewPost } from "@/actions/add-post"
import { ButtonPost } from "../posting/button-post"

export const Posting = ({ data }: { data: ObjectUser }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const addPost = async (formData: FormData) => {
    await addNewPost(formData)
    formRef.current?.reset()
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
          placeholder="Que contas?"
          name="post"
          id="post"
        />
        <ButtonPost />
      </div>
    </form>
  )
}
