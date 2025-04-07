import { ProjectCard } from "@/components";
import { technologies } from "@/Constants";

const proyectos:{
    title: string
    desc_short: string
    desc_long: string
    img: string
    inicio: Date
    fin?: Date
    tech: technologies[]
}[] = [
    {
        title:"Trendbas, Landing Page",
        desc_short:"Pagina de presentacion de productos para la empresa trendbas.",
        desc_long:"En este  proyecto muestro un clasico landing con ideas bastantes concretas donde se logra mostrar la realidad de lo que se espresa para esta empresa",
        img:"https://trendbas.com/img/logo.svg", 
        inicio: new Date(20,12,2024),
        fin : new Date(11,12,2024),
        tech:['react', 'next','ts'],
    },
    {
        title:"Asispass",
        desc_short:"Manejador  de marcaciones y tiempos de operacion y laborabilidad para multiples empresas",
        desc_long:"este SAAS, esta cubierto por dos normativas de aceptacion del gobierno chileno y donde actualmente operan bajo 2 normal de aprobacion y bueno la verdad es que necesito mejorar tanto la redacion como la carga de datos segun el idioma.",
        img:"https://asispass.com/img/logo.png", 
        inicio: new Date(20,12,2024),
        tech:['dotnet', 'csharp'],
    },
    {
        title:"Asispass cpy",
        desc_short:"Manejador  de marcaciones y tiempos de operacion y laborabilidad para multiples empresas",
        desc_long:"este SAAS, esta cubierto por dos normativas de aceptacion del gobierno chileno y donde actualmente operan bajo 2 normal de aprobacion y bueno la verdad es que necesito mejorar tanto la redacion como la carga de datos segun el idioma.",
        img:"https://asispass.com/img/logo.png", 
        inicio: new Date(20,12,2024),
        tech:['dotnet', 'csharp'],
    }
]


export default function Proyectos() {
    return(
            <div>
                {proyectos && proyectos.map(x => <ProjectCard key={x.title} {...x} />)}
                <div className="emptyArea mt-20 min-h-[10vh]"></div>
            </div>
            
    )
}

