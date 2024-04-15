import { Querymessage } from "@/db/supabase_query_message"
import { SearchMessage } from "./search"
import Messagenew from "./messagenew"
import { Session } from "@/start/session"
import { MiContextoProviderSearch } from "@/context/searchcontext"
import Containerlist from "./containerlist"
import { type Group } from "@/types/typesdata"
import { Navbarfooter } from "@/components/footer/navbarfooter"
import { MiContextoProviderListUser } from "@/context/contextListUser"

export default async function chat () {
  const message = (await Querymessage()) as Group[] | any[]
  const session = await Session()
  return (
    <MiContextoProviderListUser>
      <div className="tablet:flex">
        <MiContextoProviderSearch>
          <article className="w-full h-screen tablet:max-w-[600px] lg:max-w-[400px] sticky sm:border-x border-slate-400">
            <SearchMessage />
            <Containerlist message={message} session={session?.user.id} />
          </article>
          <Messagenew session={session?.user.id} />
        </MiContextoProviderSearch>
      </div>
      <Navbarfooter sec="messages" session={session} />
    </MiContextoProviderListUser>
  )
}
