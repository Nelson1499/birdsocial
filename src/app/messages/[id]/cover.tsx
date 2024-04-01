import { Componentclient } from "@/componentsclients/component-client"
import Image from "next/image"
import profile from "@/images/perfil.jpg"

const Coverconversation = async ({ id }: { id: string }) => {
  const supabase = Componentclient()
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single()
  return (
    <section className="w-full border-b-2 border-slate-400 ">
      <header className="dark:bg-black bg-opacity-75 p-2">
        <h1 className="font-bold">{data?.name}</h1>
      </header>
      <div className="m-auto w-full items-center text-center justify-center mt-2">
        <Image
          className="rounded-full m-auto"
          src={data?.avatar_url ?? profile}
          width={75}
          height={75}
          alt="profile"
        />
        <h2 className="font-bold">{data?.name}</h2>
        <h3 className="font-bold text-gray-500">@{data?.username}</h3>
      </div>
    </section>
  )
}

export default Coverconversation
