import { getLocale, getTranslations } from 'next-intl/server';
import TermsHero from '@/app/[locale]/terms-of-service/components/TermsHero';
import TermsContent from '@/app/[locale]/terms-of-service/components/TermsContent';
import { getCookiePolicy } from '@/data/cookie-policy';

export default async function CookieNoticePage() {
  const locale = await getLocale();
  const t = await getTranslations('CookieHero');

  return (
    <>
      <TermsHero
        title={t('title')}
        description={[
          t.rich('descriptionIntro', {
            website: (chunks) => (
              <a
                href="https://vinotoraup.com"
                className="inline underline underline-offset-2"
              >
                {chunks}
              </a>
            ),
          }),
          ...(t.raw('description') as string[]),
        ]}
      />
      <TermsContent sections={getCookiePolicy(locale)} />
    </>
  );
}
