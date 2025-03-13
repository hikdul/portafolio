"use client"
import { languaje } from "@/Constants/languaje/languaje"
import { cn } from "@/lib/utils"
import { useMainStore } from "@/Store/mainStore"
import Image from "next/image"

const LanguajeInd = ({icon, lang}:props) =>{
    const {languaje, setLanguaje} = useMainStore()
    
    const onClick = () =>{
        setLanguaje(lang)
        //TODO: en este punto se debe de enviar al cambio de idioma
    }
    
    return (
            <Image onClick={onClick} src={icon} width={20} height={20} alt="lenguaje seleccionado" className={cn("", lang != languaje && "blur-xs")} />
    )
}

interface props{
    icon: string
    lang: languaje
}

export {
    LanguajeInd
}
