"use client"

import type { Group } from "@/types/typesdata"
import Image from "next/image"
import Link from "next/link"

export const ListChat = ({ group, id }: { group: Group | any, id: string | any }) => {
  const {
    message,
    name,
    avatar_url: avatar,
    username,
    id_user: iduser,
    usuario1,
    userid
  } = group as Group
  return (
    <ul className={`hover:bg-black hover:bg-opacity-10 ${id === iduser && "bg-black bg-opacity-10"}`}>
      <Link href={`/messages/${iduser}`}>
        <li className="mx-5 py-2 flex space-x-2">
          <Image
            src={avatar}
            alt="perfil"
            width={500}
            height={500}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <div className="flex space-x-1">
              <h3 className="font-semibold">{name}</h3>
              <h4 className="text-gray-600 font-sans">@{username}</h4>
            </div>
            <p className="text-gray-600">{userid === usuario1 && "Tu: "}{message}</p>
          </div>
        </li>
      </Link>
    </ul>
  )
}
