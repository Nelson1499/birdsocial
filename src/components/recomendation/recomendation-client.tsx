"use client"
import { Deletefollowing, following } from "@/actions/follow-users"
import type { userfollow } from "@/types/typesdata"
import Image from "next/image"
import { useRouter } from "next/navigation"
const Recomendationclient = ({
  user,
  session
}: {
  user: userfollow
  session: number
}) => {
  const router = useRouter()
  const submitForm = async (formData: FormData) => {
    if (user.followuser !== undefined) {
      await Deletefollowing(formData)
    } else {
      await following(formData)
    }
    router.refresh()
  }
  return (
    <form action={submitForm}>
      <input
        type="hidden"
        name="id_user_follow"
        id="id_user_follow"
        value={user.id}
      />
      <li className="flex justify-between py-5 hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer">
        <div className="ml-2 flex space-x-3">
          <Image
            src={user.avatar_url}
            className="h-10 w-10 rounded-full"
            alt="perfil"
            width={200}
            height={200}
          />
          <div className="text-sm  flex-grow">
            <h3 className="text-ellipsis w-48 overflow-hidden">{user.name}</h3>
            <h4 className="text-gray-500">@{user.username}</h4>
          </div>
        </div>
        <button className="mr-2 bg-gray-500 dark:bg-white rounded-full px-3 h-max py-1 text-white dark:text-black">
          { user.followuser !== undefined ? "Seguido" : "Seguir" }
        </button>
      </li>
    </form>
  )
}

export default Recomendationclient
