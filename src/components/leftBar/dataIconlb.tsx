import { getTranslations } from "next-intl/server";
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon";

interface dataIconLBProps {
    name: string
    desc: string
    icon: string
}


const DataIconLB = async({ name, desc, icon }: dataIconLBProps) => {
    
    const t = await getTranslations('leftBar')
    
    return (
        <div className="group miniMeCard grid grid-cols-2 gap-2 border-2 rounded border-transparent hover:border-[#333] mx-1.5 hover:bg-green-400 duration-500   ">
            <DynamicIcon name={icon as iconName } className="text-5xl text-white p-1 ml-10 md:ml-3 hover:text-[#333] dark:hover:text-white self-center border-1 rounded bg-green-400 border-[#333] group-hover:bg-white group-hover:text-[#333] group-hover:dark:text-white group-hover:dark:bg-[#333] duration-500   "/> 
            <div className=" flex flex-col my-3">
                <span className="text-slate-500 text-sm">{t(name)}</span>
                {name === 'age' &&  <span className="text-lg">{desc} {t('ageC')}  </span> }
                {name !== 'age' && <span className="text-lg">{desc}  </span> }
            </div>
        </div>
    )
}

export {
    DataIconLB
}