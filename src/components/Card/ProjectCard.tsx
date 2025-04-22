"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon"
import ReactMarkdown from 'react-markdown';
import Link from "next/link"
//import { useState } from "react"
// TODO: verificar que de algun modo se entienda cuando una tarjeta esta inactiva y no activa

interface props {
    title: string
    desc_short: string
    desc_long: string
    img: string
    inicio: Date
    fin?: Date
    tech: iconName[]
    url?: string
    github?: string
}


const getDateTime = (dat?: Date): string => {
    if (!dat)
        return "Current"
    if(dat.getFullYear() < 2000)
        return ""
    return `${dat.getDate()}/${dat.getMonth()}/${dat.getFullYear()}`
}

const ProjectCard = ({ title, desc_long, desc_short, img, inicio, fin, tech, url, github }: props) => {

    const [expand, setExpand] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const toggle = () => {
        setLoading(true)
        //?: meter un instante de espera
        setExpand(!expand)
        setLoading(false)
    }

    const open = () => {
        if (!expand)
            setExpand(true)
    }

    if (loading)
        return (
            <div>
                loading...
            </div>
        )

    if (true)
        return (<div onClick={open} className="border-0 border-b-2 border-green-500 my-5 p-1 rounded-none">
            <div className={cn("heading px-5 py-1 bg-green-400 text-white w-[40%] duration-300 translate-x-14 rounded-tl-2xl", expand && "translate-x-0 w-[70%]")}>
                <h3 className={cn("text-2xl", expand && "text-4xl text-white font-bold ml-12")}>{title}</h3>
            </div>
            <div className="body grid grid-cols-3 lg:grid-cols-5 overflow-hidden pt-5">
                <div className={cn("flex items-center ", expand ? "hidden" : "")}>
                    <Image width={100} height={100} className="size-fit -translate-y-5" src={img} alt={title} />
                </div>
                <div className={cn("texto_corto col-span-2 lg:col-span-4", expand ? "hidden" : "")}>
                    {desc_short}
                </div>
                <div className={cn("texto_comp col-span-3 lg:col-span-5", expand ? "" : "hidden")}>
                    <ReactMarkdown>{desc_long.trim()}</ReactMarkdown>
                </div>
            </div>

            <div className={cn("flex justify-between", expand && "hidden")}>
                <div className="flex flex-row items-start">
                    {tech && tech.map(t => <DynamicIcon key={t.toString()} name={t} className={cn("block sm:hidden lg:block text-5xl text-[#333] bg-white p-1 ml-10 md:ml-3 hover:text-green-400 dark:hover:text-white self-center border-1 rounded border-[#333] group-hover:bg-white  group-hover:border-green-400 group-hover:dark:text-white group-hover:dark:bg-[#333] duration-500")}/>)}
                </div>
                <div className={cn("periodo text-right font-light  text-gray-500 group-hover:font-medium duration-500")}>
                    {getDateTime(inicio)} - {getDateTime(fin)}
                </div>
            </div>
            <div className={cn("flex flex-col justify-baseline", !expand && "hidden")}>
                {url && <div className="flex flex-row items-center">
                    <b className="text-green-400 font-bold">App:</b> <Link href={url} target="_blank"> <DynamicIcon className="hover:text-green-400 text-2xl ml-5" name="web" ></DynamicIcon> </Link>
                </div>}
                {github && <div className="flex flex-row items-center mt-3" >
                    <b className="text-green-400 font-bold">Git:</b>  <Link href={github} target="_blank"> <DynamicIcon className="hover:text-green-400 text-2xl ml-5 " name="github" ></DynamicIcon></Link>
                    </div>}
            </div>
            <div className=" more flex items-end justify-end">
                <span onClick={toggle} className={cn("bg-green-400 text-white p-1 rounded-br-4xl cursor-pointer hover:bg-green-600", expand && " px-20 ")}>{expand ? "ver menos..." : "ver mas..."}</span>
            </div>
        </div>
        )

}

export {
    ProjectCard
}
