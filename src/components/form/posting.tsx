import Image from "next/image"
import image from "../../images/thumb-1920-97962.jpg"
export const Posting = () => {
  return (
    <form className="flex">
      <Image className="w-14 h-14 rounded-full" src={image} alt="perfil" />
      <div className="w-full mx-4">
        <textarea
          maxLength={225}
          placeholder="Que contas?"
          name="post"
          id="post"
        />
        <div className="flex justify-end border-t-2 border-white border-opacity-10">
          <button className="bg-blue-500 rounded-2xl py-2 px-3 my-2">
            Postear
          </button>
        </div>
      </div>
    </form>
  )
}
