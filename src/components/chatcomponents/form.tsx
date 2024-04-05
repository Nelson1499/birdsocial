"use client"
import { UploadMessage } from "@/actions/uploadmessage"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
export const FormMessage = ({ id }: { id: string }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const handleAction = async (formdata: FormData) => {
    const datamessage = {
      message: formdata.get("message"),
      id
    }
    if (datamessage !== null) await UploadMessage(datamessage)
    formRef.current?.reset()
  }
  useEffect(() => {
    const channel = supabase
      .channel("realtime chat")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chat"
        },
        () => {
          router.refresh()
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])
  return (
    <form
      ref={formRef}
      action={handleAction}
      className="fixed bottom-0 w-full tablet:w-[500px] m-auto p-2 "
    >
      <div className="outline outline-1 flex w-full p-2 rounded-md dark:text-white bg-white dark:bg-black">
        <input
          type="text"
          className="w-full outline-none bg-transparent"
          name="message"
          id="message"
          placeholder="Mensaje"
        />
        <button type="submit" className="hover:text-blue-500">
          Enviar
        </button>
      </div>
    </form>
  )
}
