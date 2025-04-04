import { BoldTextSlow, CardIT, CardTT } from "@/components";
import { getTranslations } from "next-intl/server";
import Image from "next/image";


interface areasTrabProps {
  title: string
  desc: string
  tech?: string[]
  imgUrl?: string
  urlTo?: string
}

const areasTrabajoData: areasTrabProps[] = [
  { title: "Backend", desc: "backend", tech: ["dotnet", "nodejs", "next"] },
  { title: "FrontEnd", desc: "frontEnd", tech: ["dotnet", "react"] },
  { title: "Clound", desc: "cloud", tech: ["aws", "vercel"] },
  { title: "otros", desc: "otros", tech: ["csharp", "python", "js", "rust", "rasberry"] }
]

const proyectosMuestraData: areasTrabProps[]=[
  { title: "Rusquito", desc: "rustquito", imgUrl: 'https://asispass.com/img/logo.png', urlTo:'https://github.com/hikdul/rusquito'  },
  { title: "Trendbas", desc: "trendbas",  imgUrl: 'https://trendbas.com/img/logo.svg', urlTo:'trendbas.com'},
  { title: "AsisPass", desc: "asispass",  imgUrl: 'https://asispass.com/img/logo.png', urlTo:'asispass.com'}
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
              <BoldTextSlow text=".NET" /> y <BoldTextSlow text="C#" /> {t('dotnet0')}
            </p>
            <p>
              {t('dotnet1')}
            </p>
            <p>
              {t('dotnet2')}
            </p>
            <p>
              {t('dotnet3')}
            </p>
          </article>

        </CardIT>


        <CardIT icon="js" >
          <article>
            <p>
              <BoldTextSlow text="JavaScript" /> {t('js0')} 
            </p>
            <ul className="">
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Backend:" /> {t('js1')} <BoldTextSlow text="Node.js" />, {t('js2')} <BoldTextSlow text="NestJS" />{t('js3')} <BoldTextSlow text="WebSockets" /> {t('js4')} <BoldTextSlow text="streaming" />, {t('js5')}
              </li>
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Frontend:" /> {t('js6')} <BoldTextSlow text="React" /> {t('js7')} <BoldTextSlow text="Next.js" />{t('js10')}<BoldTextSlow text="Vite" />{t('js8')}
              </li>
              <li className="ml-3 lg:ml-10 list-disc">
                <BoldTextSlow text="Scripts:" />  {t('js9')}
              </li>
            </ul>
            <p>
              {t('js11')} <BoldTextSlow text="TypeScript" />{t('js12')}
            </p>
          </article>

        </CardIT>

        <CardIT icon="python" >
          <article>
            <p>
              <BoldTextSlow text="Python" /> {t('py0')}
            </p>
            <p>
              {t('py1')} <BoldTextSlow text="automatizar tareas" /> {t('py2')}
            </p>
            <p>
              {t('py3')}
            </p>
            <p>
              {t('py4')}
              Por esta razón, muchos de mis servicios y soluciones comienzan desarrollándose en Python durante su fase inicial. Sin embargo, a medida que los proyectos maduran y exigen mayor robustez, escalabilidad o control, suelo migrarlos a otros lenguajes más estructurados, como <BoldTextSlow text="C#"/>{t('py5')}<BoldTextSlow text="TypeScript"/>.
            </p>
          </article>

        </CardIT>
        <CardIT icon="rasberry" >
          <article>
            <p>
              {t('rpi0')} <BoldTextSlow text="microcomputador " />{t('rpi1')} <BoldTextSlow text="GPIO" />{t('rpi2')}
            </p>
            <p>
              {t('rpi3')}
            </p>
            <p>
              {t('rpi4')} <BoldTextSlow text="ESP-32 " />{t('rpi5')}
            </p>
            <span className="text-sm group-hover:underline font-light">{t('rpi6')}</span>
          </article>

        </CardIT>
      </section>
      <section id="interesesYEspecializacion" className="mt-12">
        <h3 className="text-5xl underline my-10">Algunos de mis trabajos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {proyectosMuestraData && proyectosMuestraData.map(x => <CardTT {...x} key={x.title} />)}
        </div>
      </section>
      <div className="mt-20 min-h-[30vh]"></div>
    </div>
  );
}
