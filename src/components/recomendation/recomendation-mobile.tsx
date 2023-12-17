import { Componentclient } from "@/componentsclients/component-client"
import { Recomendationmobileclient } from "./recomendation-mobile-client"
import type { userfollow } from "@/types/typesdata"

export const Recomendationmobile = async () => {
  const supabase = Componentclient()
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("users")
    .select("*, follow(*)")
    .not("id", "eq", session?.user?.id)
    .order("created_at", { ascending: false })
  const userFollow = data?.map((user) => ({
    ...user,
    followuser: user.follow.find(
      (follow) => follow.user_id === session?.user?.id
    )
  }))
  const userAuthentication: number | any = session?.user?.id
  return (
    <article className="w-full border-b border-slate-400 items-center justify-center">
      <h3 className="mx-2">A quien Seguir</h3>

      {userFollow?.map((user: userfollow) => (
        <Recomendationmobileclient
          key={user.id}
          user={user}
          session={userAuthentication}
        />
      ))}
    </article>
  )
}
