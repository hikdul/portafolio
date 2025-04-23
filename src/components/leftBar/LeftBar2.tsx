import Image from "next/image"
import { SocialNetworks } from "./SocialNetworks"
import { LanguajeView } from "./LanguajeView"
import { GeneralData } from "./GeneralData"



const LeftBar2 = () => {

    return (
        <div className="inline lg:fixed leftBar h-[90vh] min-w-56 mt-5 ml-14 mr-4 rounded-2xl border-undido-oscuro-unmutable">
            <LanguajeView/>
            <div className="fotoYnombre flex flex-col justify-center items-center gap-2.5 mt-10 mb-5">
                <Image
                    className="rounded-full" 
                    src="/img/face.jpeg" 
                    alt="foto personal" 
                    width={70} 
                    height={70}
                  />
                <h2 className="hidden md:block text-slate-700 dark:text-white text-lg lg:text-xl  ">Hector Contreras</h2>
                <h2 className="block md:hidden text-slate-700 dark:text-white text-lg lg:text-xl  ">Hector Luis Contreras Di Girolamo</h2>
            </div>
            <div className="datosPersonales mt-10">
                <GeneralData />
            </div>
            <SocialNetworks />
        </div>
    )

}

export {
    LeftBar2
}