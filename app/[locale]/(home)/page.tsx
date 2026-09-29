import type { Metadata } from 'next';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import HomeTakeRecurring from '@/app/[locale]/(home)/HomeTakeRecurring';
import HomeSupport from '@/app/[locale]/(home)/HomeSupport';
import HomeHandoff from '@/app/[locale]/(home)/HomeHandoff';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('home');
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTakeRecurring />
      <HomeSupport />
      <HomeHandoff />
    </>
  );
}
