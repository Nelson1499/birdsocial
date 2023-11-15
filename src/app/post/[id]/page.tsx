import type { ObjectUser } from "@/types/typesdata"
import type { Paramstypes } from "@/types/paramsTypes"
import { PostCentral } from "@/components/posting/post-central"
import { CommentPost } from "@/components/form/post-comments"
import { commentpostServer as CommentpostServer } from "@/components/posting/commentpost-server"
import { TitlePost } from "@/components/header/post-title"
import { Session } from "@/start/session."
import { QueryPostAndComments } from "@/db/supabase_query"
import { likesAndRepost } from "@/utilities/likesandrepost"
import { Errorinternet } from "@/error/error"

export default async function Posting ({
  params: { id }
}: {
  params: Paramstypes
}) {
  const session = await Session()
  const { data, comments } = await QueryPostAndComments(id)
  const postcenter = await likesAndRepost({ data, session })
  const userAuthentication = session?.user?.user_metadata as ObjectUser
  return (
    <main className="sm:w-[600px] w-full min-h-screen h-max sm:border-x-2 border-white border-opacity-10 sm:pb-1 pb-10">
      <div>
        <TitlePost />
        <div className="">
          {/* {session !== null && <Posting data={ userAuthentication } />} */}
          <PostCentral post={postcenter} numcomments={comments?.length} />
          {session !== null && (
            <CommentPost data={userAuthentication} post={postcenter[0]} />
          )}
          {comments?.map((post) => (
            <div
              key={post.id}
              className="border-b border-white border-opacity-10"
            >
              <div className="mx-2 md:mx-5">
                <CommentpostServer post={post} styleData={null} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Errorinternet />
    </main>
  )
}
