import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"
import Head from "next/head"
import Recomendation from "@/components/recomendation/recomendation"
import { Navbarfooter } from "@/components/footer/navbarfooter"
import { MiContextoProvider } from "@/context/postingcontext"
import { ContainerPost } from "@/components/container/containerform-post"
import { ContainerLayout } from "@/components/container/containerLayout"

export const metadata: Metadata = {
  title: "Birdosocial",
  description: "Aplicación de posteos de usuarios similar a twitter"
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="w-full relative">
        <MiContextoProvider>
          <ContainerPost />
          <ContainerLayout>
            <div className="sm:w-[100px] justify-center items-center lg:w-[275px] h-full hidden sm:block">
              <Navbar />
            </div>
            {children}
            <div className="w-96 hidden lg:block">
              <Recomendation />
            </div>
          </ContainerLayout>
          <Navbarfooter />
        </MiContextoProvider>
      </body>
    </html>
  )
}
