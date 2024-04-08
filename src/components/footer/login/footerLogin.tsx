import Buttonslog from "./buttons/buttonslog"

const FooterLogin = () => {
  return (
    <>
      <footer className="fixed flex bottom-0 z-30 w-full text-white bg-black min-h-24 items-center justify-center">
        <section className="w-full px-2 md:max-w-[800px] flex m-auto justify-between">
          <div className="px-1">
            <h1 className="font-bold text-base md:text-xl ">
              No te pierdas lo que está pasando
            </h1>
            <p className="text-sm">Comparte tus experiencias y anécdotas en birdsocial.</p>
          </div>
          <Buttonslog />
        </section>
      </footer>
    </>
  )
}

export default FooterLogin
