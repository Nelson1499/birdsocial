import { Componentclient } from "@/componentsclients/component-client"
import { Postform } from "../form/post-form"
import type { ObjectUser } from "@/types/typesdata"

export const ContainerPost = async () => {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const userAuthentication = session?.user?.user_metadata as ObjectUser
  return <Postform data={userAuthentication} />
}
