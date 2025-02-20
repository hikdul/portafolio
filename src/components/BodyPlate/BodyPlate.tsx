"use client"

import { cn } from "@/lib/utils"
import { useMainStore } from "@/Store/mainStore"

const BodyPlate = () =>{

  const { leftBarFullScreen } = useMainStore()

    return(
      <div className={cn("opacity-0 duration-300", !leftBarFullScreen && "opacity-100 col-span-3 w-full h-full bg-slate-500 z-10 text-red-700 overflow-hidden p-5 pl-10 mt-3 -ml-12 rounded")}>
        <p className="">
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
        </p>
      </div>
    )
}

export {
    BodyPlate
}