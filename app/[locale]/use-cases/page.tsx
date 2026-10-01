import GlobalHero from '@/components/GlobalHero';
import { getTranslations } from 'next-intl/server';
import UseCasesInfo from '@/app/[locale]/use-cases/components/UseCasesInfo';
import UseCasesOtherServices from '@/app/[locale]/use-cases/components/UseCasesOtherServices';
import UseCasesMatchCoverage from '@/app/[locale]/use-cases/components/UseCasesMatchCoverage';
import UseCasesYourBusiness from '@/app/[locale]/use-cases/components/UseCasesYourBusiness';
import UseCasesWhereDoes from '@/app/[locale]/use-cases/components/UseCasesWhereDoes';

export default async function UseCasesPage() {
  const t = await getTranslations('UseCasesPage');

  return (
    <>
      <GlobalHero
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        description={t('description')}
        link={t('link')}
        imageSrc="/images/use-cases/hero.png"
        imageSrcMobile="/images/use-cases/hero-mobile.png"
        imageHeight="h-86 md:h-89.25"
      />
      <UseCasesInfo />
      <UseCasesOtherServices />
      <UseCasesMatchCoverage />
      <UseCasesYourBusiness />
      <UseCasesWhereDoes />
    </>
  );
}
