import { Querymessage, Querymessageprivate } from "@/db/supabase_query_message"
import { SearchMessage } from "../search"
import { Paramstypes } from "@/types/paramsTypes"
import Privatechat from "./privatechat"
import Coverconversation from "./cover"
import { FormMessage } from "@/components/chatcomponents/form"
import Containerlist from "../containerlist"
import { Session } from "@/start/session"
import { Group } from "@/types/typesdata"
import { MiContextoProviderSearch } from "@/context/searchcontext"

export default async function chatprivate({
  params: { id }
}: {
  params: Paramstypes
}) {
  const message = (await Querymessage()) as Group[] | any[]
  const privatem = await Querymessageprivate(id)
  const session = await Session()
  return (
    <div className="flex h-screen overflow-hidden">
      <MiContextoProviderSearch>
        <article className="w-full md:w-[453px] hidden lg:block overflow-auto h-screen sticky top-0 border-l border-slate-400">
          <SearchMessage />
          <Containerlist message={message} session={session?.user.id} />
        </article>
        <section className="flex-grow z-0 w-[600px] overflow-auto sticky top-0 h-screen sm:border-x border-slate-400">
          <Coverconversation id={id} />
          <ul className="w-full mt-2 px-2 space-y-2 pb-16">
            {privatem?.map((p, i) => (
              <Privatechat key={i} messages={p} />
            ))}
          </ul>
          <div className="flex items-center justify-center relative bg-transparent">
            <FormMessage id={id} />
          </div>
        </section>
      </MiContextoProviderSearch>
    </div>
  )
}
