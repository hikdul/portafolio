"use client"
//import Link from "next/link"
import {Link} from '@/i18n/navigation';
import { hIconProps } from "./interface";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMainStore } from "@/Store/mainStore";
import { useLocale, useTranslations } from 'next-intl';


const HLink = ({title, icon,  to}: hIconProps) =>{
    
    //*: inter
    const t = useTranslations('MainLinks');
    const texto = t(title)
    //*: old funcionality
    const pathName = usePathname()
    const {setCurrentPage} = useMainStore()
    //*: get the active
    const locale = useLocale()
    const active = pathName.replaceAll("/","").toLowerCase() === `${locale}${to}`.replaceAll("/","").toLowerCase()
    //console.log({locale, pathName, pn: pathName.replaceAll("/","").toLowerCase() , to, to2:`${locale}${to}`.replaceAll("/","").toLowerCase(), active})
    
    return(
        <li 
                onClick={()=> setCurrentPage(texto)}
                className={cn("relative list-none w-20 mx-0 my-1 before:absolute before:top-9 before:left-[50%] before:-translate-x-[200%]  before:-translate-y-0.5 before:w-2 before:h-2 before:bg-[#222] rounded-full duration-100",
                active && "box-shadow-Hlink")}
        >
            <Link className="flex item-center justify-center" style={{textDecoration: "none", flexDirection: "column"}} href={to}>
                <span className={cn("box-shadow-Hlink-icon absolute w-12 h-12 flex justify-center items-center text-white rounded-full z-10 duration-100 delay-75 hover:bg-[#0f0] ", 
                    active && "bg-[#29fd53] text-[#fff] box-shadow-Hlink-icon scale-100")}>
                        {icon}
                </span>
       {/*         <span className={cn("absolute text-[#2f363e] rounded px-1 py-2 opacity-0", 
                    active && "absolute text-white bg-transparent rounded opacity-100  delay-75 py-0 px-1 translate-y-6 translate-x-1 z-20 text-sm font-light ")}>
                    {title}
                </span>*/}
            </Link>
        </li>
)}


export {
    HLink
}