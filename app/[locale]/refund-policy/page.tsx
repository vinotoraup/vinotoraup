import { getLocale, getTranslations } from 'next-intl/server';
import TermsHero from '@/app/[locale]/terms-of-service/components/TermsHero';
import TermsContent from '@/app/[locale]/terms-of-service/components/TermsContent';
import { getRefundPolicy } from '@/data/refund-policy';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/i18n/metadata';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('refund-policy');
}

export default async function RefundPolicyPage() {
  const locale = await getLocale();
  const t = await getTranslations('RefundHero');

  return (
    <>
      <TermsHero
        title={t('title')}
        description={t.raw('description') as string[]}
      />
      <TermsContent sections={getRefundPolicy(locale)} />
    </>
  );
}
