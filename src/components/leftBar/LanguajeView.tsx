import { LanguajeInd } from "./LanguajeInd"

const LanguajeView = () => {

    return (
        <div className="lasguaje flex flex-nowrap justify-evenly mt-10">
            <LanguajeInd icon="/img/flag_ve.png" lang="es"  />
            <LanguajeInd icon="/img/ita.png"  lang="it" />
            <LanguajeInd icon="/img/uk.png" lang="en" />
        </div>
    )
}

export {
    LanguajeView
}