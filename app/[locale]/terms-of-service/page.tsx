import { getLocale, getTranslations } from 'next-intl/server';
import TermsHero from '@/app/[locale]/terms-of-service/components/TermsHero';
import TermsContent from '@/app/[locale]/terms-of-service/components/TermsContent';
import { getTermsConditions } from '@/data/terms-conditions';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/i18n/metadata';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('terms-of-service');
}

export default async function TermsOfServicePage() {
  const locale = await getLocale();
  const t = await getTranslations('TermsHero');

  const websiteUrl =
    locale === 'es' ? 'https://vinotoraup.com/es' : 'https://vinotoraup.com';

  return (
    <>
      <TermsHero
        title={t('title')}
        description={[
          t.rich('descriptionIntro', {
            website: (chunks) => (
              <a
                href={websiteUrl}
                className="inline underline underline-offset-2"
              >
                {chunks}
              </a>
            ),
          }),
          ...(t.raw('description') as string[]),
        ]}
      />
      <TermsContent sections={getTermsConditions(locale)} />
    </>
  );
}
