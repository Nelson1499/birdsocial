import { experimental_useFormStatus as useFormStatus } from "react-dom"

export const ButtonPost = () => {
  const { pending } = useFormStatus()
  return (
    <div className="flex justify-end border-t-2 text-white border-slate-400 w-full">
      <button
        disabled={pending}
        type="submit"
        className="bg-blue-500 h-max rounded-full py-2 px-3 my-2 text-white"
      >
        {pending ? "Posteando..." : "Postear"}
      </button>
    </div>
  )
}
