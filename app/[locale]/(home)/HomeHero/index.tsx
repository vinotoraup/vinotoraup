import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';

export default async function HomeHero() {
  const t = await getTranslations('HomeHero');

  return (
    <PageHero
      title={
        <>
          {t('titleStart')}{' '}
          <span className="inline-block">{t('titleHighlight')}</span>{' '}
          {t('titleEnd')}
        </>
      }
      description={t('description')}
      button={{ label: t('button'), href: '/opportunities' }}
    />
  );
}
