import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import Description from '@/components/Description';
import Title from '@/components/Title';
import ArrowRight from '@/components/Icons/ArrowRight';
import { FadeUp } from '@/components/Motion';

// On load the H1 and intro rise 8px into place.
const RISE = 8;

export default async function HomeHero() {
  const t = await getTranslations('HomeHero');

  return (
    <section className="px-3.25 lg:px-6 relative z-1 pt-22.5 md:pt-23.5 lg:pt-24.5 rounded-3xl mb-20 md:mb-24 lg:mb-30 h-screen">
      <video
        className="absolute top-5 lg:top-6 -z-1 h-[calc(100%-20px)] lg:h-[calc(100%-24px)] w-[calc(100%-26px)] lg:w-[calc(100%-48px)] object-cover rounded-[inherit]"
        src="/video/home-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="container pt-18 pb-8 md:pt-24 md:pb-10 lg:py-16 flex flex-col justify-between h-full">
        <FadeUp distance={RISE}>
          <Title as="h1" className="max-w-250 [&_span]:text-secondary">
            {t('titleStart')}{' '}
            <span className="inline-block">{t('titleHighlight')}</span>{' '}
            {t('titleEnd')}
          </Title>
        </FadeUp>

        <div className="flex flex-wrap items-end justify-between gap-8">
          <FadeUp distance={RISE}>
            <Description className="max-w-154 text-lg leading-[120%] tracking-[-0.2px] lg:max-w-180 lg:text-2xl lg:leading-[110%] lg:tracking-[-0.5px]">
              {t('description')}
            </Description>
          </FadeUp>

          <Button
            className="max-md:w-full lg:h-13 rounded-2xl bg-prime px-4"
            size="48"
            render={<Link href="/opportunities" />}
          >
            {t('button')}
            <ArrowRight color="currentColor" />
          </Button>
        </div>
      </div>
    </section>
  );
}
