import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar/navbar"

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
      <body>
        <div className="mx-10 item-center">
          <div className="w-full m-auto h-screen flex my-2">
            <div className="w-[275px] h-full">
              <Navbar />
            </div>
            <div>{children}</div>
            <div className="w-[450px] h-full border border-blue-400 relative"></div>
          </div>
        </div>
      </body>
    </html>
  )
}
