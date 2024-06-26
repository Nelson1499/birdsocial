import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"
import { MiContextoProvider } from "@/context/postingcontext"
import { ContainerPost } from "@/components/container/containerform-post"
import { ContainerLayout } from "@/components/container/containerLayout"
import { Session } from "@/start/session"
import { Navbarmobile } from "@/components/navbar/navbarmobile"
import { MiContextoProviderNabvar } from "@/context/navbarcontext"
import FooterLogin from "@/components/footer/login/footerLogin"

export const metadata: Metadata = {
  title: "Birdosocial",
  description: "Aplicación de posteos de usuarios similar a Twitter"
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await Session()
  const datauser = session?.user?.user_metadata

  return (
    <html lang="en">
      <body>
        <MiContextoProvider>
          <MiContextoProviderNabvar>
            <ContainerPost />
            <ContainerLayout>
              <Navbar session={session} />
              <Navbarmobile data={datauser} session={session} />
              <div className="w-max-[993px]">
                {children}
              </div>
            </ContainerLayout>
          </MiContextoProviderNabvar>
        </MiContextoProvider>
        { session === null && <FooterLogin /> }
      </body>
    </html>
  )
}
