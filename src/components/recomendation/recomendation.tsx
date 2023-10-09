import type { userfollow } from "@/types/typesdata"
import Recomendationclient from "./recomendation-client"
import { Componentclient } from "@/componentsclients/component-client"

const Recomendation = async () => {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("users")
    .select("*, follow(*)")
    .order("created_at", { ascending: false })
  const userFollow = data?.map((user) => ({
    ...user,
    followuser: user.follow.find((follow) => follow.user_id === session?.user?.id)
  }))
  const userAuthentication: number | any = session?.user?.id
  return (
    <div className="border-2 border-white border-opacity-10 rounded my-5 mx-2  xl:mx-5">
      <div>
        <h3 className="mx-2">A quien Seguir</h3>
        <ul>
          {userFollow?.map((user: userfollow) => (
            <Recomendationclient key={user.id} user={user} session={userAuthentication} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Recomendation
