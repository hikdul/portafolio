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
            desc_short: "Este landing lo desarrollé para un cliente que necesitaba mejorar su presencia en línea y comunicar de forma clara y visualmente llamativa todo lo que su empresa ofrece.",
            img: "/img/trendbas.png",
            inicio: new Date(2024, 12, 11),
            fin: new Date(2024, 12, 20),
            tech: ['react', 'next', 'ts'],
            desc_long: `Este landing lo desarrollé para un cliente que necesitaba mejorar su presencia en línea y comunicar de forma clara y visualmente llamativa todo lo que su empresa ofrece.

Aunque al principio buscaba un estilo clásico inspirado en otras webs, rápidamente noté que en realidad quería algo más moderno, pero sin saber cómo expresarlo. Ahí fue donde pude aportar con ideas propias en el diseño, estructura y experiencia visual del sitio.

### Tecnologías utilizadas

- **Framework**: React + Next.js
- **Estilos**: Tailwind CSS
- **Envío de formularios**: sin backend, mediante servicios de terceros para el envío de correos

### Aporte personal

Además del desarrollo, me encargué del diseño completo del sitio, definiendo la distribución de contenido, estilos visuales y comportamiento interactivo. El cliente participó especialmente en la redacción de los textos y selección de imágenes, lo que nos permitió construir una web que reflejara fielmente su visión de marca.

### Destacado visual: el carrusel inicial

Uno de los elementos que más disfruté implementar fue el carrusel de entrada. Me tomó tiempo afinar los detalles visuales y de comportamiento, pero el resultado logró captar inmediatamente la atención de los usuarios, tal como buscábamos.

> _Aquí puedes agregar una imagen del carrusel inicial:_

![Carrusel principal](/img/trendbas-carousel.png)

### Vista de producto

Otra parte que me gustó mucho fue el diseño de las vistas individuales de producto. Conseguí un balance entre lo visual y lo informativo, cuidando cada detalle en la presentación.

> _Aquí puedes insertar la imagen de una vista de producto:_

![Vista de producto](/img/trendbas-producto.png)

### Resultado

El cliente quedó satisfecho con el resultado y actualmente sigo trabajando con él en nuevas ideas. Esta experiencia me permitió no solo aplicar mis conocimientos técnicos, sino también entender mejor cómo guiar visualmente a un cliente hacia lo que realmente necesita, aunque no lo tenga claro al principio.

> _Puedes visitar el sitio en [trendbas.com](https://trendbas.com)_

         `,
            url: 'https://trendbas.com/'

        }, 
        {
            title: "Asispass",
            desc_short: "Software que desarrollé como parte del equipo de Automatismos Lau, orientado al control de asistencias y marcaciones del personal para empresas en Chile. La plataforma centraliza los datos de asistencia mediante dispositivos conectados en tiempo real.",
            img: "/img/asispass.png",
            inicio: new Date(2022, 6, 15),
            tech: ['dotnet', 'csharp', 'aws'],
            desc_long: `_Asispass_ es un software que desarrollé como parte del equipo de [Automatismos Lau LTDA](https://www.automatismoslau.cl/), orientado al control de asistencias y marcaciones del personal para empresas en Chile. La plataforma centraliza los datos de asistencia mediante dispositivos conectados en tiempo real, accesibles desde [asispass.com](https://asispass.com).

## ¿Qué hace Asispass especial?  

Este sistema está pensado para empresas que necesitan un control riguroso, confiable y seguro del tiempo trabajado por sus empleados. Sus principales características incluyen:

- **Marcaciones con biometría**: usando huella dactilar y reconocimiento facial.
- **Almacenamiento híbrido**: datos guardados tanto localmente en los dispositivos como en una base central en la nube.
- **Infraestructura robusta en AWS**, asegurando alta disponibilidad y escalabilidad.
- **Cumplimiento normativo en Chile**, validado por la Dirección del Trabajo.
- **Mineria**, mayormente nuestro clientes se ubican en el sector minero; el reto es su baja conexion web.

## Arquitectura técnica

Diseñé e implementé una infraestructura escalable y segura usando servicios clave de Amazon Web Services:

- **EC2**: para la ejecución del backend y tareas programadas.
- **RDS (PostgreSQL)**: como base de datos relacional centralizada.
- **Lambda**: para el procesamiento de eventos específicos como sincronización de datos y alertas.
- **S3**: para el almacenamiento de imágenes capturadas por los dispositivos biométricos y respaldos.

![Arquitectura Asispass](/img/da_asispass.png)

## Validación oficial en Chile

Como software que registra asistencia laboral, _Asispass_ fue sometido a un proceso de validación oficial por parte de la **Dirección del Trabajo de Chile**, obteniendo las siguientes resoluciones:

- **27-03-2023**: [ORD. N°429](https://www.dt.gob.cl/legislacion/1624/w3-article-123921.html)
- **2025**: En proceso de renovación de validación

## Evolución del proyecto

Este proyecto inició a mediados de 2022 y fue validado oficialmente en 2023. Desde entonces, he continuado con su mantenimiento, integrando nuevas funcionalidades y adaptaciones conforme a los cambios normativos y necesidades de los clientes. #


Aquí algunos datos de impacto del sistema:

- **Empresas activas**: almenos de **20**
- **Usuarios diarios**: aproximadamente **500**
- **Dispositivos conectados**: más de **30**
- **Tasa de disponibilidad**: **99%** mensual promedio


## Rol en el proyecto

Durante este desarrollo, participé activamente en:

- Diseño e implementación del backend.
- Deseño e implementacion del frontend.
- Configuración, mantenimiento y despliegue en AWS.
- Integración con dispositivos biométricos.
- Gestión de validaciones con la Dirección del Trabajo.
- Mantenimiento evolutivo y soporte técnico.

![Asispass UI](/img/asispass.png)
`

        },
        

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