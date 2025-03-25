"use client"

import { useMainStore } from "@/Store/mainStore"

const PageName = () =>{
    
    const {currentPage} = useMainStore()

    return(
        <p className="text-5xl">{currentPage}</p>
    )
    
}

export {
    PageName
} 