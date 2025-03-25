"use client"
import { languaje } from "@/Constants/languaje/languaje"
import { cn } from "@/lib/utils"
import { useMainStore } from "@/Store/mainStore"
import Image from "next/image"
//*: internacionalizacion
import { useLocale } from "next-intl"
import { useRouter,usePathname } from "@/i18n/navigation"


const LanguajeInd = ({ icon, lang }: props) => {

    const { languaje, setLanguaje } = useMainStore()
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()


    const onClick = () => {
        if (lang == locale)
            return
        setLanguaje(lang)
        router.push(pathname, {locale: lang})

    }

    return (

        <Image onClick={onClick} src={icon} width={20} height={20} alt="lenguaje seleccionado" className={cn("", lang != languaje && "blur-xs")} />
    )
}

interface props {
    icon: string
    lang: languaje
}

export {
    LanguajeInd
}
