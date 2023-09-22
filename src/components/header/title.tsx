import FlutterDashIcon from "@mui/icons-material/FlutterDash"
import Image from "next/image"
import portada from "../../images/thumb-1920-97962.jpg"

export const Title = () => {
  return (
    <div className="w-full py-1 h-max border-b-2 border-white border-opacity-10 bg-black bg-opacity-60 flex sticky top-0 z-10">
      <div className="grow">
        <Image
          src={portada}
          className="rounded-full h-12 w-12 mx-2 my-1 lg:hidden"
          alt="portada"
          width={500}
          height={500}
        />
      </div>
        <div className="items-center justify-center text-center grow-0">
          <div className="lg:hidden m-auto">
            <FlutterDashIcon />
          </div>
          <h2 className="text-xl font-semibold">Inicio</h2>
        </div>
        <div className="grow">
          <div className="rounded-full h-14 w-14 mx-2 my-1 lg:hidden"></div>
        </div>
    </div>
  )
}
