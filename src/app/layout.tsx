import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"
import Head from "next/head"

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
      <body className="flex items-center justify-center h-screen w-full">
        <div className="md:mx-10 w-full">
          <div className="w-full h-screen md:flex my-2 mx-2">
            <div className="md:w-[275px] h-full hidden md:block">
              <Navbar />
            </div>
            <div className="">{children}</div>
            <div className="md:w-[450px] h-full border border-blue-400 relative hidden md:block"></div>
          </div>
        </div>
      </body>
    </html>
  )
}
