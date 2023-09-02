import { experimental_useFormStatus as useFormStatus } from "react-dom"

export const ButtonPost = () => {
  const { pending } = useFormStatus()
  return (
    <div className="flex justify-end border-t-2 border-white border-opacity-10">
      <button
        disabled={pending}
        type="submit"
        className="bg-blue-500 rounded-full py-2 px-3 my-2"
      >
        {pending ? "Posteando..." : "Postear"}
      </button>
    </div>
  )
}
