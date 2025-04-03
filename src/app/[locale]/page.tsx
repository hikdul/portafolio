import { CardTT } from "@/components";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {

  const t = await getTranslations('HomePage')

  return (
    <div className="min-h-[68vh] mt-5">
      <section id="presentacion" >
        <div className="flex flex-row gap-2 items-center justify-center m-auto w-full h-full">
          <Image
            className=""
            src="/img/face_chibi.png"
            alt="foto personal"
            width={300}
            height={300}
          />
          <div className="leading-2 md:leading-4 xl:leading-8">
            <p>{t('title')} {t('text1')}  </p>
            <p>{t('text2')}</p>
            <p>{t('text3')}</p>
            <p>{t('text4')}</p>
          </div>

        </div>
      </section>

      <section id="trabajoYtecnologias" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2">
          <CardTT title="Backend" desc="backend" tech={[".net","NodeJs", "Next"]}/>
          <CardTT title="FrontEnd" desc="frontEnd" tech={["MVC","React"]}/>
          <CardTT title="Clound" desc="cloud" tech={["AWS", "vercel"]}/>
          <CardTT title="otros" desc="otros" tech={["python","rust", "js", "ts", "C#"]}/>

        </div>
      </section>
      <section id="interesesYTecnologias" className="mt-12">
        <p>Hablar de los intereses y tecnologias que me atraen y puede que del area especializada</p>
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
