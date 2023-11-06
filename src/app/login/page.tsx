import { AuthLoginServer } from "@/components/login/login-server"

export default function Login () {
  return (
    <main className="sm:w-[600px] md:left-auto w-screen h-screen m-auto md:h-max flex md:border-4 rounded bg-blue-800 border-white border-opacity-10">
      <AuthLoginServer />
    </main>
  )
}
