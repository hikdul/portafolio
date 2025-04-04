import { BoldTextSlow, CardIT, CardTT } from "@/components";
import { getTranslations } from "next-intl/server";
import Image from "next/image";


interface areasTrabProps {
  title: string
  desc: string
  tech: string[]
}

const areasTrabajoData: areasTrabProps[] = [
  { title: "Backend", desc: "backend", tech: ["dotnet", "nodejs", "next"] },
  { title: "FrontEnd", desc: "frontEnd", tech: ["dotnet", "react"] },
  { title: "Clound", desc: "cloud", tech: ["aws", "vercel"] },
  { title: "otros", desc: "otros", tech: ["csharp", "python", "js", "rust", "rasberry"] }
]


export default async function Home() {

  const t = await getTranslations('HomePage')

  return (
    <div className="min-h-[68vh] mt-5">
      <section id="presentacion" >
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center m-auto w-full h-full">
          <Image
            className=""
            src="/img/face_chibi.jpeg"
            alt="foto personal"
            width={300}
            height={300}
          />
          <div className="leading-4 xl:leading-8">
            <p>{t('title')} {t('text1')}  </p>
            <p>{t('text2')}</p>
            <p>{t('text3')}</p>
            <p>{t('text4')}</p>
          </div>

        </div>
      </section>

      <section id="trabajoYtecnologias" className="mt-12">
        <h3 className="text-5xl underline my-10">Areas De trabajo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2">
          {areasTrabajoData && areasTrabajoData.map(x => <CardTT {...x} key={x.title} />)}
        </div>
      </section>
      <section id="interesesYTecnologias" className="mt-12">

        <h3 className="text-5xl underline my-10">Tecnologias y como las uso</h3>
        <CardIT icon="dotnet" >
          <article>
            <p>
              <BoldTextSlow text=".NET" /> y <BoldTextSlow text="C#" /> marcaron mi entrada al mundo laboral como desarrollador, por lo que les tengo un aprecio especial.
            </p>
            <p>
              Principalmente, utilizo este framework para desarrollar el backend de diversos servicios, aprovechando su solidez y escalabilidad. Además, también lo empleo en el frontend mediante el modelo MVC de .NET, lo que me permite construir aplicaciones estructuradas y eficientes.
            </p>
            <p>
              También utilizo C# para generar scripts de utilidad general y trabajar con distintos dispositivos. Gracias a su versatilidad, puedo desarrollar soluciones para diversas áreas, como IoT y conexiones con dispositivos como Raspberry Pi, entre otros.
            </p>
          </article>
        </CardIT>


        <CardIT icon="js" >
          <article>
            <p>
              <b>JavaScript</b> es una pieza clave dentro de mi stack tecnológico, y lo utilizo en distintos contextos según sea más conveniente
            </p>
            <ul className="">
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Backend:" /> Mayormente trabajo con el framework NestJS, ya que me ofrece múltiples opciones de manera rápida y estructurada. También lo utilizo para desarrollar aplicaciones que requieren sockets o streaming, aprovechando su capacidad para manejar conexiones en tiempo real de forma eficiente.
              </li>
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Frontend:" /> Aunque de manera indirecta, uso Node.js como parte del ecosistema de <b>React</b>, una librería que empleo con frecuencia.
              </li>
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Scripts:" /> También desarrollo scripts, especialmente cuando se trata de conectividad web o tareas simples que implican el envío o la obtención de pequeños paquetes de datos. Son útiles para automatizar procesos ligeros o resolver necesidades puntuales de forma rápida y eficiente.
              </li>
            </ul>
            <p>
              En lo particular me encanta trabajar con TypeScript, ya que el tipado estricto me entrega una forma de control que apoya mucho al mantenimiento cuando los sistemas crecen.
            </p>
          </article>
        </CardIT>

        <CardIT icon="python" >
          <article>
            <p>
              <BoldTextSlow text="Python" /> es un lenguaje que está en todas partes y destaca por su simplicidad y versatilidad.
               En mi caso, lo utilizo principalmente para <b>automatizar tareas</b> y desarrollar scripts para procesos que no requieren alta complejidad o manejo de elementos críticos. Su facilidad de uso lo convierte en una excelente opción para completar actividades generales de manera rápida y eficiente.
            </p>
          </article>
        </CardIT>
        <CardIT icon="rasberry" >
          <article>
            <p>Particularmente la posibilidad de tener un <BoldTextSlow text="micro computador"/> con las salidos del GPIO para poder manipular y trabajar con otros dispositivos creando conexiones sencillas entre elementos fisicos y software es el principal objetivo por el que uso este dispositivo.</p>
            <p>Actualmente estoy generando pruebas con dispositivos basados en <BoldTextSlow text="ESP-32"/> para buscar generar las mismas tareas con menor costo.</p>
          </article>
        </CardIT>
      </section>
      <section id="interesesYEspecializacion" className="mt-12">
        <p>Hablar de algunos proyectos en los que trabaje || trabajo</p>
      </section>
      <section id="lema" className="mt-12">
        <p>tener un lema o algun(os) mensaje(s) que tenga un trabajo en textos atractivos al final de la pagina para agregar un uso de los detalles</p>
        <p>puede ser una lista de frases que aparescan como si se escribieran y luego se borren y escriban otra y asi.</p>
      </section>
      <div className="mt-20 min-h-[30vh]"></div>
    </div>
  );
}
