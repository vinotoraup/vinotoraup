import type { Metadata } from 'next';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import HomeTakeRecurring from '@/app/[locale]/(home)/HomeTakeRecurring';
import HomeMission from '@/app/[locale]/(home)/HomeMission';
import HomeContribute from '@/app/[locale]/(home)/HomeContribute';
import HomeHandoff from '@/app/[locale]/(home)/HomeHandoff';
import HomeWhyJoin from '@/app/[locale]/(home)/HomeWhyJoin';
import HomeGrowthOpportunities from '@/app/[locale]/(home)/HomeGrowthOpportunities';
import HomeCareers from '@/app/[locale]/(home)/HomeCareers';
import HomeFaq from '@/app/[locale]/(home)/HomeFaq';
import HomeWorkWithUs from '@/app/[locale]/(home)/HomeWorkWithUs';
import HomeLetsTalk from '@/app/[locale]/(home)/HomeLetsTalk';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('home');
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTakeRecurring />
      <HomeMission />
      <HomeContribute />
      <HomeHandoff />
      <HomeWhyJoin />
      <HomeGrowthOpportunities />
      <HomeCareers />
      <HomeFaq />
      <HomeWorkWithUs />
      <HomeLetsTalk />
    </>
  );
}
