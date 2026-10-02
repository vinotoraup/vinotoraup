import { getLocale, getTranslations } from 'next-intl/server';
import TermsHero from '@/app/[locale]/terms-of-service/components/TermsHero';
import TermsContent from '@/app/[locale]/terms-of-service/components/TermsContent';
import { getTermsConditions } from '@/data/terms-conditions';

export default async function TermsOfServicePage() {
  const locale = await getLocale();
  const t = await getTranslations('TermsHero');

  return (
    <>
      <TermsHero
        title={t('title')}
        description={t.raw('description') as string[]}
      />
      <TermsContent sections={getTermsConditions(locale)} />
    </>
  );
}
