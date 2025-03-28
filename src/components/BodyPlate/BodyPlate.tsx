"use client"

import { cn } from "@/lib/utils"
import { useMainStore } from "@/Store/mainStore"
import { NavBar } from "../navBar/NavBar"

const BodyPlate = () =>{

  const { leftBarFullScreen } = useMainStore()

    return(
      <div className={cn("opacity-0 duration-300 max-h-[100vh] top-0", !leftBarFullScreen && "opacity-100 col-span-3 w-full h-[90hv] bg-[#333] z-10  overflow-hidden p-5 pl-10 mt-3 -ml-12 rounded border-undido-oscuro-unmutable")}>
        <NavBar/>
        <div className="mt-20">
        </div>
      </div>
    )
}

export {
    BodyPlate
}