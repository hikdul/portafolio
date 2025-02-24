
import { H1Icon, HomeIcon, BriefcaseIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { hIconProps } from "./interface"
import { HLink } from "./HLink"


const SIZE = 15

const navElement: hIconProps[] =
    [
        { title: "Home", icon: (<HomeIcon width={SIZE} className="z-40" height={SIZE} />), active: true },
        { title: "Proyectos", icon: (<BriefcaseIcon width={SIZE} className="z-40" height={SIZE} />) },
    ]

const NavBar = () => {

    return (<div className="min-h-2.5  fixed bottom-0 left-0 z-50 w-[80vw] md:min-h-2.5 md:top-3 md:left-[61.5vw]">
        <ul className="navigation relative max-w-[540px] h-24 flex justify-center items-center border-undido-oscuro-unmutable rounded-bl-none md:rounded-bl-4xl rounded-tl-4xl md:rounded-tl-none rounded-tr-4xl md:rounded-tr-none">
            {navElement && navElement.map(x => <HLink {...x} key={x.title} />)}
        </ul>
    </div>)
}


export {
    NavBar
}