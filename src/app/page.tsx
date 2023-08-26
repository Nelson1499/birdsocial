import { Posting } from "@/components/form/posting"
import { Title } from "@/components/header/title"
import { Post } from "@/components/posting/post"

export default function Home () {
  return (
    <main className="">
      <div className="w-[600px] h-max border-x-2 border-white border-opacity-10 relative">
        <Title />
        <div className="mx-2">
          <Posting />
          <Post />
        </div>
      </div>
    </main>
  )
}
