import { Errorinternet } from "@/error/error"
import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"
import { Querypost } from "@/db/supabase_query"
import { Session } from "@/start/session"
import type { ObjectUser } from "@/types/typesdata"
import { Navbarfooter } from "@/components/footer/navbarfooter"
import { Recomendationmobile } from "@/components/recomendation/recomendation-mobile"
import Recomendation from "@/components/recomendation/recomendation"
import RecomendationLogin from "@/components/recomendation/login/recomendation-login"

export default async function Home () {
  const session = await Session()
  const data = await Querypost()
  const posts =
    data?.map((post) => ({
      ...post,
      likes: {
        user_has_liked_post: post.likes.find(
          (like) => like?.user_id === session?.user?.id
        ),
        amount_likes: post?.likes?.length
      },
      birdretweets: {
        user_has_repost_post: post.birdretweets.find(
          (repost) => repost?.user_id === session?.user?.id
        ),
        amount_repost: post?.birdretweets?.length
      }
    })) ?? []
  const userAuthentication = session?.user?.user_metadata as ObjectUser
  return (
    <>
      <div className="flex">
        <main className="tablet:w-[600px] w-full min-h-screen h-max sm:border-x border-slate-400 sm:pb-1 pb-10">
          <Title data={userAuthentication} />
          {session !== null
            ? (
            <div className="hidden md:block">
              <Posting data={userAuthentication} />
            </div>
              )
            : null}
          {posts?.map((post, i) => (
            <>
              <Post key={post.id} post={post} />
              {(i % 10 === 0 && i > 0 && session !== null) && <Recomendationmobile />}
            </>
          ))}
          <Errorinternet />
        </main>
        {session !== null ? <Recomendation /> : <RecomendationLogin />}
      </div>
      <Navbarfooter sec="home" session={session} />
    </>
  )
}
