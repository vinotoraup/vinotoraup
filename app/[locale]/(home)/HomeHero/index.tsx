import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import Description from '@/components/Description';
import Title from '@/components/Title';
import { contactFormHref } from '@/data/contact';

export default async function HomeHero() {
  const t = await getTranslations('HomeHero');

  return (
    <section className="px-3.25 lg:px-6 h-202 md:h-223.75 relative z-1 pt-22.5 lg:pt-31.5 rounded-3xl mb-20 lg:mb-25">
      <video
        className="absolute top-5 lg:top-6 -z-1 h-[calc(100%-20px)] lg:h-[calc(100%-24px)] w-[calc(100%-26px)] lg:w-[calc(100%-48px)] object-cover rounded-[inherit]"
        src="/video/home-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="p-16 max-lg:px-4 flex flex-col justify-between h-full">
        <Title as="h1" className="max-w-201">
          {t('title')}{' '}
          <span className="italic inline-block">{t('titleHighlight')}</span>
        </Title>

        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <Description
              size="2xl"
              className="max-w-154 max-md:tracking-[-1px]"
            >
              {t('descriptionOne')}
            </Description>
            <Description
              size="2xl"
              className="max-w-154 max-md:tracking-[-1px]"
            >
              {t('descriptionTwo')}
            </Description>
          </div>
          <Button
            className="max-md:w-full"
            render={<Link href={contactFormHref} />}
          >
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
