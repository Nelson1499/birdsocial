import { Componentclient } from "@/componentsclients/component-client"
import Image from "next/image"
import profile from "@/images/perfil.jpg"
import Headerconver from "./header"
const Coverconversation = async ({ id }: { id: string }) => {
  const supabase = Componentclient()
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single()
  return (
    <section className="w-full border-b border-slate-400 ">
      <Headerconver name={data?.name} />
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
