import { AuthLoginServer } from "@/components/login/login-server"

export default function Login () {
  return (
    <main className="lg:w-[600px] w-full h-max border-x-2 border-white border-opacity-10 relative">
      <div className="">
        <AuthLoginServer />
      </div>
    </main>
  )
}
