"use client"

import Listusers from "@/components/list/Listusers"
import { Fragment, useState } from "react"

const Messagenew = ({ session }: { session: string | undefined }) => {
  const [showList, setshowList] = useState(false)
  return (
    <Fragment>
      <section className="invisible lg:visible lg:w-[500px] lg:flex border-r border-slate-400 justify-center items-center">
        <div className="h-40 w-80 m-auto space-y-2">
          <h1 className="font-extrabold text-3xl">Selecciona un mensaje</h1>
          <p className="text-gray-600">
            Elige entre tus conversaciones existentes, empieza una nueva o sigue
            participando.
          </p>
          <button
            onClick={() => {
              setshowList(!showList)
            }}
            className="bg-blue-500 font-bold text-lg text-white p-2 rounded-lg"
          >
            Nuevo mensaje
          </button>
        </div>
      </section>
      {showList && <Listusers setshowList={setshowList} session={session} />}
    </Fragment>
  )
}

export default Messagenew
