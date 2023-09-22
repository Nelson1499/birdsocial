import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"
import Head from "next/head"
import Recomendation from "@/components/recomendation/recomendation"

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
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <div className="lg:mx-10 w-full mx-2">
          <div className="w-full h-screen lg:flex my-2">
            <div className="lg:w-[275px] h-full hidden lg:block">
              <Navbar />
            </div>
            <div className="">{children}</div>
            <div className="lg:w-[450px] hidden lg:block">
              <Recomendation />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
