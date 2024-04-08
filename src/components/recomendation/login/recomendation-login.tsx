import Listaslogin from "../../list/listaslogin"

const RecomendationLogin = () => {
  return (
    <article className="w-72 hidden lg:block transition ease-out delay-75">
      <div className="fixed border-2 border-slate-400 rounded my-2 p-2 tablet:mx-5">
        <h3 className="mx-2 font-bold">¿Eres nuevo en Birdsocial?</h3>
        <small className="text-gray-600">Regístrate ahora para poder postear.</small>
        <ul>
          <Listaslogin />
        </ul>
      </div>
    </article>
  )
}

export default RecomendationLogin
