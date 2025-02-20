"use client"
import Image from "next/image";
import { LightBulbIcon} from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils";
import { useMainStore } from "@/Store/mainStore";

const LeftBar = () => {

    const {leftBarFullScreen, toogleLeftBarFullScreen} = useMainStore()

    const onClickButton = () => {
        toogleLeftBarFullScreen()
    }

    return (
        <div className={cn("p-52 m-auto bg-stone-800 text-white w-full z-50 duration-500", leftBarFullScreen ? "h-[100vh] max-h-[100vh]" : "left-3 top-3 max-w-xs p-5 rounded z-20 overflow-hidden h-[95vh] mt-3")} >
            <div className=" flex-nowrap justify-center items-center flex lg:flex-wrap lg:justify-start">
                <Image height={100} width={100} src={"/img/face.jpeg"} alt={"foto"} className={leftBarFullScreen ?"rounded-full felx items-center justify-center" : "m-auto rouded"} />
                <h3 className={cn("text-3xl ml-5 text-center flex justify-center items-center",!leftBarFullScreen && " m-auto"  )}>{leftBarFullScreen ? "Hi mi name its hector, i am a full stack software Development." : "Hector Contreras"}</h3>
            </div>
            <p className="mt-1 text-center lg:text-left text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel earum assumenda provident quidem exercitationem aspernatur asperiores? Quisquam, facere earum cupiditate suscipit, repellat debitis eum optio nulla vero dolor incidunt.</p>
            <button type="button" onClick={onClickButton} name="fc_01">
                <div className="flex flex-wrap items-end justify-end absolute bottom-8 right-14 ">
                    <LightBulbIcon className="animate-bounce duration-200 text-green-500 hover:text-green-300" />
                    scroll down
                </div>
            </button>
        </div>
    )

}

export default LeftBar