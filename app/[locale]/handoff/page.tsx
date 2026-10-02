import type { Metadata } from 'next';
import GlobalHero from '@/components/GlobalHero';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HandoffKeepOpen from '@/app/[locale]/handoff/components/HandoffKeepOpen';
import HandoffReviewWhat from '@/app/[locale]/handoff/components/HandoffReviewWhat';
import HandoffReady from '@/app/[locale]/handoff/components/HandoffReady';
import HandoffInfo from '@/app/[locale]/handoff/components/HandoffInfo';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('handoff');
}

export default async function HandoffPage() {
  const t = await getTranslations('HandoffPage');

  return (
    <>
      <GlobalHero
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        description={t('description')}
        link={t('link')}
        imageSrc="/images/handoff/hero.png"
        imageSrcMobile="/images/handoff/hero-mobile.png"
        imageHeight="h-90.5 md:h-89.25"
      />
      <HandoffInfo />
      <HandoffKeepOpen />
      <HandoffReviewWhat />
      <HandoffReady />
    </>
  );
}
