"use client"

import { technologies } from "@/Constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
//import { useState } from "react"

interface props {
    title: string
    desc_short: string
    desc_long: string
    img: string
    inicio: Date
    fin?: Date
    tech: technologies[]
}


const getDateTime = (dat?: Date): string => {
    if (!dat)
        return "Current"
    return `${dat.getDate()}/${dat.getMonth()}/${dat.getFullYear()}`
}

const ProjectCard = ({ title, desc_long, desc_short, img, inicio, fin, tech }: props) => {

    const [expand, setExpand] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const toggle = () => {
        setLoading(true)
        //?: meter un instante de espera
        setExpand(!expand)
        setLoading(false)
    }
    
    
    if(loading)
        return(
        <div> 
            loading...
        </div>
        )



    return (
        <div className={cn("card overflow-hidden w-full h-full max-h-[20vh] p-3 duration-700", expand && "max-h-fit")}>
            <div className="card_complement ">
                <div className="header grid gap-2 grid-cols-5 ">
                    <div className="flex items-center ">
                        <Image width={100} height={100} className="size-fit -translate-y-5" src={img} alt={title} />
                    </div>
                    <div className="col-span-4">
                        <h2 className={cn("title text-lg font-bold", expand && "text-3xl text-center pt-10  ")}>
                            {title}
                        </h2>
                        <div className={cn("desc_short opacity-100", expand && "opacity-0")} >
                            {desc_short}

                            <div className="flex justify-end">
                                <button className="text-green-400 hover:text-green-300" onClick={toggle}>
                                    + see more...
                                </button>
                            </div>
                        </div>
                        <div className={cn("periodo opacity-0 text-right font-light -translate-x-8 -translate-y-10 text-gray-500", expand && "opacity-100")}>
                            {getDateTime(inicio)} - {getDateTime(fin)}
                        </div>
                    </div>
                </div>
                <div className={cn("tech opacity-0", expand && "opacity-100")}>
                    {tech.map(m => <span key={m}>{m.toString()}</span>)}
                </div>
                <div className={cn("desc_long opacity-0", expand && "opacity-100")}>
                    {/**? aca debe detrabajar con los markdown */}
                    {desc_long}

                    <div className="flex justify-end">
                        <button className="text-green-400 hover:text-green-300" onClick={toggle}>
                            - see minus...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    ProjectCard
}
