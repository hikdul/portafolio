import { ReactNode } from "react"
import { DynamicIcon, iconName } from "../DynamicIcon/DynamicIcon"



interface props{
    icon:string
    children: ReactNode | ReactNode[];
}

const CardIT = ({icon, children}:props) =>{
    
    return(
        <div className="group font-extralight hover:font-medium duration-150 ">
          <div className="h-0.5 w-[0%] group-hover:w-[60%] duration-500 bg-green-400 mb-3 "></div>
          <DynamicIcon name={icon as iconName} className="text-8xl bg-transparent text-green-400 mx-3 p-1 rounded duration-300" />
          <article>
            {children}
          </article>
          <div className="h-0.5 w-[0%] group-hover:w-[90%] duration-500 bg-green-400  mt-3"></div>
        </div>
    )
}

export {
    CardIT
}