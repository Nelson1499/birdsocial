import { Querymessage } from "@/db/supabase_query_message"
import { ListChat } from "./listchats"
import { SearchMessage } from "./search"
import Messagenew from "./messagenew"
import { Session } from "@/start/session"

export default async function chat () {
  const message = await Querymessage()
  const session = await Session()
  return (
    <div className="flex">
      <article className="tablet:w-[453px] w-full min-h-screen h-max sm:border-x border-slate-400 fixed">
        <SearchMessage />
        {message?.map((m, i) => (
          <ListChat key={i} group={m} id={null}/>
        ))}
      </article>
      <Messagenew session={session?.user.id} />
    </div>
  )
}
