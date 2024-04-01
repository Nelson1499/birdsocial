import type { followDatabase } from "@/types/typesdata"
import { useFormStatus } from "react-dom"

export const Buttonfollow = ({
  follow
}: {
  follow: followDatabase | undefined
}) => {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className="mr-2 bg-gray-500 dark:bg-white rounded-full px-3 h-max py-1 text-white dark:text-black"
    >
      {pending
        ? `${follow !== undefined ? "Seguir..." : "Siguiendo..."}`
        : `${follow !== undefined ? "Seguido" : "Seguir"}`}
    </button>
  )
}
