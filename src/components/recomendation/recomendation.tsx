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
    followuser: user.follow.find(
      (follow) => follow.user_id === session?.user?.id
    )
  }))
  const userAuthentication: number | any = session?.user?.id
  return (
    <article className="w-72 hidden lg:block transition ease-out delay-75">
      <div className="fixed border-2 border-slate-400 rounded my-5 mx-2 xl:mx-5">
        <h3 className="mx-2">A quien Seguir</h3>
        <ul>
          {userFollow?.map((user: userfollow) => (
            <Recomendationclient
              key={user.id}
              user={user}
              session={userAuthentication}
            />
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Recomendation
