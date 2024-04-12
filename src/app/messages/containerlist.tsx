"use client"
import { useMiContextoSearch } from "@/context/searchcontext"
import { ListChat } from "./listchats"
import { type Group } from "@/types/typesdata"
import ListUserR from "@/components/list/ListUserR"

const Containerlist = ({ message, session }: { message: Group[], session: string | undefined }) => {
  const { character } = useMiContextoSearch()
  return (
    <>
      { character !== ""
        ? (
        <ListUserR character={character} session={session} />
          )
        : (
            message?.map((m, i) => <ListChat key={i} group={m} id={null} />)
          )}
    </>
  )
}

export default Containerlist
