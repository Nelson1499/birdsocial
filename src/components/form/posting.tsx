"use client"
import Image from "next/image"
import { useRef, type KeyboardEventHandler } from "react"
import { addNewPost } from "@/actions/add-post"
import { ButtonPost } from "../posting/button-post"
import { type ObjectUser } from "@/types/typesdata"

export const Posting = ({ data }: { data: ObjectUser }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const addPost = async (formData: FormData) => {
    await addNewPost(formData)
    formRef.current?.reset()
  }

  const textAreaAdjust: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = "25px" // Restaura la altura para calcularla de nuevo
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }
  return (
    <form
      ref={formRef}
      action={addPost}
      className="flex border-b-2 border-slate-400 py-1 my-2"
    >
      <section className="flex mx-2 md:mx-5 w-full">
        <Image
          priority={true}
          width={500}
          height={500}
          className="w-12 h-12 rounded-full"
          src={data.avatar_url}
          alt="perfil"
        />
        <span className="w-full mx-4">
          <textarea
            maxLength={225}
            placeholder="¿Qué cuentas?"
            name="post"
            id="post"
            className="mx-3 py-2 h-max min-h-[50px]"
            ref={textareaRef}
            style={{
              resize: "none",
              overflow: "hidden",
              position: "relative"
            }}
            onKeyUp={textAreaAdjust}
          />
          <ButtonPost />
        </span>
      </section>
    </form>
  )
}
