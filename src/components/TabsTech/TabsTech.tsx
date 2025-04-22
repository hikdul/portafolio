"use client"

import { useTranslations } from 'next-intl';
import './style.css'
import { BoldTextSlow } from '../BoldTextSlow/BoldTextSlow';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const TabsTech = () => {

    const t = useTranslations('HomePage')
    
    const [scAct, setscact] = useState<string>('cs')

    const selected = (text: string) => {
        setscact(text)
    }

    return (
        <div className="">
            <ul className="header flex flex-row w-full justify-between">
                <li onClick={() => selected('cs')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500 rounded-tl-lg', scAct === 'cs' && 'active')}>c#</li>
                <li onClick={() => selected('js')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'js' && 'active')}>js</li>
                <li onClick={() => selected('py')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'py' && 'active')}>python</li>
                <li onClick={() => selected('rs')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500', scAct === 'rs' && 'active')}>rush</li>
                <li onClick={() => selected('rasp')} className={cn('py-5 cursor-pointer w-full flex justify-center border-2 border-b-0 border-green-400 bg-green-400 hover:bg-green-500 duration-500 rounded-tr-lg', scAct === 'rasp' && 'active')}>raspberry</li>
            </ul>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'cs' && 'hidden')}>
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
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'js' && 'hidden')}>
                js
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'py' && 'hidden')}>
                py
            </div>

            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'rs' && 'hidden')}>
                rush
            </div>
            <div className={cn("content py-5 px-2 border-2 border-t-0 border-green-400 rounded-bl-lg rounded-br-lg", scAct !== 'rasp' && 'hidden')}>
                cereza
            </div>
        </div>
    )

}



export default TabsTech;