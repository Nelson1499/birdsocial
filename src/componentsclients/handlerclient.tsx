import { type Database } from "@/types/database"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { cache } from "react"

export const HandlerClient = cache(() => {
  const cookieStorre = cookies()
  return createRouteHandlerClient<Database>({ cookies: () => cookieStorre })
})
