import { Componentclient } from "@/componentsclients/component-client"
import { privatemessage } from "@/types/typesdata"
import React from "react"

const Privatechat = async ({ messages }: { messages: privatemessage }) => {
  const supabase = Componentclient()
  const {
    data: { user }
  } = await supabase.auth.getUser()
  
  return (
    <li className={`max-w-56 w-max p-2 ${messages.id_usuario === user?.id ? "rounded-r-lg rounded-tl-lg bg-slate-600" : "ml-auto bg-blue-500 rounded-l-lg rounded-tr-lg" } text-white block`}>
      <p>{messages.ultimo_mensaje}</p>
    </li>
  )
}

export default Privatechat
