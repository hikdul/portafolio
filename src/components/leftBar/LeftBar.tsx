"use client"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMainStore } from "@/Store/mainStore";

const LeftBar = () => {

    const { leftBarFullScreen, toogleLeftBarFullScreen } = useMainStore()

    const onClickButton = () => {
        toogleLeftBarFullScreen()
    }

    return (

        <div className={cn("px-20 py-10 m-auto bg-[#333] text-white w-full z-50 duration-500", 
                leftBarFullScreen ? 
                "h-[100vh] max-h-[100vh]" : 
                "left-3 top-3 max-w-xs p-5 rounded z-20 overflow-hidden h-[95vh] mt-3 border-undido-oscuro-unmutable")}>
            <div className=" flex-nowrap justify-center items-center flex lg:flex-wrap lg:justify-start">
                <Image height={100} width={100} src={"/img/face.jpeg"} alt={"foto"} className={leftBarFullScreen ? "rounded-full felx items-center justify-center" : "m-auto rounded-xl"} />
                {leftBarFullScreen ?
                    (<h3 className="text-3xl ml-5 text-center flex justify-center items-center m-auto">
                        Hola, mi nombre es  <strong className={cn("text-[#0f0] font-bold text-3xl hover:text-[#000000] opacity-0 duration-1000", leftBarFullScreen && "opacity-100")}> Hector contreras</strong>; Software Development.
                    </h3>)
                    :
                    (<>
                        <strong className={cn("text-[#0f0] mt-5 font-bold text-3xl hover:text-[#000000] m-auto duration-500opacity-0 duration-1000", !leftBarFullScreen && "opacity-100")}>Hector contreras</strong>
                        <span className="text-center m-auto mt-2 font-light text-verde">Software Development</span>
                    </>)
                }
            </div>
            {leftBarFullScreen && (<>
                <p className="mt-1 text-center lg:text-left text-lg">
                    ¡Hola! Soy un desarrollador creativo con una mentalidad adaptable y un enfoque práctico para resolver problemas. Durante los últimos seis años, he trabajado en el desarrollo de sistemas, enfrentando desafíos bajo presión y asegurando altos estándares de calidad.
                </p>
                <p className="mt-1 text-center lg:text-left text-lg">
                    He liderado el desarrollo de sistemas completos, estando presente en mas del 80% de los proyectos en la empresa donde me ubico actualmente. Mi experiencia abarca desde la planificación hasta la implementación de cada sistema, lo que me ha permitido perfeccionar mis habilidades técnicas y mi capacidad para tomar decisiones críticas.
                </p>
                <p className="mt-1 text-center lg:text-left text-lg">
                    En AutomatismosLau mi tareas se basan principalmente es Asispass.com, una plataforma que optimiza y sintetiza el trabajo para <b>recursos humanos</b> que tiene la aprobación del Departamento del Trabajo de Chile, validando no solo mi capacidad técnica, tambien diversos elementos de seguridad y también bastante atención al detalle; cumplimiento asi varias normas exigentes de la ley del trabajo de ese pais.
                </p>
                <p className="mt-1 text-center lg:text-left text-lg">
                    Además de desarrollar software, disfruto trabajar en equipo y mentorizar a colegas con menos experiencia, ayudándolos a crecer profesionalmente. Mi enfoque colaborativo y paciente ha sido clave en el éxito de varios proyectos.
                </p>
                <p className="mt-1 text-center lg:text-left text-lg">
                    Me apasiona la resolución de problemas complejos y la mejora continua. Aunque mi educación formal esta incompleta, mi experiencia y dedicación hablan sobre un buen profesional. Siempre estoy listo para nuevos desafíos y oportunidades para innovar.
                </p>
            </>)}

            <div className={cn("group social-networks flex flex-nowrap justify-between my-3", leftBarFullScreen && "justify-start gap-5 items-center")}>
                <button  name="clik" className="p-3 border-undido-oscuro rounded-full" onClick={()=>{console.log('media clic')}} >
                    <Image src={"/icons/sm.svg"} width={40} height={40} alt={"Social Networds"} />
                </button>
                <button  name="clik" className="p-3 border-undido-oscuro rounded-full" onClick={()=>{console.log('media clic')}} >
                    <Image src={"/icons/x.svg"} width={40} height={40} alt={"Social Networds"}/>
                </button>
                <button  name="clik" className="p-3 border-undido-oscuro rounded-full" onClick={()=>{console.log('media clic')}} >
                    <Image src={"/icons/download.svg"} width={40} height={40} alt={"Social Networds"}/>
                </button>
            </div>
            {leftBarFullScreen && (
                <button type="button" className="z-50" onClick={onClickButton} name="fc_01">
                    <div className="flex flex-wrap items-end justify-end absolute bottom-8 right-14 ">
                        {/*<LightBulbIcon className="animate-bounce duration-200 text-[#000] hover:text-green-300" />*/}
                        scroll down
                    </div>
                </button>
            )}
        </div>
    )

}

export default LeftBar