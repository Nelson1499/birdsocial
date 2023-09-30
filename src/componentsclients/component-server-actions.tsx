"use server"
import { cookies } from "next/headers"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cache } from "react"
export const ServerActions = cache(() => {
  const cookieStorre = cookies()
  return createServerActionClient({ cookies: () => cookieStorre })
})
