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
      <body className="flex items-center justify-center h-screen">
        <div className="mx-10">
          <div className="w-full h-screen flex my-2">
            <div className="w-[275px] h-full">
              <Navbar />
            </div>
            <div className="flex-1">{children}</div>
            <div className="w-[450px] h-full border border-blue-400 relative"></div>
          </div>
        </div>
      </body>
    </html>
  )
}
