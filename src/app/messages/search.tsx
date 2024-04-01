export const SearchMessage = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-2">
      <h2 className="mx-2 text-xl font-bold">Mensajes</h2>
      <input type="text" name="searchmessage" id="searchmessage" className="outline-none outline-1 w-[90%] outline-black m-auto rounded"/>
    </section>
  )
}
