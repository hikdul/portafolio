import { BoldTextSlow, CardIT, CardTT } from "@/components";
import { getTranslations } from "next-intl/server";
import { FaArrowRightLong, FaBriefcase } from 'react-icons/fa6'
import Image from "next/image";
import Link from "next/link";
import TabsTech from "@/components/TabsTech/TabsTech";


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

const proyectosMuestraData: areasTrabProps[] = [
  { title: "Rusquito", desc: "rustquito", imgUrl: 'https://asispass.com/img/logo.png', urlTo: 'https://github.com/hikdul/rusquito' },
  { title: "Trendbas", desc: "trendbas", imgUrl: 'https://trendbas.com/img/logo.svg', urlTo: 'https://trendbas.com' },
  { title: "AsisPass", desc: "asispass", imgUrl: 'https://asispass.com/img/logo.png', urlTo: 'https://asispass.com' }
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
        <TabsTech />
      </section>
      <section id="interesesYEspecializacion" className="mt-12">
        <h3 className="text-5xl underline my-10">Algunos de mis trabajos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {proyectosMuestraData && proyectosMuestraData.map(x => <CardTT {...x} key={x.title} />)}
        </div>
        <div className=" group mt-3 w-full h-full flex justify-center items-center mb-0">
          <Link className="bg-green-400 text-white group-hover:text-[#333] p-1 rounded w-full flex justify-center items-center hover:bg-green-300" href={"/Proyectos"}   >
            <div className="flex gap-1 items-center ">
              {t('seePort')} <FaArrowRightLong /> <FaBriefcase className="group-hover:text-2xl" />
            </div>
          </Link>
        </div>
      </section>
      <div className="mt-20 min-h-[30vh]"></div>
    </div>
  );
}
