"use client"
import { useMiContexto } from "@/context/postingcontext"
import type { ObjectUser } from "@/types/typesdata"
import Image from "next/image"
import { ButtonPost } from "../posting/button-post"
import { useRef, type KeyboardEventHandler, type MouseEvent } from "react"
import { addNewPost } from "@/actions/add-post"
import CloseIcon from "@mui/icons-material/Close"
import type { MiContextoTypePosting } from "@/types/typescontext"

export const Postform = ({ data }: { data: ObjectUser }) => {
  const { showPosting, setShowPosting }: MiContextoTypePosting = useMiContexto()
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const addPost = async (formData: FormData) => {
    await addNewPost(formData)
    formRef.current?.reset()
    setShowPosting(false)
  }

  const textAreaAdjust: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = "25px" // Restaura la altura para calcularla de nuevo
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }
  const out = () => {
    setShowPosting(false)
  }

  const handleClickEnPost = (e: MouseEvent<HTMLDivElement | HTMLFormElement>) => {
    e.stopPropagation()
  }

  return (
    <>
      {showPosting && (
        <div
          onClick={out}
          className="fixed left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-10 z-20"
        >
          <form
            ref={formRef}
            action={addPost}
            className="bg-zinc-900 p-2 md:rounded w-full h-full md:h-[278px] md:w-[600px] relative"
            onClick={handleClickEnPost}
          >
            <button
              className="px-1 pb-3 cursor-pointer"
              onClick={() => {
                setShowPosting(false)
              }}
            >
              <CloseIcon />
            </button>
            <section className="flex w-full h-full">
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
                  className="mx-3 py-2 min-h-[50px]"
                  ref={textareaRef}
                  style={{
                    resize: "none",
                    overflow: "hidden"
                  }}
                  onKeyUp={textAreaAdjust}
                />
                <div className="absolute bottom-0 right-0 w-full flex items-end justify-end">
                  <ButtonPost />
                </div>
              </span>
            </section>
          </form>
        </div>
      )}
    </>
  )
}
