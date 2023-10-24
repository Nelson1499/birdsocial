export const Navbarmobile = () => {
  return (
    <nav className="fixed left-0 w-screen h-screen flex z-20 bg-white bg-opacity-10">
      <section className="bg-black fixed -mt-1 left-0 w-10/12 h-screen flex">
        <ul className="mx-2">
          <li className="row-span-1">Perfil</li>
          <li className="row-span-1">DarkMode</li>
          <li className="row-span-1">Cerrar sesión</li>
        </ul>
      </section>
    </nav>
  )
}
