import { getTranslations } from "next-intl/server";

export default async function Home() {

  const t = await getTranslations('HomePage')

  return (
    <div className="min-h-[68vh] ">
      <div className="flex flex-col items-center justify-center m-auto w-full h-full">
        <h2>{t('hikdul')}</h2>
        <p>{t('title')}</p>
        <p>{t('about')}</p>
      </div>
    </div>
  );
}
