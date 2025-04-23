import { ProjectCard } from "@/components";
import { iconName } from "@/components/DynamicIcon/DynamicIcon";
import { getLocale } from "next-intl/server";

const proyectos: {
    title: string
    desc_short_en: string
    desc_long_en: string
    desc_short_it: string
    desc_long_it: string
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
            desc_short_en: "I developed this landing page for a client who needed to improve their online presence and clearly, visually communicate everything their company offers.",
            desc_short_it: "Ho sviluppato questa landing page per un cliente che aveva bisogno di migliorare la sua presenza online e comunicare in modo chiaro e visivamente accattivante tutto ciò che offre la sua azienda."
            ,
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
            desc_long_en: `I developed this landing page for a client who needed to improve their online presence and clearly, visually showcase everything their company offers.

Although they initially wanted a classic style inspired by other websites, I quickly noticed they actually wanted something more modern—but didn’t quite know how to express it. That’s where I was able to contribute with my own ideas in the design, structure, and visual experience of the site.

### Technologies used

- **Framework**: React + Next.js  
- **Styles**: Tailwind CSS  
- **Form handling**: without a backend, using third-party services for email delivery

### Personal contribution

Besides development, I was in charge of the site’s full design, defining content layout, visual styles, and interactive behavior. The client was especially involved in writing the texts and selecting images, which allowed us to build a site that truly reflected their brand vision.

### Visual highlight: the opening carousel

One of the elements I most enjoyed implementing was the opening carousel. It took some time to fine-tune its visual details and behavior, but the result captured users’ attention immediately—just as we intended.

> _Here you can add an image of the opening carousel:_

![Main carousel](/img/trendbas-carousel.png)

### Product view

Another part I really liked was designing the individual product views. I managed to strike a balance between visual appeal and information, paying attention to every detail in the presentation.

> _Here you can insert an image of a product view:_

![Product view](/img/trendbas-producto.png)

### Result

The client was happy with the result, and I’m currently working with them on new ideas. This experience allowed me not only to apply my technical knowledge but also to better understand how to visually guide a client toward what they truly need—even when they’re not sure at first.

> _You can visit the site at [trendbas.com](https://trendbas.com)_

            `,
            desc_long_it: `Ho sviluppato questa landing page per un cliente che aveva bisogno di migliorare la sua presenza online e comunicare in modo chiaro e visivamente accattivante tutto ciò che offre la sua azienda.

Anche se inizialmente cercava uno stile classico ispirato ad altri siti web, ho capito rapidamente che in realtà voleva qualcosa di più moderno, ma non sapeva come esprimerlo. È stato lì che ho potuto contribuire con idee personali nel design, nella struttura e nell’esperienza visiva del sito.

### Tecnologie utilizzate

- **Framework**: React + Next.js  
- **Stili**: Tailwind CSS  
- **Invio dei moduli**: senza backend, tramite servizi di terze parti per l’invio delle email

### Contributo personale

Oltre allo sviluppo, mi sono occupato dell’intero design del sito, definendo la distribuzione dei contenuti, gli stili visivi e il comportamento interattivo. Il cliente ha partecipato in particolare alla scrittura dei testi e alla selezione delle immagini, il che ci ha permesso di costruire un sito che riflettesse fedelmente la sua visione del brand.

### Punto forte visivo: il carosello iniziale

Uno degli elementi che ho più apprezzato nell’implementazione è stato il carosello d’ingresso. Ci è voluto del tempo per perfezionare i dettagli visivi e il comportamento, ma il risultato ha catturato subito l’attenzione degli utenti, proprio come volevamo.

> _Qui puoi aggiungere un’immagine del carosello iniziale:_

![Carosello principale](/img/trendbas-carousel.png)

### Vista del prodotto

Un’altra parte che mi è piaciuta molto è stata la progettazione delle viste individuali dei prodotti. Sono riuscito a trovare un equilibrio tra aspetto visivo e informazioni, curando ogni dettaglio della presentazione.

> _Qui puoi inserire l’immagine di una vista del prodotto:_

![Vista del prodotto](/img/trendbas-producto.png)

### Risultato

Il cliente è rimasto soddisfatto del risultato e attualmente sto continuando a lavorare con lui su nuove idee. Questa esperienza mi ha permesso non solo di applicare le mie competenze tecniche, ma anche di capire meglio come guidare visivamente un cliente verso ciò di cui ha realmente bisogno, anche se inizialmente non ne è consapevole.

> _Puoi visitare il sito su [trendbas.com](https://trendbas.com)_

            `,
            url: 'https://trendbas.com/'

        },
        {
            title: "Asispass",
            desc_short: "Software que desarrollé como parte del equipo de Automatismos Lau, orientado al control de asistencias y marcaciones del personal para empresas en Chile. La plataforma centraliza los datos de asistencia mediante dispositivos conectados en tiempo real.",
            desc_short_en: "Software I developed as part of the Automatismos Lau team, focused on attendance and time-tracking control for employees in companies across Chile. The platform centralizes attendance data through real-time connected devices.",
            desc_short_it: "Software che ho sviluppato come parte del team di Automatismos Lau, orientato al controllo delle presenze e delle timbrature del personale per aziende in Cile. La piattaforma centralizza i dati di presenza tramite dispositivi connessi in tempo reale.",
            img: "/img/asispass.png",
            inicio: new Date(2022, 6, 15),
            tech: ['dotnet', 'csharp', 'aws'],
            desc_long_en: `_Asispass_ is a software I developed as part of the [Automatismos Lau LTDA](https://www.automatismoslau.cl/) team, focused on attendance and time-tracking control for employees in Chilean companies. The platform centralizes attendance data through real-time connected devices, accessible from [asispass.com](https://asispass.com).

## What makes Asispass special?

This system is designed for companies that require a rigorous, reliable, and secure control of employee work hours. Its main features include:

- **Biometric clock-ins**: using fingerprint and facial recognition.
- **Hybrid storage**: data stored both locally on devices and in a centralized cloud database.
- **Robust AWS infrastructure**, ensuring high availability and scalability.
- **Regulatory compliance in Chile**, validated by the Labor Directorate.
- **Mining sector focus**, most of our clients are in mining, where poor connectivity is a challenge.

## Technical architecture

I designed and implemented a scalable and secure infrastructure using key Amazon Web Services:

- **EC2**: for backend execution and scheduled tasks.
- **RDS (PostgreSQL)**: as the centralized relational database.
- **Lambda**: for processing specific events such as data synchronization and alerts.
- **S3**: for storing images captured by biometric devices and backups.

![Asispass Architecture](/img/da_asispass.png)

## Official validation in Chile

As a software for labor attendance tracking, _Asispass_ went through an official validation process by the **Chilean Labor Directorate**, obtaining the following resolutions:

- **27-03-2023**: [ORD. N°429](https://www.dt.gob.cl/legislacion/1624/w3-article-123921.html)
- **2025**: Renewal process in progress

## Project evolution

This project began in mid-2022 and was officially validated in 2023. Since then, I’ve continued its maintenance, integrating new features and adjustments according to regulatory changes and client needs.

Here are some key impact metrics:

- **Active companies**: at least **20**
- **Daily users**: approximately **500**
- **Connected devices**: more than **30**
- **Uptime rate**: **99%** monthly average

## Role in the project

Throughout the development, I was actively involved in:

- Backend design and implementation.
- Frontend design and implementation.
- AWS configuration, maintenance, and deployment.
- Integration with biometric devices.
- Management of validations with the Labor Directorate.
- Evolutionary maintenance and technical support.

![Asispass UI](/img/asispass.png)

            `,
            desc_long_it: `_Asispass_ è un software che ho sviluppato come parte del team di [Automatismos Lau LTDA](https://www.automatismoslau.cl/), orientato al controllo delle presenze e delle timbrature del personale per aziende in Cile. La piattaforma centralizza i dati di presenza tramite dispositivi connessi in tempo reale, accessibili da [asispass.com](https://asispass.com).

## Cosa rende speciale Asispass?

Questo sistema è pensato per le aziende che necessitano di un controllo rigoroso, affidabile e sicuro del tempo lavorato dai dipendenti. Le sue caratteristiche principali includono:

- **Timbrature biometriche**: con impronta digitale e riconoscimento facciale.
- **Archiviazione ibrida**: dati memorizzati localmente nei dispositivi e anche in un database centrale nel cloud.
- **Infrastruttura robusta su AWS**, che garantisce alta disponibilità e scalabilità.
- **Conformità normativa in Cile**, validata dalla Direzione del Lavoro.
- **Settore minerario**, la maggior parte dei nostri clienti è nel settore minerario, dove la connettività è limitata.

## Architettura tecnica

Ho progettato e implementato un'infrastruttura scalabile e sicura utilizzando i principali servizi di Amazon Web Services:

- **EC2**: per l'esecuzione del backend e dei compiti programmati.
- **RDS (PostgreSQL)**: come database relazionale centralizzato.
- **Lambda**: per l'elaborazione di eventi specifici come la sincronizzazione dei dati e gli avvisi.
- **S3**: per l'archiviazione delle immagini catturate dai dispositivi biometrici e dei backup.

![Architettura Asispass](/img/da_asispass.png)

## Validazione ufficiale in Cile

Essendo un software per la registrazione delle presenze lavorative, _Asispass_ ha superato un processo di validazione ufficiale da parte della **Direzione del Lavoro del Cile**, ottenendo le seguenti risoluzioni:

- **27-**

            `,
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

    const locale = await getLocale()


    return (
        <>
            <h1>{locale}</h1>
            <div className="">
                {proyectos && proyectos.map(x => <ProjectCard locale={locale} key={x.title} {...x} />)}
            </div>
            <div className="emptyArea mt-20 min-h-[10vh]"></div>
        </>
    )
}