import {FaMapLocation, FaGrav, FaPhone , FaGithub, FaLinkedin, FaFileArrowDown  } from "react-icons/fa6";

const iconMap = {
    location: FaMapLocation,
    age: FaGrav  ,
    phone: FaPhone,
    github: FaGithub,
    lid:FaLinkedin ,
    cv:FaFileArrowDown
    
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