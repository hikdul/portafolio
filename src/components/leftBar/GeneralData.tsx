import { DataIconLB } from "./dataIconlb"
import { dataIconLBProps } from "./interface"

const dataFromIconLB: dataIconLBProps[] = [
    {
        name: "age",
        desc: "35",
        icon: "age",
    },
    {
        name: "location",
        desc: "Lima, Peru",
        icon: "location",
    },
    {
        name: "phone",
        desc: "931084717",
        icon: "phone",
    },
]

const  GeneralData = async() =>{


    return(<>
        {dataFromIconLB.map(x => (<DataIconLB {...x} key={x.name} />))}
    </>)
}

export {
    GeneralData
}