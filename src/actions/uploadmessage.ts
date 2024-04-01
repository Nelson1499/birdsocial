"use server"
import { ServerActions } from "@/componentsclients/component-server-actions"

export interface Data {
  message: FormDataEntryValue | null
  id: FormDataEntryValue | null
}
export const UploadMessage = async (datamessage: Data) => {
  const { message, id } = datamessage
  const supabase = ServerActions()
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (user === null) return
  const dataObject = {
    message,
    usuario1: user.id,
    usuario2: id
  }

  const { statusText } = await supabase.from("chat").insert(dataObject)
  if (statusText !== "Created") return
  return true
}
