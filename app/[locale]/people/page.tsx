import type { Metadata } from 'next';
import GlobalHero from '@/components/GlobalHero';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import PeopleWeWork from '@/app/[locale]/people/components/PeopleWeWork';
import PeopleClearRole from '@/app/[locale]/people/components/PeopleClearRole';
import PeopleInfo from '@/app/[locale]/people/components/PeopleInfo';
import PeopleBuiltFor from '@/app/[locale]/people/components/PeopleBuiltFor';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('people');
}

export default async function PeoplePage() {
  const t = await getTranslations('PeoplePage');

  return (
    <>
      <GlobalHero
        title={t('title')}
        titleHighlight={t('titleHighlight')}
        description={t('description')}
        link={t('link')}
        imageSrc="/images/people/hero.png"
        imageSrcMobile="/images//people/hero-mobile.png"
        imageHeight="h-86 md:h-89.25"
      />
      <PeopleWeWork />
      <PeopleClearRole />
      <PeopleInfo />
      <PeopleBuiltFor />
    </>
  );
}
