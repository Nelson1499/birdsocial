import { HandlerClient } from "@/componentsclients/handlerclient"
import { type NextRequest, NextResponse } from "next/server"
export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  if (code !== null) {
    const supabase = HandlerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    console.log(error)
  }
  return NextResponse.redirect(requestUrl.origin)
}
