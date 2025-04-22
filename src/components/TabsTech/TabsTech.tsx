"use client"

import { useTranslations } from 'next-intl';
import './style.css'
import { BoldTextSlow } from '../BoldTextSlow/BoldTextSlow';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DynamicIcon } from '../DynamicIcon/DynamicIcon';

const TabsTech = () => {

    const t = useTranslations('HomePage')

    const [scAct, setscact] = useState<string>('cs')

    const selected = (text: string) => {
        setscact(text)
    }

    return (
        <div className="">
            <ul className="header flex flex-row w-full justify-between">
                <li onClick={() => selected('cs')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500 rounded-tl-lg', scAct === 'cs' && 'active')}>
                    <DynamicIcon name='dotnet' className={cn("text-4xl bg-transparent text-white p-0 m-0 rounded duration-300", scAct === 'cs' && 'active')} />
                </li>
                <li onClick={() => selected('js')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'js' && 'active')}>
                    <DynamicIcon name='js' className={cn("text-4xl bg-transparent text-white p-0 m-0 rounded duration-300", scAct === 'js' && 'active')} />
                </li>
                <li onClick={() => selected('py')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'py' && 'active')}>
                    <DynamicIcon name='python' className={cn("text-4xl bg-transparent text-white p-0 m-0 rounded duration-300", scAct === 'py' && 'active')} />
                </li>
                <li onClick={() => selected('rs')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'rs' && 'active')}>
                    <DynamicIcon name='rust' className={cn("text-4xl bg-transparent text-white p-0 m-0 rounded duration-300", scAct === 'rs' && 'active')} />
                </li>
                <li onClick={() => selected('rasp')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500 rounded-tr-lg', scAct === 'rasp' && 'active')}>
                    <DynamicIcon name='rasberry' className={cn("text-4xl bg-transparent text-white p-0 m-0 rounded duration-300", scAct === 'rasp' && 'active')} />
                </li>
            </ul>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'cs' && 'hidden')}>
                <article>
                    <p>
                        <BoldTextSlow text=".NET" /> y <BoldTextSlow text="C#" /> {t('dotnet0')}
                    </p>
                    <br></br>
                    <p>
                        {t('dotnet1')}
                    </p>
                    <br></br>
                    <p>
                        {t('dotnet2')}
                    </p>
                    <br></br>
                    <p>
                        {t('dotnet3')}
                    </p>
                </article>
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'js' && 'hidden')}>
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
                    <br></br>
                    <p>
                        {t('js11')} <BoldTextSlow text="TypeScript" />{t('js12')}
                    </p>
                </article>
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'py' && 'hidden')}>
                <article>
                    <p>
                        <BoldTextSlow text="Python" /> {t('py0')}
                    </p>
                    <br></br>
                    <p>
                        {t('py1')} <BoldTextSlow text="automatizar tareas" /> {t('py2')}
                    </p>
                    <br></br>
                    <p>
                        {t('py3')}
                    </p>
                    <br></br>
                    <p>
                        {t('py4')}
                        Por esta razón, muchos de mis servicios y soluciones comienzan desarrollándose en Python durante su fase inicial. Sin embargo, a medida que los proyectos maduran y exigen mayor robustez, escalabilidad o control, suelo migrarlos a otros lenguajes más estructurados, como <BoldTextSlow text="C#" />{t('py5')}<BoldTextSlow text="TypeScript" />.
                    </p>
                </article>
            </div>

            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'rs' && 'hidden')}>
                <article>
                    <p>
                        {t('rs0')} <BoldTextSlow text="Rust" /> {t('rs1')}
                    </p>
                    <br></br>
                    <p>
                        {t('rs2')}
                    </p>
                    <br></br>
                    <p>
                        {t('rs3')}
                    </p>
                    <br></br>
                    <p>
                        {t('rs4')}
                    </p>
                </article>
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'rasp' && 'hidden')}>
                <article>
                    <p>
                        {t('rpi0')} <BoldTextSlow text="microcomputador " />{t('rpi1')} <BoldTextSlow text="GPIO" />{t('rpi2')}
                    </p>
                    <br></br>
                    <p>
                        {t('rpi3')}
                    </p>
                    <br></br>
                    <p>
                        {t('rpi4')} <BoldTextSlow text="ESP-32 " />{t('rpi5')}
                    </p>
                    <span className="text-sm group-hover:underline font-light">{t('rpi6')}</span>
                </article>
            </div>
        </div>
    )

}



export default TabsTech;