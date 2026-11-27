import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import OurMissionValues from '@/app/[locale]/our-mission/OurMissionValues';
import OurMissionCareer from '@/app/[locale]/our-mission/OurMissionCareer';
import OurMissionCommitment from '@/app/[locale]/our-mission/OurMissionCommitment';
import PageCta from '@/components/PageCta';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('our-mission');
}

// Our Mission (formerly Coverage).
export default async function OurMissionPage() {
  const t = await getTranslations('OurMissionHero');
  const tJoin = await getTranslations('OurMissionJoin');

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
        button={{ label: t('button'), href: '/opportunities' }}
      />
      <OurMissionValues />
      <OurMissionCareer />
      <OurMissionCommitment />
      <PageCta
        title={{ highlight: tJoin('titleOne'), rest: tJoin('titleTwo') }}
        description={tJoin('description')}
        button={{ label: tJoin('button') }}
      />
    </>
  );
}
