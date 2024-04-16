import { useFormStatus } from "react-dom"

export const ButtonPost = () => {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-500 h-max rounded-full py-2 px-3 m-2 text-white"
    >
      {pending ? "Posteando..." : "Postear"}
    </button>
  )
}
