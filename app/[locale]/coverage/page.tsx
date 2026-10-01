import GlobalHero from '@/components/GlobalHero';
import { getTranslations } from 'next-intl/server';
import CoverageWhatHandle from '@/app/[locale]/coverage/CoverageWhatHandle';
import CoverageStartRequest from '@/app/[locale]/coverage/CoverageStartRequest';
import CoverageDecide from '@/app/[locale]/coverage/CoverageDecide';
import CoverageKeepCustomer from '@/app/[locale]/coverage/CoverageKeepCustomer';
import CoverageChangeScope from '@/app/[locale]/coverage/CoverageChangeScope';
import CoverageWhatWould from '@/app/[locale]/coverage/CoverageWhatWould';

export default async function CoveragePage() {
  const t = await getTranslations('coveragePage');

  return (
    <>
      <GlobalHero
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        description={t('description')}
        link={t('link')}
        imageSrc="/images/coverage/hero.png"
        imageSrcMobile="/images/coverage/hero-mobile.png"
      />
      <CoverageWhatHandle />
      <CoverageStartRequest />
      <CoverageDecide />
      <CoverageKeepCustomer />
      <CoverageChangeScope />
      <CoverageWhatWould />
    </>
  );
}
