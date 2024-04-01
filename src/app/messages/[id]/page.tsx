import { Querymessage, Querymessageprivate } from "@/db/supabase_query_message"
import { ListChat } from "../listchats"
import { SearchMessage } from "../search"
import { Paramstypes } from "@/types/paramsTypes"
import Privatechat from "./privatechat"
import Coverconversation from "./cover"
import { FormMessage } from "@/components/chatcomponents/form"

export default async function chatprivate({
  params: { id }
}: {
  params: Paramstypes
}) {
  const message = await Querymessage()
  const privatem = await Querymessageprivate(id)
  return (
    <div className="flex h-screen overflow-hidden">
      <article className="w-full md:w-[453px] overflow-auto sticky top-0 h-full sm:border-x border-slate-400">
        <SearchMessage />
        {message?.map((m, i) => (
          <ListChat key={i} group={m} id={id} />
        ))}
      </article>
      <section className="flex-grow md:w-[550px] overflow-auto sticky top-0 border-r border-slate-400">
        <Coverconversation id={id} />
        <ul className="w-full mt-2 px-2 space-y-2 pb-16">
          {privatem?.map((p, i) => (
            <Privatechat key={i} messages={p} />
          ))}
        </ul>
        <div className="flex items-center justify-center relative">
          <FormMessage id={id} />
        </div>
      </section>
    </div>
  )
}
