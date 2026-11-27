import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import PageHero from '@/components/PageHero';
import ServicesLines from '@/app/[locale]/services/ServicesLines';
import ServicesApproach from '@/app/[locale]/services/ServicesApproach';
import ServicesBehind from '@/app/[locale]/services/ServicesBehind';
import ServicesPaths from '@/app/[locale]/services/ServicesPaths';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('services');
}

// Services.
export default async function ServicesPage() {
  const t = await getTranslations('ServicesHero');

  return (
    <>
      <PageHero
        title={
          <>
            {t('titleStart')}{' '}
            <span className="inline-block">{t('titleHighlight')}</span>
          </>
        }
        description={t('description')}
        button={{ label: t('button'), href: '/our-mission' }}
      />
      <ServicesLines />
      <ServicesApproach />
      <ServicesBehind />
      <ServicesPaths />
    </>
  );
}
