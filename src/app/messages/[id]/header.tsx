"use client"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link"

export default function Headerconver ({ name }: { name: string | undefined }) {
  return (
    <header className=" dark:bg-black bg-opacity-75 p-2 flex space-x-4">
      <Link className="lg:hidden" href="/messages">
        <ArrowBackIcon />
      </Link>
      <h1 className="font-bold">{name}</h1>
    </header>
  )
}
