import Image from "next/image"
import { SocialNetworks } from "./SocialNetworks"
import { DataIconLB } from "./dataIconlb"
import { LanguajeView } from "./LanguajeView"
import { dataIconLBProps } from "./interface"


const dataFromIconLB: dataIconLBProps[] = [
    {
        name: "Age",
        desc: "35 years o.",
        icon: "age",
    },
    {
        name: "location",
        desc: "Lima, Peru",
        icon: "location",
    },
    {
        name: "phone",
        desc: "931084717",
        icon: "phone",
    },
]

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
                <h2 className=" text-lg lg:text-2xl ">Hector Contreras</h2>
            </div>
            <div className="datosPersonales mt-10">
                {dataFromIconLB.map(x => (<DataIconLB {...x} key={x.name} />))}
            </div>
            <SocialNetworks />
        </div>
    )

}

export {
    LeftBar2
}