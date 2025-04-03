import { getTranslations } from "next-intl/server"
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon"

interface props {
  title: string
  desc: string
  tech: string[]
}
const CardTT = async ({ title, desc, tech }: props) => {

  const t = await getTranslations('trabajoYtecnologias')

  return (

    <div className="group card border-t-0 borde-l-0 border-r-2 border-b-2 border-green-400  rounded-none rounded-br-lg p-1 w-full h-full min-h-[20vh] ">
      <div className="p-1 rounded duration-300">
        <div className="group-hover:font-extrabold font-bold my-3 group-hover:text-green-600  ">{title}</div>
        <div className="h-0.5 w-[40%] group-hover:w-[70%] duration-500 bg-green-400  "></div>
        <div className=" font-extralight group-hover:font-medium">
          <p>
            {t(desc)}
          </p>
        </div>
      </div>
      <div className=" w-full h-full my-3 flex justify-end gap-1">
        {tech && tech.map(x => <CardTTIcon icon={x} key={x} />)}
      </div>
    </div>
  )
}

const CardTTIcon = ({icon}:{icon:string}) =>{
  return(
    <DynamicIcon name={icon as iconName} className="text-5xl bg-transparent group-hover:text-green-400  hover:text-5xl mx-3 p-1 rounded duration-300" />
  )
}

export {
  CardTT
}