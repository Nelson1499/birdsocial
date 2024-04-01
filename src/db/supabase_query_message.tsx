import { Componentclient } from "@/componentsclients/component-client"

export const revalidate = 0

export const Querymessage = async () => {
  const supabase = Componentclient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user === null) return []
  try {
    const { data } = await supabase.rpc("getconversationuser", {
      u_id: user.id
    })
    const filteruser = data?.map(d => {
      if (d.usuario1 === user.id) {
        return { ...d, idusuario1: null, userid: user.id }
      } else if (d.usuario2 === user.id) {
        return { ...d, idusuario2: null, userid: user.id }
      } else {
        return { ...d, userid: user.id }
      }
    })
    return filteruser
  } catch (error) {
    console.error(error)
    return []
  }
}

export const Querymessageprivate = async (id: string) => {
  try {
    const supabase = Componentclient()
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (user === null) return []
    const { data } = await supabase.rpc("obtener_chats_privados", {
      idusuario1: user.id,
      idusuario2: id
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
