import { H1Icon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { SocialNetworks } from "./SocialNetworks"
import { Languaje } from "./languaje"
import { DataIconLB } from "./dataIconlb"

const LeftBar2 = () => {

    return (
        <div className="inline lg:fixed leftBar h-[90vh] min-w-56 mt-5 ml-14 mr-4 border-0 rounded-2xl  bg-white dark:bg-[#333] border-undido-oscuro-unmutable">
            <Languaje />
            <div className="fotoYnombre flex flex-col justify-center items-center gap-2.5 mt-10 mb-5">
                <Image
                    className="rounded-full" 
                    src="/img/face.jpeg" 
                    alt="foto personal" 
                    width={70} 
                    height={70}
                  />
                <h2>Hector Contreras</h2>
            </div>
            <div className="datosPersonales mt-10">
                <DataIconLB name="Age" desc="30 years old"/>
                <DataIconLB name="Location" desc="Lima, Peru"/>
            </div>
            <SocialNetworks />
        </div>
    )

}

export {
    LeftBar2
}