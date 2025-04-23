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
            title: "ParkingPass",
            desc_short: "control de ingreso vehicular en estacionamientos. Su objetivo principal es registrar tiempos de entrada y salida de vehículos, y calcular cobros exactos según las normativas vigentes en cada país donde opera: Chile y Perù",
            desc_short_en: "Vehicle access control in parking lots. Its main goal is to register vehicle entry and exit times, and calculate accurate fees according to the current regulations in each country where it operates: Chile and Peru",
            desc_short_it: "Controllo dell’accesso veicolare nei parcheggi. Il suo obiettivo principale è registrare i tempi di entrata e uscita dei veicoli e calcolare addebiti precisi secondo le normative vigenti in ciascun paese in cui opera: Cile e Perù",
            img: "/img/parkingpass.png",
            inicio: new Date(2022, 6, 15),
            tech: ['dotnet', 'csharp', 'react'],
            desc_long: `
            
**Parking Pass** es un sistema que desarrollé desde cero para el control de ingreso vehicular en estacionamientos. Su objetivo principal es registrar tiempos de entrada y salida de vehículos, y calcular cobros exactos según las normativas vigentes en cada país donde opera: **Chile** y **Perú**.

### Dos versiones según el contexto

El sistema cuenta con dos versiones principales, pensadas para adaptarse a distintos presupuestos y necesidades:

- **Versión ligera**: Usa una simple Raspberry Pi y un router. Permite manejar entradas/salidas directamente desde el software con mínima automatización, ideal para estacionamientos pequeños o con una sola vía de acceso.
- **Versión robusta**: Utiliza un servidor local y controladoras conectadas por red cableada. Es completamente automático y más escalable para instalaciones grandes.

### Mi rol en el proyecto

Me encargué del desarrollo completo: backend, frontend, lógica de dispositivos, comunicación entre sistemas y optimización de rendimiento. No estuve involucrado directamente en la instalación física de campo, pero el resto del sistema fue completamente diseñado y programado por mí.

### Retos técnicos y soluciones

- **Lectura de patentes**: Para integrar cámaras que envían imágenes vía FTP, desarrollé una lógica eficiente para gestionar la recepción de datos y su almacenamiento.
- **Transacciones en tiempo real**: Optimizamos el uso de espacio e imágenes, usando tareas paralelas para lograr una respuesta casi inmediata.
- **Control desde dispositivos económicos**: En la versión ligera, logré operar barreras y funcionalidades desde una Raspberry Pi, reduciendo significativamente los costos de implementación.

### Funcionalidades destacadas

- Lectura de **patentes vehiculares** mediante cámaras externas
- Generación e impresión de **códigos QR** para accesos temporales
- Control mediante **lectores RFID** (tags, tarjetas) o incluso **biometría**
- Soporte para múltiples tipos de ingreso: automático, manual, por invitación, etc.

> Para mí, lo más innovador fue lograr controlar todo esto desde un dispositivo tan simple como una Raspberry Pi.

### Arquitectura del sistema

- **Backend**: .NET
- **Frontend**: React con Vite
- **Base de datos**: SQL Server
- **Controladoras**: Escritas en Python, C# y Rust
- **Dispositivos físicos**: cámaras FTP, lectores biométricos, RFID y barreras físicas

![parkingpass arquitectura](/img/parkingpass_arq.png)

### En uso real

El sistema se encuentra operativo en múltiples instalaciones. Algunos ejemplos:

- _SOUMA Lima, Vignette Collection_ en Perú con entre **500 a 600 visitantes diarios**
- _Parque De La Amistad Surco_ en Perú con **más de 1000 vehículos al día**
- Diversos estacionamientos más pequeños, con menos de 100 ingresos diarios
- existen otras instalaciones realizadas en **Chile**, pero no dispongo de esa informacion ya que no trabajo en esa locacion.



            `,
            desc_long_en: `
            **Parking Pass** is a system I developed from scratch to control vehicle access in parking lots. Its main goal is to register entry and exit times and calculate accurate fees according to the current regulations in each country where it operates: **Chile** and **Peru**.


### Two versions based on context

The system features two main versions, designed to fit different budgets and needs:

- **Lightweight version**: Uses a simple Raspberry Pi and a router. It allows handling entries/exits directly from the software with minimal automation—ideal for small parking lots or locations with a single access point.
- **Robust version**: Uses a local server and wired network-connected controllers. It is fully automatic and more scalable for larger installations.

### My role in the project

I was in charge of the complete development: backend, frontend, device logic, system communication, and performance optimization. I wasn’t directly involved in the on-site installation, but the entire system was fully designed and coded by me.

### Technical challenges and solutions

- **License plate recognition**: To integrate cameras sending images via FTP, I developed an efficient logic to manage data reception and storage.
- **Real-time transactions**: We optimized space and image handling, using parallel tasks to achieve near-instant responses.
- **Control with affordable devices**: In the lightweight version, I managed to operate barriers and features from a Raspberry Pi, significantly reducing implementation costs.

### Key features

- **Vehicle license plate** reading through external cameras
- Generation and printing of **QR codes** for temporary access
- Control via **RFID readers** (tags, cards) or even **biometrics**
- Support for multiple access types: automatic, manual, by invitation, etc.

> For me, the most innovative part was achieving all this from such a simple device like a Raspberry Pi.

### System architecture

- **Backend**: .NET  
- **Frontend**: React with Vite  
- **Database**: SQL Server  
- **Controllers**: Written in Python, C# and Rust  
- **Hardware devices**: FTP cameras, biometric readers, RFID, and physical barriers

![parkingpass architecture](/img/parkingpass_arq.png)

### Real-world usage

The system is currently running in multiple facilities. Some examples:

- _SOUMA Lima, Vignette Collection_ in Peru with **500 to 600 daily visitors**
- _Parque De La Amistad Surco_ in Peru with **over 1000 vehicles per day**
- Various smaller parking lots with fewer than 100 daily entries
- Other installations exist in **Chile**, but I don’t have that information since I don’t work at that location.

            `,
            desc_long_it: `
**Parking Pass** è un sistema che ho sviluppato da zero per il controllo dell’accesso veicolare nei parcheggi. Il suo obiettivo principale è registrare i tempi di entrata e uscita dei veicoli e calcolare gli addebiti esatti in base alle normative vigenti in ciascun paese in cui opera: **Cile** e **Perù**.

### Due versioni in base al contesto

Il sistema ha due versioni principali, pensate per adattarsi a diversi budget ed esigenze:

- **Versione leggera**: Utilizza un semplice Raspberry Pi e un router. Consente di gestire entrate/uscite direttamente dal software con automazione minima, ideale per piccoli parcheggi o con un solo punto di accesso.
- **Versione robusta**: Utilizza un server locale e controllori collegati via rete cablata. È completamente automatico e più scalabile per installazioni più grandi.

### Il mio ruolo nel progetto

Mi sono occupato dello sviluppo completo: backend, frontend, logica dei dispositivi, comunicazione tra sistemi e ottimizzazione delle prestazioni. Non ho partecipato direttamente all’installazione fisica in loco, ma il resto del sistema è stato completamente progettato e programmato da me.

### Sfide tecniche e soluzioni

- **Lettura delle targhe**: Per integrare telecamere che inviano immagini via FTP, ho sviluppato una logica efficiente per la gestione della ricezione e dell’archiviazione dei dati.
- **Transazioni in tempo reale**: Abbiamo ottimizzato l’uso dello spazio e delle immagini, utilizzando attività parallele per ottenere una risposta quasi immediata.
- **Controllo con dispositivi economici**: Nella versione leggera, sono riuscito a gestire barriere e funzionalità tramite un Raspberry Pi, riducendo significativamente i costi di implementazione.

### Funzionalità principali

- Lettura delle **targhe veicolari** tramite telecamere esterne
- Generazione e stampa di **codici QR** per accessi temporanei
- Controllo tramite **lettori RFID** (tag, tessere) o anche **biometria**
- Supporto per vari tipi di accesso: automatico, manuale, su invito, ecc.

> Per me, la parte più innovativa è stata riuscire a controllare tutto questo da un dispositivo così semplice come un Raspberry Pi.

### Architettura del sistema

- **Backend**: .NET  
- **Frontend**: React con Vite  
- **Database**: SQL Server  
- **Controller**: Scritti in Python, C# e Rust  
- **Dispositivi fisici**: telecamere FTP, lettori biometrici, RFID e barriere fisiche

![parkingpass architecture](/img/parkingpass_arq.png)

### In uso reale

Il sistema è attualmente operativo in varie strutture. Alcuni esempi:

- _SOUMA Lima, Vignette Collection_ in Perù con **500–600 visitatori giornalieri**
- _Parque De La Amistad Surco_ in Perù con **oltre 1000 veicoli al giorno**
- Diversi parcheggi più piccoli, con meno di 100 ingressi giornalieri
- Esistono altre installazioni in **Cile**, ma non dispongo di queste informazioni poiché non lavoro in quella sede.

            `,
        },
        {

            title: "Cloud Control Pass",
            desc_short: "servicio en la nube que extiende las capacidades de la aplicación **ControlPass**, un sistema de **control de accesos físicos** (como portones, barreras vehiculares, torniquetes, etc.) que tradicionalmente se instalaba de forma local en las instalaciones de los clientes.",
            desc_short_en:"cloud-based service that extends the capabilities of the **ControlPass** application, a **physical access control** system (such as gates, vehicle barriers, turnstiles, etc.) that was traditionally installed locally at client facilities.",
            desc_short_it:"servizio cloud che estende le funzionalità dell'applicazione **ControlPass**, un sistema di **controllo degli accessi fisici** (come cancelli, barriere veicolari, tornelli, ecc.) tradizionalmente installato localmente presso le sedi dei clienti.",
            img: "/img/cloudcontrolpass.png",
            url: "https://cloudcontrolpass.com",
            inicio: new Date(2020, 11, 1),
            fin: new Date(2020,12,10),
            tech: ['dotnet'],
            desc_long: `🌩**Cloud Control Pass** es un servicio en la nube que extiende las capacidades de la aplicación **ControlPass**, un sistema de **control de accesos físicos** (como portones, barreras vehiculares, torniquetes, etc.) que tradicionalmente se instalaba de forma local en las instalaciones de los clientes.

---

## 🧩 Contexto y necesidad

Inicialmente, cada cliente usaba *ControlPass* de manera aislada y local. Sin embargo, muchos comenzaron a requerir acceso remoto a sus sistemas desde una **aplicación móvil**, para facilitar el control y monitoreo desde cualquier lugar.

Aquí surgió un reto importante:  
Cada cliente podía tener **una o más instalaciones independientes**, cada una con su propia base de datos y servidor. Era necesario crear una solución que permitiera a los usuarios móviles:

- Acceder a múltiples servidores.
- Visualizar solo los servicios autorizados.
- Verificar la disponibilidad del sistema remoto.
- Interactuar con sus instalaciones en tiempo real.

---

## 🛠️ Mi rol y contribuciones

Yo fui el responsable del desarrollo del servicio **Cloud Control Pass**, una capa de comunicación y orquestación desarrollada en:

- **.NET Core 3.1**
- **SQL Server** como base de datos

Este servicio intermedia entre la app móvil y los servidores locales, encargándose de:

- Verificar credenciales de acceso.
- Listar los servidores disponibles para el usuario.
- Confirmar la disponibilidad en línea de cada servidor mediante un **endpoint tipo healthcheck**.
- Enviar solo la información final a la app móvil.

---

## 🔐 Seguridad

El sistema utiliza **tokens de autenticación** en dos niveles:

- Un token de acceso desde la app móvil hacia Cloud Control Pass.
- Otro token interno para que Cloud Control Pass se comunique con cada servidor local.

El tráfico está restringido y monitoreado desde Cloud Control Pass, que se encarga de toda la validación.

---

## ☁️ Infraestructura

- Desplegado en **AWS EC2**.
- Accesible mediante un subdominio del cliente:  
  {subdominio}.{dominio}.{ext}
- Cuenta con **certificados SSL** para cifrado HTTPS.

---

## ⚙️ Desafíos técnicos

- La integración con servidores locales fue compleja debido a **NATs, firewalls, y puertos cerrados**.
- Algunos clientes tenían problemas de **conectividad o latencia**, que requerían soluciones personalizadas.
- El sistema debía escalar aunque el uso fuera relativamente bajo (**~200 usuarios activos**), lo cual permitió mantener una arquitectura simple pero robusta.

---

## 💬 Experiencia personal

> Este proyecto fue mi primer acercamiento a **.NET**.  
> Gracias a este desarrollo, conseguí el empleo que conservo hasta hoy, por lo que le tengo un aprecio especial. Empleo que me ofrecieron un par de meses despues de entregar este producto. 
> Fue un gran desafío inicial, pero también mi puerta de entrada al trabajo en el grupo ***Ferrocorp*** 

---

## 🚀 Resultados

- Clientes pueden acceder a sus sistemas de acceso desde cualquier lugar.
- Se eliminó la necesidad de configuraciones individuales complejas por parte del usuario final.
- La arquitectura permite escalar el sistema fácilmente si el número de clientes aumenta.


            `,
            desc_long_en: `🌩️ **Cloud Control Pass** is a cloud-based service that extends the capabilities of the **ControlPass** application, a **physical access control** system (such as gates, vehicle barriers, turnstiles, etc.) that was traditionally installed locally at client facilities.

---

## 🧩 **Context and Need**

Initially, each client used *ControlPass* in an isolated, local setup. However, many began requiring remote access to their systems through a **mobile app**, to facilitate control and monitoring from anywhere.

This introduced a significant challenge:  
Each client could have **one or more independent installations**, each with its own database and server. A solution was needed that would allow mobile users to:

- Access multiple servers.
- View only the services they are authorized for.
- Check the availability of remote systems.
- Interact with their installations in real-time.

---

## 🛠️ **My Role and Contributions**

I was responsible for the development of the **Cloud Control Pass** service, a communication and orchestration layer built using:

- **.NET Core 3.1**
- **SQL Server** as the database

This service acts as an intermediary between the mobile app and the local servers, handling:

- Access credential verification.
- Listing available servers for each user.
- Confirming online availability of each server through a **healthcheck endpoint**.
- Sending only the final information to the mobile app.

---

## 🔐 **Security**

The system uses **authentication tokens** at two levels:

- An access token from the mobile app to Cloud Control Pass.
- An internal token for Cloud Control Pass to communicate with each local server.

All traffic is restricted and monitored by Cloud Control Pass, which handles all validation.

---

## ☁️ **Infrastructure**

- Deployed on **AWS EC2**.
- Accessible via a client-specific subdomain:  
  *subdomain.domain.ext*
- Equipped with **SSL certificates** for HTTPS encryption.

---

## ⚙️ **Technical Challenges**

- Integration with local servers was complex due to **NATs, firewalls, and closed ports**.
- Some clients faced **connectivity or latency issues**, requiring custom solutions.
- Although the system had relatively low usage (**~200 active users**), it needed to scale — which allowed us to keep the architecture simple yet robust.

---

## 💬 **Personal Experience**

> This project was my first experience with **.NET**.  
> Thanks to this development, I landed the job I still have today — a position I was offered a couple of months after delivering this product.  
> It was a significant initial challenge, but also my entry point into working at ***Ferrocorp***.

---

## 🚀 **Results**

- Clients can now access their access control systems from anywhere.
- The need for complex individual user-side configurations was eliminated.
- The architecture allows the system to scale easily if the number of clients increases.

            `,
            desc_long_it: `🌩️ **Cloud Control Pass** è un servizio cloud che estende le funzionalità dell'applicazione **ControlPass**, un sistema di **controllo degli accessi fisici** (come cancelli, barriere veicolari, tornelli, ecc.) tradizionalmente installato localmente nelle strutture dei clienti.

---

## 🧩 **Contesto e Necessità**

Inizialmente, ogni cliente utilizzava *ControlPass* in modo isolato e locale. Tuttavia, molti hanno iniziato a richiedere l’accesso remoto ai loro sistemi tramite un’**app mobile**, per facilitare il controllo e il monitoraggio da qualsiasi luogo.

Questo ha presentato una sfida importante:  
Ogni cliente poteva avere **una o più installazioni indipendenti**, ciascuna con il proprio database e server. Era necessario creare una soluzione che permettesse agli utenti mobili di:

- Accedere a più server.
- Visualizzare solo i servizi autorizzati.
- Verificare la disponibilità del sistema remoto.
- Interagire in tempo reale con le proprie installazioni.

---

## 🛠️ **Il Mio Ruolo e Contributo**

Sono stato responsabile dello sviluppo del servizio **Cloud Control Pass**, uno strato di comunicazione e orchestrazione sviluppato con:

- **.NET Core 3.1**
- **SQL Server** come database

Questo servizio funge da intermediario tra l'app mobile e i server locali, occupandosi di:

- Verificare le credenziali di accesso.
- Elencare i server disponibili per ogni utente.
- Confermare la disponibilità online di ogni server tramite un **endpoint healthcheck**.
- Inviare solo le informazioni finali all’app mobile.

---

## 🔐 **Sicurezza**

Il sistema utilizza **token di autenticazione** su due livelli:

- Un token di accesso dall'app mobile verso Cloud Control Pass.
- Un altro token interno per la comunicazione tra Cloud Control Pass e ciascun server locale.

Tutto il traffico è limitato e monitorato da Cloud Control Pass, che si occupa di tutta la validazione.

---

## ☁️ **Infrastruttura**

- Distribuito su **AWS EC2**.
- Accessibile tramite un sottodominio del cliente:  
  sottodominio.dominio.ext
- Dotato di **certificati SSL** per la crittografia HTTPS.

---

## ⚙️ **Sfide Tecniche**

- L'integrazione con i server locali è stata complessa a causa di **NAT, firewall e porte chiuse**.
- Alcuni clienti hanno avuto problemi di **connettività o latenza**, che hanno richiesto soluzioni personalizzate.
- Anche se l’utilizzo era relativamente basso (**~200 utenti attivi**), il sistema doveva essere scalabile — il che ha permesso di mantenere un’architettura semplice ma robusta.

---

## 💬 **Esperienza Personale**

> Questo progetto è stato il mio primo approccio a **.NET**.  
> Grazie a questo sviluppo, ho ottenuto il lavoro che tuttora conservo — una posizione che mi è stata offerta pochi mesi dopo la consegna del prodotto.  
> È stata una grande sfida iniziale, ma anche la mia porta d’ingresso al lavoro nel gruppo ***Ferrocorp***.

---

## 🚀 **Risultati**

- I clienti possono ora accedere ai loro sistemi di controllo accessi da qualsiasi luogo.
- È stata eliminata la necessità di configurazioni individuali complesse da parte dell'utente finale.
- L'architettura consente al sistema di scalare facilmente se il numero di clienti aumenta.

            `
        },
        {
            title: "Rhinap",
            desc_short: "Historial de instalacion y mantenimiento de equipos",
            desc_short_en:"keyPup is a comprehensive digital checklist and vehicle control solution, designed for mining operations. It automates vehicle verification before starting the workday and blocks its use if the process is not completed correctly. With a focus on traceability, security, and remote control, keyPup enhances fleet operations in demanding environments.", 
            desc_short_it: "keyPup è una soluzione completa di checklist digitale e controllo veicolare, progettata per operazioni minerarie. Automatizza la verifica dei veicoli prima di iniziare la giornata lavorativa e blocca il loro utilizzo se il processo non viene completato correttamente. Con un focus sulla tracciabilità, la sicurezza e il controllo remoto, keyPup migliora l'operazione delle flotte in ambienti esigenti.",
            img: "/img/rhinap.png",
            url: "https://rinapp.svg",
            inicio: new Date(2021, 11, 25),
            fin: new Date(2022,5,30),
            tech: ['dotnet', 'csharp', 'rasberry'],
            desc_long: `

**Rinap** es una plataforma destinada a gestionar el historial de instalación, mantenimientos y reparaciones de equipos en diversas industrias, tales como:

🔹 Portones  
🔹 Cortinas  
🔹 Puentes grúa  
🔹 Barreras vehiculares  
🔹 Torniquetes de acceso peatonal  
🔹 Bolardos automáticos  

Este sistema fue desarrollado para abordar el desafío de llevar un control efectivo del mantenimiento, especialmente en empresas con grandes cantidades de equipos.

🎯 **Objetivo:** Facilitar la gestión de mantenimiento para grandes clientes corporativos, mejorar la eficiencia operativa y reducir el riesgo de fallas o accidentes.

---

## ⚙️ **Funcionalidades Principales**
- 🗃️ **Historial completo** desde la instalación hasta cada mantenimiento.
- 🔔 **Alertas automáticas** para mantenimientos preventivos.
- 🚨 **Solicitudes de emergencia** para mantenimientos correctivos no planificados.
- ⚠️ **Alertas en tiempo real** por averías o accidentes.
- 🧩 **Gestión de repuestos**, seguimiento de piezas cambiadas en cada intervención.
- 🧠 **Cálculo automático** de frecuencias de mantenimiento según el entorno (arena, polvo, temperatura, etc).
- 📊 **Reportes bajo demanda** exportables en PDF y Excel.

---

## 👥 **Usuarios del Sistema**
- 👷‍♂️ **Técnicos de Mantenimiento:** Ejecutan y registran tareas de mantenimiento.
- 🧑‍💼 **Jefes de Campo:** Verifican la veracidad de los reportes generados.
- 🏢 **Administradores del Cliente:** Gestionan usuarios y visualizan toda la actividad y reportes.
- 🔐 **Administrador del Sistema (interno):** Crea, edita y gestiona datos generales y clientes.

---

## 🏗️ **Arquitectura y Tecnología**
- 💻 **Backend:** .NET MVC  
- 🗄️ **Base de datos:** SQL Server  
- 🧱 **Arquitectura:** Monolítica (por baja carga y uso eventual)

🛤️ Se eligió esta arquitectura por simplicidad operativa y escalabilidad futura si fuera necesario. No hay una necesidad urgente de microservicios por ahora.

---

## 🧪 **Pruebas y Validación**
El sistema ha sido probado con clientes reales en ambientes productivos. Las validaciones se realizaron en su mayoría de forma **manual**, dado que las revisiones no son constantes ni en tiempo real.

---

## 🔧 **Desafíos Técnicos**
- 🔄 A pesar de la **diversidad de equipos**, el sistema se adaptó fácilmente gracias a una estructura flexible.
- 🧮 Los algoritmos para **frecuencias de mantenimiento** fueron proporcionados por expertos con años de experiencia en terreno.
- 🤝 La empresa cliente brindó amplio apoyo técnico y operativo, lo que agilizó el desarrollo.

---

## 🔐 **Seguridad y Permisos**
El acceso está controlado mediante un sistema de roles:

- 👤 **Administrador del Sistema:** Acceso completo.
- 🏢 **Cliente (empresa):** Visualiza, solicita y administra sus equipos.
- 👷‍♀️ **Campo (jefes de campo):** Valida la información ingresada por técnicos.

🔏 Solo los usuarios autorizados pueden ver y modificar información confidencial relacionada con equipos y mantenimientos.

---

## 🧾 **Resumen de Características**
| Característica                     | Detalles |
|-----------------------------------|----------|
| 🧱 Equipos soportados              | Portones, cortinas, puentes grúa, torniquetes, barreras, bolardos |
| 🔁 Tipos de mantenimiento         | Preventivo, correctivo, de emergencia |
| 🧩 Gestión de repuestos            | Registro detallado por mantenimiento |
| ⏰ Alertas de mantenimiento       | Programadas y automáticas |
| 📊 Reportes                       | Personalizados, exportables |

            `,
            desc_long_en: `
            # 🛠️ **Rinap** – Maintenance and Equipment Management System

## 📝 **Description**
**Rinap** is a platform designed to manage the installation history, maintenance, and repairs of equipment across various industries, such as:

🔹 Gates  
🔹 Curtains  
🔹 Overhead cranes  
🔹 Vehicle barriers  
🔹 Pedestrian access turnstiles  
🔹 Automatic bollards  

This system was developed to tackle the challenge of effectively managing maintenance, especially for companies with large amounts of equipment.

🎯 **Objective:** Facilitate maintenance management for large corporate clients, improve operational efficiency, and reduce the risk of failures or accidents.

---

## ⚙️ **Key Features**
- 🗃️ **Complete history** from installation to every maintenance task.
- 🔔 **Automatic alerts** for preventive maintenance.
- 🚨 **Emergency requests** for unplanned corrective maintenance.
- ⚠️ **Real-time alerts** for breakdowns or accidents.
- 🧩 **Spare parts management**, tracking of replaced components in every intervention.
- 🧠 **Automatic calculation** of maintenance frequency based on environment (sand, dust, temperature, etc.).
- 📊 **On-demand reports** exportable to PDF and Excel.

---

## 👥 **System Users**
- 👷‍♂️ **Maintenance Technicians:** Perform and log maintenance tasks.
- 🧑‍💼 **Field Supervisors:** Verify the accuracy of generated reports.
- 🏢 **Client Administrators:** Manage users and view all activity and reports.
- 🔐 **System Administrator (internal):** Creates, edits, and manages general data and clients.

---

## 🏗️ **Architecture and Technology**
- 💻 **Backend:** .NET MVC  
- 🗄️ **Database:** SQL Server  
- 🧱 **Architecture:** Monolithic (due to low load and occasional usage)

🛤️ This architecture was chosen for operational simplicity and future scalability if needed. There’s currently no urgent need for microservices.

---

## 🧪 **Testing and Validation**
The system has been tested with real clients in production environments. Most validations were performed **manually**, since checks are not constant or real-time.

---

## 🔧 **Technical Challenges**
- 🔄 Despite the **variety of equipment**, the system adapted easily thanks to a flexible structure.
- 🧮 The **maintenance frequency algorithms** were provided by field experts with years of experience.
- 🤝 The client company provided extensive technical and operational support, which sped up development.

---

## 🔐 **Security and Permissions**
Access is controlled through a role-based system:

- 👤 **System Administrator:** Full access.
- 🏢 **Client (company):** Views, requests, and manages their equipment.
- 👷‍♀️ **Field Supervisor:** Validates information entered by technicians.

🔏 Only authorized users can view and modify sensitive equipment and maintenance information.

---

## 🧾 **Feature Summary**
| Feature                            | Details |
|-----------------------------------|---------|
| 🧱 Supported equipment             | Gates, curtains, overhead cranes, turnstiles, barriers, bollards |
| 🔁 Maintenance types              | Preventive, corrective, emergency |
| 🧩 Spare parts management          | Detailed records per maintenance |
| ⏰ Maintenance alerts              | Scheduled and automatic |
| 📊 Reports                         | Customizable, exportable |

            `,
            desc_long_it: `
# 🛠️ **Rinap** – Sistema di Gestione Manutenzioni e Attrezzature

## 📝 **Descrizione**
**Rinap** è una piattaforma progettata per gestire la cronologia di installazione, manutenzioni e riparazioni di attrezzature in vari settori industriali, come:

🔹 Cancelli  
🔹 Tende  
🔹 Gru a ponte  
🔹 Barriere veicolari  
🔹 Tornelli per accesso pedonale  
🔹 Dissuasori automatici  

Questo sistema è stato sviluppato per affrontare la sfida di un controllo efficace della manutenzione, in particolare per aziende con un elevato numero di attrezzature.

🎯 **Obiettivo:** Facilitare la gestione della manutenzione per grandi clienti aziendali, migliorare l'efficienza operativa e ridurre il rischio di guasti o incidenti.

---

## ⚙️ **Funzionalità Principali**
- 🗃️ **Storico completo** dall'installazione a ogni intervento di manutenzione.
- 🔔 **Avvisi automatici** per manutenzioni preventive.
- 🚨 **Richieste d'emergenza** per manutenzioni correttive non pianificate.
- ⚠️ **Avvisi in tempo reale** per guasti o incidenti.
- 🧩 **Gestione dei ricambi**, con tracciamento dei componenti sostituiti in ogni intervento.
- 🧠 **Calcolo automatico** della frequenza di manutenzione in base all’ambiente (sabbia, polvere, temperatura, ecc.).
- 📊 **Report su richiesta** esportabili in PDF ed Excel.

---

## 👥 **Utenti del Sistema**
- 👷‍♂️ **Tecnici di Manutenzione:** Eseguono e registrano gli interventi.
- 🧑‍💼 **Capisquadra:** Verificano l’autenticità dei report generati.
- 🏢 **Amministratori del Cliente:** Gestiscono gli utenti e visualizzano tutte le attività e i report.
- 🔐 **Amministratore di Sistema (interno):** Crea, modifica e gestisce i dati generali e i clienti.

---

## 🏗️ **Architettura e Tecnologia**
- 💻 **Backend:** .NET MVC  
- 🗄️ **Database:** SQL Server  
- 🧱 **Architettura:** Monolitica (per il basso carico e uso occasionale)

🛤️ Questa architettura è stata scelta per la semplicità operativa e la scalabilità futura se necessaria. Al momento non c’è esigenza di microservizi.

---

## 🧪 **Test e Validazione**
Il sistema è stato testato con clienti reali in ambienti produttivi. La maggior parte delle validazioni è stata effettuata **manualmente**, poiché le verifiche non sono costanti né in tempo reale.

---

## 🔧 **Sfide Tecniche**
- 🔄 Nonostante la **diversità di attrezzature**, il sistema si è adattato facilmente grazie a una struttura flessibile.
- 🧮 Gli **algoritmi di frequenza della manutenzione** sono stati forniti da esperti con anni di esperienza sul campo.
- 🤝 L’azienda cliente ha fornito ampio supporto tecnico e operativo, velocizzando lo sviluppo.

---

## 🔐 **Sicurezza e Permessi**
L’accesso è controllato tramite un sistema a ruoli:

- 👤 **Amministratore di Sistema:** Accesso completo.
- 🏢 **Cliente (azienda):** Visualizza, richiede e gestisce le proprie attrezzature.
- 👷‍♀️ **Campo (capisquadra):** Valida le informazioni inserite dai tecnici.

🔏 Solo gli utenti autorizzati possono visualizzare e modificare informazioni sensibili relative ad attrezzature e manutenzioni.

---

## 🧾 **Riepilogo Funzionalità**
| Funzionalità                       | Dettagli |
|-----------------------------------|----------|
| 🧱 Attrezzature supportate         | Cancelli, tende, gru a ponte, tornelli, barriere, dissuasori |
| 🔁 Tipi di manutenzione            | Preventiva, correttiva, d'emergenza |
| 🧩 Gestione dei ricambi            | Registrazione dettagliata per intervento |
| ⏰ Avvisi di manutenzione          | Programmati e automatici |
| 📊 Report                          | Personalizzati, esportabili |

            `
        },
        {
        title: "KeyPup",
        desc_short: "solución integral de checklist digital y control vehicular, diseñada para operaciones en minería. Automatiza la verificación de vehículos antes de iniciar su jornada y bloquea su uso si no se completa el proceso correctamente. Con foco en trazabilidad, seguridad y control remoto, keyPup mejora la operación de flotas en entornos exigentes",
        desc_short_en:"keyPup is a comprehensive digital checklist and vehicle control solution, designed for mining operations. It automates vehicle verification before starting the workday and blocks its use if the process is not completed correctly. With a focus on traceability, security, and remote control, keyPup enhances fleet operations in demanding environments.", 
        desc_short_it: "keyPup è una soluzione completa di checklist digitale e controllo veicolare, progettata per operazioni minerarie. Automatizza la verifica dei veicoli prima di iniziare la giornata lavorativa e blocca il loro utilizzo se il processo non viene completato correttamente. Con un focus sulla tracciabilità, la sicurezza e il controllo remoto, keyPup migliora l'operazione delle flotte in ambienti esigenti.",
        img: "/img/keypup.png",
        inicio: new Date(2022, 8, 10),
        fin: new Date(2022,8,25),
        tech: ['dotnet', 'csharp', 'rasberry'],
        desc_long: `**keyPup** es una solución integral de checklist digital y control vehicular, diseñada para operaciones en minería. Automatiza la verificación de vehículos antes de iniciar su jornada y bloquea su uso si no se completa el proceso correctamente. Con foco en trazabilidad, seguridad y control remoto, keyPup mejora la operación de flotas en entornos exigentes.

---

## 🛑 Problema

En las faenas mineras es obligatorio realizar un checklist de los vehículos antes de usarlos. Este proceso suele hacerse en papel, con problemas evidentes:

- Información manipulable o poco confiable.
- Pérdida de registros.
- Falta de trazabilidad.
- Procesos lentos y manuales.

---

## ✅ Solución

**keyPup** digitaliza y automatiza el proceso, ofreciendo:

- Checklists configurables por tipo de vehículo.
- Firma digital biométrica (huella, rostro o ambas).
- Generación automática de reportes en PDF/Excel.
- Dispositivos de bloqueo físico del vehículo hasta que se complete el checklist.
- Control mediante geolocalización y comunicaciones vía MQTT.

---

## 👷‍♂️ Usuarios y roles

El sistema es utilizado por empresas mineras o subcontratistas, y define tres roles principales:

- **Cliente**: Administra la plataforma, agrega usuarios, asigna roles, y accede a todos los reportes.
- **Supervisor**: Asigna vehículos a conductores, verifica checklists, y ve reportes diarios.
- **Conductor**: Recibe notificaciones de asignación y realiza el checklist desde su teléfono o tablet.

---

## 📱 Funcionamiento general

1. El supervisor asigna un vehículo a un conductor.
2. El conductor recibe una notificación con fecha, hora y ubicación.
3. Al iniciar turno, el conductor debe completar un checklist digital.
4. El sistema valida la información y solicita verificación biométrica.
5. Si todo es correcto, el vehículo es desbloqueado y habilitado para operar.

---

## 🧾 Características del checklist

- Estado configurable por componente (ej. llantas, retrovisores, aceite, vidrios, etc.).
- 5 niveles de evaluación: Inoperativo, Mal estado, Necesita revisión, Se va a cambiar, OK.
- Campos adicionales de texto.
- Evidencia fotográfica en caso de incidencias.
- Checklists personalizados por tipo de vehículo y cliente.

---

## 🔒 Seguridad y bloqueo

- Si el checklist no se completa, el vehículo permanece en estado P (pare) sin posibilidad de mover la palanca de cambios.
- El dispositivo de bloqueo se comunica con el backend vía MQTT.
- La verificación de identidad biométrica es obligatoria.
- El sistema impide el uso de vehículos no autorizados, lo que también actúa como medida **antirrobo**.

---

## 🌐 Conectividad y funcionamiento offline

- El sistema puede trabajar parcialmente offline: la app guarda temporalmente los datos y los sincroniza al recuperar señal.
- El desbloqueo del vehículo solo ocurre si hay comunicación activa con el broker MQTT.
- Si no hay GSM disponible, el vehículo queda bloqueado como medida de seguridad.

---

## 🔧 Tecnología y arquitectura

- **Frontend**: Web app para clientes, supervisores y reportes.
- **Backend**: .NET MVC monolítico con tareas en background para MQTT.
- **MQTT**: Comunicación con los dispositivos mediante Mosquitto.
- **Hardware**:
  - [Nano GPS Click](https://www.mikroe.com/nano-gps-click) para geolocalización.
  - [Módulo GSM/GPRS A6 con Raspberry Pi](https://microlab.ec/blog/modulo-gsm-gprs-a6-con-raspberry/) para conexión móvil.
  - Sistema mecánico de bloqueo (no público).

---

## 📈 Reportes y exportación

- Reportes automáticos tras cada checklist.
- Análisis por frecuencia de fallas (ej. cuándo cambiar llantas según tipo de faena).
- Exportación en PDF y Excel.
- Logs de auditoría de acciones y errores.
- Endpoints disponibles para integración con ERP u otros sistemas.

---

## 🚛 Pruebas en campo

- Actualmente en **fase piloto (2025–2026)**.
- Implementado en **20 vehículos**.
- Región de pruebas: **Antofagasta, Chile**.

---

## ⚙️ Retos técnicos

- Integración de dispositivos físicos con sistemas mecánicos de bloqueo.
- Configuración avanzada de Mosquitto para seguridad y estabilidad.
- Coordinación en tiempo real entre app, backend y hardware.
- Comunicación confiable en zonas de baja cobertura GSM.

---

## 🧑‍💻 Mi rol

Fui responsable del desarrollo de la aplicación web y de la configuración completa del broker MQTT (Mosquitto), así como de la comunicación entre dispositivos y backend.

---

## 📊 Diagrama técnico (próximamente)


![keyPup_diagrama](/img/keypup_arg.png)


---

> Este sistema es privado y actualmente no cuenta con una URL pública, ya que se ofrece exclusivamente a clientes selectos.
        `,
        desc_long_en:`**keyPup** is a comprehensive digital checklist and vehicle control solution designed for mining operations. It automates vehicle verification before starting their workday and locks their use if the process is not completed correctly. With a focus on traceability, security, and remote control, keyPup enhances fleet operations in demanding environments.

---

## 🛑 Problem

In mining operations, it is mandatory to conduct a checklist of vehicles before use. This process is often done on paper, leading to evident issues:

- Manipulable or unreliable information.
- Loss of records.
- Lack of traceability.
- Slow and manual processes.

---

## ✅ Solution

**keyPup** digitizes and automates the process, offering:

- Configurable checklists by vehicle type.
- Biometric digital signature (fingerprint, face, or both).
- Automatic generation of reports in PDF/Excel.
- Physical vehicle blocking devices until the checklist is completed.
- Control via geolocation and MQTT communication.

---

## 👷‍♂️ Users and Roles

The system is used by mining companies or subcontractors, and defines three main roles:

- **Client**: Manages the platform, adds users, assigns roles, and accesses all reports.
- **Supervisor**: Assigns vehicles to drivers, verifies checklists, and views daily reports.
- **Driver**: Receives assignment notifications and completes the checklist from their phone or tablet.

---

## 📱 General Workflow

1. The supervisor assigns a vehicle to a driver.
2. The driver receives a notification with date, time, and location.
3. At the start of the shift, the driver must complete a digital checklist.
4. The system validates the information and requests biometric verification.
5. If everything is correct, the vehicle is unlocked and ready to operate.

---

## 🧾 Checklist Features

- Configurable state by component (e.g., tires, mirrors, oil, windows, etc.).
- 5 evaluation levels: Inoperative, Bad condition, Needs review, Will be replaced, OK.
- Additional text fields.
- Photographic evidence in case of incidents.
- Customizable checklists by vehicle type and client.

---

## 🔒 Security and Locking

- If the checklist is not completed, the vehicle remains in "P" (Park) state with no possibility of shifting the gear lever.
- The locking device communicates with the backend via MQTT.
- Biometric identity verification is mandatory.
- The system prevents the use of unauthorized vehicles, also acting as an **anti-theft** measure.

---

## 🌐 Connectivity and Offline Operation

- The system can operate partially offline: the app temporarily stores data and synchronizes when the signal is regained.
- The vehicle unlocks only if there is active communication with the MQTT broker.
- If no GSM signal is available, the vehicle remains locked as a security measure.

---

## 🔧 Technology and Architecture

- **Frontend**: Web app for clients, supervisors, and reports.
- **Backend**: .NET MVC monolithic with background tasks for MQTT.
- **MQTT**: Communication with devices via Mosquitto.
- **Hardware**:
  - [Nano GPS Click](https://www.mikroe.com/nano-gps-click) for geolocation.
  - [GSM/GPRS A6 Module with Raspberry Pi](https://microlab.ec/blog/modulo-gsm-gprs-a6-con-raspberry/) for mobile connectivity.
  - Mechanical locking system (not public).

---

## 📈 Reports and Export

- Automatic reports after each checklist.
- Failure frequency analysis (e.g., when to replace tires depending on worksite type).
- Export to PDF and Excel.
- Action and error audit logs.
- Available endpoints for ERP or other system integration.

---

## 🚛 Field Tests

- Currently in **pilot phase (2025–2026)**.
- Implemented in **20 vehicles**.
- Testing region: **Antofagasta, Chile**.

---

## ⚙️ Technical Challenges

- Integration of physical devices with mechanical locking systems.
- Advanced Mosquitto configuration for security and stability.
- Real-time coordination between the app, backend, and hardware.
- Reliable communication in low GSM coverage areas.

---

## 🧑‍💻 My Role

I was responsible for the development of the web application and the complete configuration of the MQTT broker (Mosquitto), as well as communication between devices and backend.

---

## 📊 Technical Diagram (coming soon)

![keyPup_diagrama](/img/keypup_arg.png)

---

> This system is private and currently does not have a public URL, as it is offered exclusively to select clients.

        `,
        desc_long_it: `
        # keyPup

**keyPup** è una soluzione completa di checklist digitale e controllo veicolare, progettata per operazioni minerarie. Automatizza la verifica dei veicoli prima di iniziare la giornata lavorativa e blocca il loro utilizzo se il processo non viene completato correttamente. Con un focus sulla tracciabilità, la sicurezza e il controllo remoto, keyPup migliora l'operazione delle flotte in ambienti esigenti.

---

## 🛑 Problema

Nelle operazioni minerarie è obbligatorio eseguire una checklist dei veicoli prima dell'uso. Questo processo viene spesso fatto su carta, con problemi evidenti:

- Informazioni manipolabili o poco affidabili.
- Perdita di registrazioni.
- Mancanza di tracciabilità.
- Processi lenti e manuali.

---

## ✅ Soluzione

**keyPup** digitalizza e automatizza il processo, offrendo:

- Checklist configurabili per tipo di veicolo.
- Firma digitale biometrica (impronta digitale, volto o entrambi).
- Generazione automatica di report in PDF/Excel.
- Dispositivi di blocco fisico del veicolo fino al completamento della checklist.
- Controllo tramite geolocalizzazione e comunicazioni via MQTT.

---

## 👷‍♂️ Utenti e Ruoli

Il sistema è utilizzato da aziende minerarie o subappaltatori, e definisce tre ruoli principali:

- **Cliente**: Gestisce la piattaforma, aggiunge utenti, assegna ruoli e accede a tutti i report.
- **Supervisore**: Assegna veicoli ai conducenti, verifica le checklist e visualizza i report giornalieri.
- **Conducente**: Riceve notifiche di assegnazione e completa la checklist dal proprio telefono o tablet.

---

## 📱 Flusso di lavoro generale

1. Il supervisore assegna un veicolo a un conducente.
2. Il conducente riceve una notifica con data, ora e posizione.
3. All'inizio del turno, il conducente deve completare una checklist digitale.
4. Il sistema valida le informazioni e richiede la verifica biometrica.
5. Se tutto è corretto, il veicolo viene sbloccato e pronto per operare.

---

## 🧾 Caratteristiche della checklist

- Stato configurabile per componente (es. pneumatici, specchietti, olio, vetri, ecc.).
- 5 livelli di valutazione: Non operativo, In cattivo stato, Necessita revisione, Sarà sostituito, OK.
- Campi aggiuntivi di testo.
- Evidenza fotografica in caso di incidenti.
- Checklist personalizzabili per tipo di veicolo e cliente.

---

## 🔒 Sicurezza e Blocco

- Se la checklist non viene completata, il veicolo rimane in stato P (parcheggiato) senza possibilità di spostare la leva del cambio.
- Il dispositivo di blocco comunica con il backend tramite MQTT.
- La verifica dell'identità biometrica è obbligatoria.
- Il sistema impedisce l'uso di veicoli non autorizzati, agendo anche come misura **antifurto**.

---

## 🌐 Connettività e Funzionamento Offline

- Il sistema può funzionare parzialmente offline: l'app salva temporaneamente i dati e li sincronizza quando il segnale viene ripristinato.
- Lo sblocco del veicolo avviene solo se c'è comunicazione attiva con il broker MQTT.
- Se non è disponibile GSM, il veicolo rimane bloccato come misura di sicurezza.

---

## 🔧 Tecnologia e Architettura

- **Frontend**: Web app per clienti, supervisori e report.
- **Backend**: .NET MVC monolitico con attività in background per MQTT.
- **MQTT**: Comunicazione con dispositivi tramite Mosquitto.
- **Hardware**:
  - [Nano GPS Click](https://www.mikroe.com/nano-gps-click) per geolocalizzazione.
  - [Modulo GSM/GPRS A6 con Raspberry Pi](https://microlab.ec/blog/modulo-gsm-gprs-a6-con-raspberry/) per connettività mobile.
  - Sistema di blocco meccanico (non pubblico).

---

## 📈 Report e Esportazione

- Report automatici dopo ogni checklist.
- Analisi per frequenza di guasti (es. quando sostituire gli pneumatici in base al tipo di lavoro).
- Esportazione in PDF ed Excel.
- Log di audit delle azioni e degli errori.
- Endpoints disponibili per integrazione con ERP o altri sistemi.

---

## 🚛 Test sul campo

- Attualmente in **fase pilota (2025–2026)**.
- Implementato in **20 veicoli**.
- Regione di test: **Antofagasta, Cile**.

---

## ⚙️ Sfide tecniche

- Integrazione dei dispositivi fisici con i sistemi di blocco meccanici.
- Configurazione avanzata di Mosquitto per sicurezza e stabilità.
- Coordinamento in tempo reale tra app, backend e hardware.
- Comunicazione affidabile in zone con bassa copertura GSM.

---

## 🧑‍💻 Il mio ruolo

Sono stato responsabile dello sviluppo dell'applicazione web e della configurazione completa del broker MQTT (Mosquitto), oltre alla comunicazione tra dispositivi e backend.

---

## 📊 Diagramma tecnico (prossimamente)

![keyPup_diagrama](/img/keypup_arg.png)

---

> Questo sistema è privato e attualmente non dispone di un URL pubblico, poiché è offerto esclusivamente a clienti selezionati.

        `
        },
        {

            title: "FGIS",
            desc_short: "FerroGroupImageService, es servicio interno creado para centralizar y optimizar el almacenamiento de imágenes utilizadas por las distintas aplicaciones del grupo Ferrocorp",
            desc_short_en: "FerroGroupImageService is an internal service created to centralize and optimize the storage of images used by various applications within the Ferrocorp group.",
            desc_short_it: "FerroGroupImageService è un servizio interno creato per centralizzare e ottimizzare l'archiviazione delle immagini utilizzate dalle diverse applicazioni del gruppo Ferrocorp.",
            img: "/img/fgis.png",
            inicio: new Date(2022, 8, 10),
            fin: new Date(2022,8,25),
            tech: ['dotnet', 'csharp'],
            desc_long_en: `
# FGIS  Ferro Group Image Services

**FGIS** is an internal service created to centralize and optimize the storage of images used by various applications within the **Ferrocorp** group. The need arose as a practical solution to avoid duplicated storage and to provide organized and secure access to images from any system in the group.

Currently, more than **12 applications** consume images from FGIS, enabling efficient flow between services without relying on local paths or individual file structures per app.

## Key Features

- 🎯 **Simple URL Access**: each image can be retrieved via a URL like:

https://{domain}/{app}/{image name OR GUID}

- 🗃️ **Optimized Storage**: each image is stored in the smallest possible space without affecting visual quality, using advanced processing libraries.

- 🖼️ **Resize on-demand**: the system allows on-the-fly resizing before serving the image, adapting to specific needs of the consuming apps.

- 🔒 **Secure Authentication**: authentication is handled using strictly expiring JWT tokens. Each token is tied to a registered application, which has its own internal name and secret key.

## Technology Used

FGIS was built entirely with **.NET**, and currently runs on **.NET 8**. For image processing, the following libraries are used:

- **ImageMagick**
- **Magick.NET.Core**

These allow:

- Size reduction while maintaining quality  
- Format transformations (JPEG, PNG, WebP, etc.)  
- Internal handling for resizing and compression

## My Role in the Project

I fully developed this system, from architecture to final implementation. I also participated in the integrations with different Ferrocorp group apps. Currently, I occasionally maintain the codebase and migrate the service to new .NET versions as needed.

FGIS has not only made the development team's job easier, but has also standardized the way we handle images in the Ferrocorp ecosystem.

            `,
            desc_long_it: `
# FGIS  Ferro Group Image Services

**FGIS** è un servizio interno creato per centralizzare e ottimizzare l’archiviazione delle immagini utilizzate dalle diverse applicazioni del gruppo **Ferrocorp**. È nato come soluzione pratica per evitare la duplicazione dei dati e offrire un accesso organizzato e sicuro alle immagini da qualsiasi sistema del gruppo.

Attualmente, più di **12 applicazioni** consumano immagini da FGIS, permettendo un flusso efficiente tra servizi senza dipendere da percorsi locali o strutture di file separate per ogni app.

## Funzionalità principali

- 🎯 **Accesso tramite URL semplice**: ogni immagine può essere consultata attraverso un URL come:

https://{dominio}/{app}/{nome immagine O GUID}

- 🗃️ **Archiviazione ottimizzata**: ogni immagine viene memorizzata nel minor spazio possibile senza comprometterne la qualità visiva, grazie a librerie di elaborazione avanzate.

- 🖼️ **Ridimensionamento su richiesta**: il sistema consente di ridimensionare le immagini al volo prima di servirle, adattandosi alle esigenze specifiche delle app che le utilizzano.

- 🔒 **Autenticazione sicura**: l’autenticazione è gestita tramite token JWT con scadenza rigida. Ogni token è associato a un’applicazione registrata, che ha un nome interno e una chiave segreta.

## Tecnologia utilizzata

FGIS è stato sviluppato interamente in **.NET** e attualmente funziona su **.NET 8**. Per l’elaborazione delle immagini, vengono utilizzate le seguenti librerie:

- **ImageMagick**
- **Magick.NET.Core**

Queste permettono:

- Riduzione delle dimensioni mantenendo la qualità  
- Conversioni di formato (JPEG, PNG, WebP, ecc.)  
- Gestione interna per resize e compressione

## Il mio ruolo nel progetto

Ho sviluppato completamente questo sistema, dalla sua architettura fino all’implementazione finale. Ho anche partecipato all’integrazione con le diverse app del gruppo Ferrocorp. Attualmente mi occupo occasionalmente della manutenzione del codice e della migrazione del servizio a nuove versioni di .NET quando necessario.

FGIS non solo ha facilitato il lavoro del team di sviluppo, ma ha anche standardizzato il modo in cui gestiamo le immagini nell’ecosistema di Ferrocorp.

            `,
            desc_long: `
# FGIS  Ferro Group Image Services

**FGIS** es un servicio interno creado para centralizar y optimizar el almacenamiento de imágenes utilizadas por las distintas aplicaciones del grupo **Ferrocorp**. La necesidad surgió como una solución práctica para evitar la duplicación de almacenamiento y facilitar el acceso organizado y seguro a imágenes desde cualquier sistema del grupo.

Actualmente, más de **12 aplicaciones** consumen imágenes desde FGIS, lo que permite un flujo eficiente entre servicios sin depender de rutas locales ni estructuras de archivos individuales por app.

## Funcionalidades clave

- 🎯 **Acceso por URL simple**: cada imagen puede ser consultada mediante una URL como:
  
https://{dominio}/{app}/{nombre imagen O GUID}

- 🗃️ **Almacenamiento optimizado**: cada imagen se almacena en el menor espacio posible sin afectar su calidad visual, aprovechando librerías de procesamiento avanzadas.

- 🖼️ **Resize on-demand**: el sistema permite redimensionar imágenes bajo demanda antes de servirlas, adaptándose a necesidades puntuales de las apps consumidoras.

- 🔒 **Autenticación segura**: la autenticación se gestiona por medio de tokens JWT con vencimiento estricto. Cada token se asocia a una aplicación registrada, que cuenta con su nombre interno y clave secreta.

## Tecnología utilizada

FGIS fue construido completamente con **.NET**, y actualmente opera sobre **.NET 8**. Para el procesamiento de imágenes, se utilizan las librerías:

- **ImageMagick**
- **Magick.NET.Core**

Estas permiten:

- Reducción de tamaño manteniendo la calidad
- Transformaciones de formato (JPEG, PNG, WebP, etc.)
- Manejo interno para resize y compresión

## Mi rol en el proyecto

Desarrollé completamente este sistema, desde su arquitectura hasta la implementación final. También participé en las integraciones con las diferentes apps del grupo Ferrocorp. En la actualidad, me encargo ocasionalmente de mantener el código actualizado y migrar el servicio a nuevas versiones de .NET cuando es necesario.

FGIS no solo ha facilitado el trabajo del equipo de desarrollo, sino que ha estandarizado la manera en que gestionamos imágenes en el ecosistema de Ferrocorp.

`
        },
{

            title: "titulo",
            desc_short: "short",
            desc_short_en:"keyPup is a comprehensive digital checklist and vehicle control solution, designed for mining operations. It automates vehicle verification before starting the workday and blocks its use if the process is not completed correctly. With a focus on traceability, security, and remote control, keyPup enhances fleet operations in demanding environments.", 
            desc_short_it: "keyPup è una soluzione completa di checklist digitale e controllo veicolare, progettata per operazioni minerarie. Automatizza la verifica dei veicoli prima di iniziare la giornata lavorativa e blocca il loro utilizzo se il processo non viene completato correttamente. Con un focus sulla tracciabilità, la sicurezza e il controllo remoto, keyPup migliora l'operazione delle flotte in ambienti esigenti.",
            img: "/img/rinapp.png",
            url: "https://rinapp.com",
            github: "https://github.com/hikdul",
            inicio: new Date(2021, 11, 25),
            fin: new Date(2022,5,30),
            tech: ['dotnet'],
            desc_long: `
            large
            large
            `,
            desc_long_en: `
            
            large
            `,
            desc_long_it: `
            
            large
            `
        }
    ]


export default async function Proyectos() {
    const locale = await getLocale()
    return (
        <>
            <div className="">
                {proyectos && proyectos.map(x => <ProjectCard locale={locale} key={x.title} {...x} />)}
            </div>
            <div className="emptyArea mt-20 min-h-[10vh]"></div>
        </>
    )
}