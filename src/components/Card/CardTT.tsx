import { getTranslations } from "next-intl/server"

interface props {
  title: string
  desc: string
  tech: string[]
}
const CardTT = async ({ title, desc, tech }: props) => {

  const t = await getTranslations('trabajoYtecnologias')
  return (

    <div className="group card border-t-0 borde-l-0 border-r-2 border-b-2 border-green-400  rounded-none rounded-br-lg p-1 w-full h-full min-h-[20vh] delay-100">
      <div className="group-hover:bg-green-400 p-1 rounded">
        <div className="group-hover:text-white font-bold my-3  ">{title}</div>
        <div className="h-0.5 w-[40%] bg-green-400 group-hover:bg-white "></div>
        <div className="group-hover:text-white">
          <p>
            {t(desc)}
          </p>
        </div>
      </div>
      <div className=" w-full h-full my-3 items-end justify-end">
        {tech}
      </div>
    </div>
  )
}

export {
  CardTT
}