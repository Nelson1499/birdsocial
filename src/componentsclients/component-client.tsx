"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/database"
import { cache } from "react"
export const Componentclient = cache(() => {
  const cookieStorre = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStorre })
})
