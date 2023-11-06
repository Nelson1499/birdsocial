import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"
import Head from "next/head"
import Recomendation from "@/components/recomendation/recomendation"
import { Navbarfooter } from "@/components/footer/navbarfooter"
import { MiContextoProvider } from "@/context/postingcontext"
import { ContainerPost } from "@/components/container/containerform-post"
import { ContainerLayout } from "@/components/container/containerLayout"
import { Session } from "@/start/session."

export const metadata: Metadata = {
  title: "Birdosocial",
  description: "Aplicación de posteos de usuarios similar a twitter"
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await Session()
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto transition-all">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <MiContextoProvider>
          <ContainerPost />
          <ContainerLayout>
            {session !== null && <Navbar />}
            {children}
            {session !== null && <Recomendation />}
          </ContainerLayout>
          <Navbarfooter />
        </MiContextoProvider>
      </body>
    </html>
  )
}
