import { FaMapLocation, FaGrav, FaPhone, FaGithub, FaLinkedin, FaFileArrowDown, FaAws, FaServer } from "react-icons/fa6";
import { PiFileCSharp } from "react-icons/pi";
import { BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiDotnet, DiJsBadge, DiPython, DiRust, DiNodejs, DiReact, DiRasberryPi } from "react-icons/di"
import nestI from '../../../public/icons/nestjs.svg'
import nextI from '../../../public/icons/nextjs.svg'
import Image from "next/image";
//IconType

const iconMap = {

    location: FaMapLocation,
    age: FaGrav,
    phone: FaPhone,
    github: FaGithub,
    lid: FaLinkedin,
    cv: FaFileArrowDown,
    dotnet: DiDotnet,
    csharp: PiFileCSharp,
    node: DiNodejs,
    react: DiReact,
    next: DiReact, //!: no esta el icono que se espera
    nest: DiNodejs, //!: no esta el icono que se espera
    js: DiJsBadge,
    ts: BiLogoTypescript,
    python: DiPython,
    rust: DiRust,
    aws: FaAws,
    vercel: CgVercel,
    server: FaServer,
    rasberry: DiRasberryPi,
}

type iconName = keyof typeof iconMap

interface DynamicIconProps {
    name: iconName
    className?: string
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {

    if (name === 'next')
        return <Image src={nextI} className={className} alt="next icon" width={50} height={50} />
    if (name === 'nest')
        return <Image src={nestI} className={className} alt="nest icon" width={50} height={50} />

    const IconComponent = iconMap[name]; //~: Obtiene el componente del mapa
    return IconComponent ? <IconComponent className={className} /> : null;
};

export {
    DynamicIcon,
    type iconName
}