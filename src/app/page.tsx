import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"
import type { Database } from "@/types/database"
import type { RelationPost, ObjectUser } from "@/types/typesdata"

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data } = await supabase
    .from("birdtweets")
    .select("*, users(*)")
    .order("created_at", { ascending: false })
  const posts = data as RelationPost[]
  const userAuthentication = session?.user?.user_metadata as ObjectUser

  return (
    <main className="">
      <div className="w-[600px] h-max border-x-2 border-white border-opacity-10 relative">
        <Title />
        <div className="mx-2">
          {session !== null && <Posting data={userAuthentication} />}
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
