"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon"
import ReactMarkdown from 'react-markdown';
//import { useState } from "react"

interface props {
    title: string
    desc_short: string
    desc_long: string
    img: string
    inicio: Date
    fin?: Date
    tech: iconName[]
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
    
    const open = () =>{
        if(!expand)
            setExpand(true)
    }

    if (loading)
        return (
            <div>
                loading...
            </div>
        )

    return (
        <div onClick={open} className={cn("group card overflow-hidden w-full h-full max-h-[20vh] p-3 duration-700 border-0 border-l-2 border-b-2 rounded-bl-2xl  border-green-400 mt-10", expand && "max-h-fit col-span-2")}>
            <div className="bg-green-400 w-[10%] group-hover:w-[60%] h-0.5 duration-500"></div>
            <div className="card_complement mt-5">
                <div className="header grid gap-2 grid-cols-5 ">
                    <div className="flex items-center ">
                        <Image width={100} height={100} className="size-fit -translate-y-5" src={img} alt={title} />
                    </div>
                    <div className="col-span-4">
                        <h2 className={cn("title text-lg  font-medium group-hover:font-font group-hover:text-green-400 duration-200", expand && " font-bold  text-3xl text-center pt-10  ")}>
                            {title}
                        </h2>
                        <div className={cn("desc_short opacity-100 font-light group-hover:font-medium", expand && "opacity-0")} >
                            {desc_short}

                        </div>

                        <div className={cn("flex justify-end opacity-100 z-50",expand && "opacity-0")}>
                            <button className="text-green-400 hover:text-green-300 duration-700" onClick={toggle}>
                                + see more...
                            </button>
                        </div>
                        <div className={cn("periodo opacity-0 text-right font-light -translate-x-8 -translate-y-10 text-gray-500 group-hover:font-medium duration-500", expand && "opacity-100")}>
                            {getDateTime(inicio)} - {getDateTime(fin)}
                        </div>
                    </div>
                </div>
                <div className={cn("tech opacity-0 flex flex-row  duration-500", expand && "opacity-100 mb-10 mt-5")}>
                    {tech && tech.map(t => <DynamicIcon key={t.toString()} name={t} className="block sm:hidden lg:block text-5xl text-[#333] bg-white p-1 ml-10 md:ml-3 group-hover:text-green-400 dark:hover:text-white self-center border-1 rounded border-[#333] group-hover:bg-white  group-hover:border-green-400 group-hover:dark:text-white group-hover:dark:bg-[#333] duration-500   " />)}
                </div>
                <div className={cn("desc_long opacity-0 font-light group-hover:font-medium duration-500", expand && "opacity-100")}>
                    <ReactMarkdown>{desc_long.trim()}</ReactMarkdown>
                    <div className="flex justify-end">
                        <button className="text-green-400 hover:text-green-300 duration-700 " onClick={toggle}>
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
