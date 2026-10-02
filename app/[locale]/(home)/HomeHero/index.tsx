import { getTranslations } from 'next-intl/server';
import HomeHeroContent from './HomeHeroContent';

const itemKeys = [
  'itemOne',
  'itemTwo',
  'itemThree',
  'itemFour',
  'itemFive',
  'itemSix',
] as const;

export default async function HomeHero() {
  const t = await getTranslations('HomeHero');

  return (
    <section className="px-3.25 lg:px-6 relative z-1 pt-22.5 lg:pt-31.5 rounded-3xl mb-20 lg:mb-25 h-screen">
      <video
        className="absolute top-5 lg:top-6 -z-1 h-[calc(100%-20px)] lg:h-[calc(100%-24px)] w-[calc(100%-26px)] lg:w-[calc(100%-48px)] object-cover rounded-[inherit]"
        src="/video/home-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <HomeHeroContent
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        descriptionOne={t('descriptionOne')}
        descriptionTwo={t('descriptionTwo')}
        button={t('button')}
        servicesButton={t('servicesButton')}
        sectionTop={t('sectionTop')}
        items={itemKeys.map((key) => ({
          key,
          title: t(`${key}.title`),
          description: t(`${key}.description`),
        }))}
      />
    </section>
  );
}
