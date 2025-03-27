"use client"
import { useMainStore } from "@/Store/mainStore"

const Loader = () => {

        const { loading } = useMainStore()

        if (!loading)
                return <></>

        return (
                <div className="z-50 fixed top-0 flex items-center justify-center bg-[#333333e8] w-[100vw] h-[100vh]">

                        <div className="relative w-[150px] h-[150px] rounded-[50%] bg-linear-to-r from-transparent to-green-400
                            before:absolute before:top-1.5 before:left-1.5 before:right-1.5 before:bottom-1.5 before:rounded-[50%] before:z-10 before:bg-[#333333d1]
                            after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-[50%] after:z-0 after:blur-xl  after:bg-green-400 after:bg-loader after:bg-linear-to-r after:from-transparent after:to-green-400
                            animate-spin"
                        >
                                
                        </div>
                </div>
        )

}

export default Loader
