import { LanguajeInd } from "./LanguajeInd"

const LanguajeView = () => {

    return (
        <div className="lasguaje flex flex-nowrap justify-evenly mt-10">
            <LanguajeInd icon="/img/flag_ve.png" lang="esp"  />
            <LanguajeInd icon="/img/ita.png"  lang="ita" />
            <LanguajeInd icon="/img/uk.png" lang="eng" />
        </div>
    )
}

export {
    LanguajeView
}