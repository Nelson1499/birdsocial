import { AuthLoginServer } from "@/components/login/login-server"

export default function Login () {
  return (
    <main className="sm:w-[600px] md:left-auto w-screen h-screen m-auto md:h-max flex rounded bg-blue-500 text-white shadow-md shadow-black">
      <AuthLoginServer />
    </main>
  )
}
