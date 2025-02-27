import { H1Icon } from "@heroicons/react/24/outline"


interface props{
    name: string
    desc: string
}

const DataIconLB = ({name, desc}:props) =>{
    return(
                <div className="miniMeCard flex flex-row justify-evenly">
                    <H1Icon width={30} />
                    <div className="flex flex-col my-3">
                        <span className="text-slate-500 text-sm">{name}</span>
                        <span className="text-lg">{desc}</span>
                    </div>
                </div>
    )
}

export {
    DataIconLB
}