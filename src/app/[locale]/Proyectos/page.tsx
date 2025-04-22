import { ProjectCard } from "@/components";
import { iconName } from "@/components/DynamicIcon/DynamicIcon";

const proyectos: {
    title: string
    desc_short: string
    desc_long: string
    img: string
    inicio: Date
    fin?: Date
    tech: iconName[]
    url?: string
    github?: string
}[] = [
        {
            title: "Trendbas",
            desc_short: "Pagina de presentacion de productos para la empresa trendbas.",
            img: "/img/trendbas.png",
            inicio: new Date(2024, 12, 11),
            fin: new Date(2024, 12, 20),
            tech: ['react', 'next', 'ts'],
            desc_long: `### Titulo 
__el siguiente:__ es un ejemplo de como se trabajaria un markdown, aca viene a aparecer mas texto y acontinuacion una imagen
         `,
            url: 'https://trendbas.com/'

        }, {
            title: "portafolio",
            desc_short: "Pagina de presentacion de productos para la empresa trendbas.",
            img: "/img/face_chibi.png",
            inicio: new Date(2025, 4, 1),
            fin: new Date(2025, 4, 30),
            tech: ['react', 'next', 'ts'],
            desc_long: `
literal es el codigo sobre el que estamos trabajando en este momento o el que estas viendo pues de aqui es donde parte todo
#### este es un titulo
aca viene a aparecer mas texto y acontinuacion una ***imagen***
![img](/img/trendbas.png)
         `,
            url: 'https://portafolio-hikdul.vercel.app',
            github: 'https://github.com/hikdul/portafolio'

        },
        {
            title: "Asispass",
            desc_short: "Manejador  de marcaciones y tiempos de operacion y laborabilidad para multiples empresas",
            img: "/img/asispass.png",
            inicio: new Date(2023, 2, 15),
            tech: ['dotnet', 'csharp', 'aws'],
            desc_long: `este SAAS, esta cubierto por dos normativas de aceptacion del gobierno chileno y donde actualmente operan bajo 2 normal de aprobacion y bueno la verdad es que necesito mejorar tanto la redacion como la carga de datos segun el idioma.
la linea anterior  se ve mal
***title***`
        },
        {
            title: "Rusquito",
            desc_short: "MqTT broker writen on Rust",
            img: "/img/pr/rT.png",
            inicio: new Date(2024, 11, 10),
            tech: ['rust', 'aws'],
            desc_long: `este SAAS, esta cubierto por dos normativas de aceptacion del gobierno chileno y donde actualmente operan bajo 2 normal de aprobacion y bueno la verdad es que necesito mejorar tanto la redacion como la carga de datos segun el idioma.
la linea anterior  se ve mal
***title***`
        }

    ]


export default async function Proyectos() {


    return (
        <>
            <div className="">
                {proyectos && proyectos.map(x => <ProjectCard key={x.title} {...x} />)}
            </div>
            <div className="emptyArea mt-20 min-h-[10vh]"></div>
        </>
    )
}

