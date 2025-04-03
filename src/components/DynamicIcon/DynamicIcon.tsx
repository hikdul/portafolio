import {FaMapLocation, FaGrav, FaPhone , FaGithub, FaLinkedin, FaFileArrowDown, FaAws  } from "react-icons/fa6";

import {DiDotnet, DiJsBadge, DiPython, DiRust, DiNodejs, DiReact, DiAws, DiRasberryPi } from "react-icons/di"

const iconMap = {
    location: FaMapLocation,
    age: FaGrav  ,
    phone: FaPhone,
    github: FaGithub,
    lid:FaLinkedin ,
    cv:FaFileArrowDown,
    dotnet: DiDotnet,
    csharp: DiDotnet, //?
    node: DiNodejs,
    react: DiReact,
    next: DiNodejs, //?
    nest: DiNodejs, //?
    js: DiJsBadge,
    ts: DiJsBadge, //?
    python: DiPython,
    rust: DiRust,
    aws: FaAws,
    vercel: DiAws, //?
    rasberry:DiRasberryPi,
}

type iconName = keyof typeof iconMap

interface DynamicIconProps{
    name:iconName
    className?:string
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent = iconMap[name]; // Obtiene el componente del mapa
  return IconComponent ? <IconComponent className={className} /> : null;
};

export {
    DynamicIcon,
    type iconName
}