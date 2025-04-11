import { ProjectCard } from "@/components";
import { iconName } from "@/components/DynamicIcon/DynamicIcon";

const proyectos:{
    title: string
    desc_short: string
    desc_long: string 
    img: string
    inicio: Date
    fin?: Date
    tech: iconName[]
}[] = [
    {
        title:"Trendbas",
        desc_short:"Pagina de presentacion de productos para la empresa trendbas.",
        img:"/img/trendbas.png", 
        inicio: new Date(20,12,2024),
        fin : new Date(11,12,2024),
        tech:[ 'react', 'next','ts'],
        desc_long: `### Titulo 
__el siguiente:__ es un ejemplo de como se trabajaria un markdown, aca viene a aparecer mas texto y acontinuacion una imagen
         `
       
    },{
        title:"Trendbas, Landing Page",
        desc_short:"Pagina de presentacion de productos para la empresa trendbas.",
        img:"/img/trendbas.png", 
        inicio: new Date(20,12,2024),
        fin : new Date(11,12,2024),
        tech:[ 'react', 'next','ts'],
        desc_long: `
> el siguiente es un ejemplo de como se trabajaria un markdown
#### este es un titulo
aca viene a aparecer mas texto y acontinuacion una imagen
         `
       
    },
    {
        title:"Asispass",
        desc_short:"Manejador  de marcaciones y tiempos de operacion y laborabilidad para multiples empresas",
        img:"/img/asispass.png", 
        inicio: new Date(20,12,2024),
        tech:['dotnet','csharp', 'aws'],
        desc_long:`este SAAS, esta cubierto por dos normativas de aceptacion del gobierno chileno y donde actualmente operan bajo 2 normal de aprobacion y bueno la verdad es que necesito mejorar tanto la redacion como la carga de datos segun el idioma.
la linea anterior  se ve mal
***title***`
    }
    
]


export default async function Proyectos() {
    
    
    return(
        <>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                {proyectos && proyectos.map(x => <ProjectCard key={x.title} {...x} />)}
            </div>
                <div className="emptyArea mt-20 min-h-[10vh]"></div>
        </>
    )
}

