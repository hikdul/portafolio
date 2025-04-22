import { getTranslations } from "next-intl/server"
import { LanguajeInd } from "./LanguajeInd"

const LanguajeView = async () => {

    const t = await getTranslations('lang')
    return (
        <div className="mt-5 flex flex-col items-center justify-center">
            <p className="text-xs text-slate-600 underline" >{t('lang')}</p>
            <div className="lasguaje flex flex-row justify-evenly gap-3">
                <LanguajeInd icon="/img/flag_ve.png" lang="es" />
                <LanguajeInd icon="/img/ita.png" lang="it" />
                <LanguajeInd icon="/img/uk.png" lang="en" />
            </div>
        </div>
    )
}

export {
    LanguajeView
}