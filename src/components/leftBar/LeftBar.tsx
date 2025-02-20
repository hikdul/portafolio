import Image from "next/image";
import { ShieldCheckIcon, ArrowDownIcon, BarsArrowDownIcon } from "@heroicons/react/24/outline"

const LeftBar = () =>{
    
    const onClickButton = () =>{ 
        console.log("clikc en boton")
    }
    
    return(
        <div className="p-52 m-auto bg-stone-800 text-white h-[100vh] w-[100vw]" >
            <div className=" flex-nowrap justify-center items-center flex lg:flex-wrap lg:justify-start">
                <Image height={100} width={100} src={"/img/face.jpeg"} alt={"foto"} className="rounded-full felx items-center justify-center" />
                <h3 className="text-3xl ml-5 text-center flex justify-center items-center">Hi mi name its hector, i am a full stack software Development.</h3>
            </div>
            <p className="mt-1 text-center lg:text-left text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae vel earum assumenda provident quidem exercitationem aspernatur asperiores? Quisquam, facere earum cupiditate suscipit, repellat debitis eum optio nulla vero dolor incidunt.</p>
            <div className="flex flex-wrap items-end justify-end absolute bottom-8 right-14 ">
                    <ArrowDownIcon className="text-stone-900 animate-bounce hover:text-green-500"/>
                    scroll down
            </div>
        </div>
    )
}

export default LeftBar