import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
)

export const SearchUsers = async ({
  name,
  id
}: {
  name: string
  id: string | undefined
}) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .ilike("name", `%${name}%`)
    .not("id", "eq", id)
  return data
}
