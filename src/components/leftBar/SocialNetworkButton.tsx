"use Client"
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon"

interface props {
  icon: string
  url: string
  downloadFile?: boolean
}

const SocialNetworkButton = ({ icon, url, downloadFile }: props) =>{ 
  
  if(downloadFile)
    <a title="get HLCD cv" href="cv/cv.pdf" download="HectorLuisContrerasDiGirolamo_CV_2025.pdf" className="">
      <DynamicIcon name={icon as iconName} className="text-4xl bg-transparent hover:text-green-400  hover:text-5xl mx-3 p-1 rounded duration-300" />
    </a>
  return (
  <a title="social media" href={url} target="_blank" rel="noopener noreferrer" className="">
    <DynamicIcon name={icon as iconName} className="text-4xl bg-transparent hover:text-green-400  hover:text-5xl mx-3 p-1 rounded duration-300" />
  </a>
)}

export {
  SocialNetworkButton
}