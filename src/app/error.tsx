"use client"
import PermScanWifiIcon from "@mui/icons-material/PermScanWifi"

const error = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <div className="sm:w-[600px] w-full min-h-screen h-max sm:border-x-2 border-white border-opacity-10 sm:pb-1 pb-10 justify-center items-center text-center">
      <div className="m-auto w-max h-max">
        <h1>{error.message}</h1>

        <div className=" text-red-500">
          {error.cause === "nointernet" && (
            <PermScanWifiIcon
              className="text-3xl w-full h-full"
              fontSize="large"
            />
          )}
        </div>
        <button onClick={reset}>Volver</button>
      </div>
    </div>
  )
}
export default error
