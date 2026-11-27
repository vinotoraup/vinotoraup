import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import PageHero from '@/components/PageHero';
import TestimonialsVoices from '@/app/[locale]/testimonials/TestimonialsVoices';
import TestimonialsDepartments from '@/app/[locale]/testimonials/TestimonialsDepartments';
import TestimonialsAchievement from '@/app/[locale]/testimonials/TestimonialsAchievement';
import PageCta from '@/components/PageCta';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('testimonials');
}

// Testimonials.
export default async function TestimonialsPage() {
  const t = await getTranslations('TestimonialsHero');
  const tJoin = await getTranslations('TestimonialsJoin');

  return (
    <>
      <PageHero
        title={
          <>
            {t('titleStart')}{' '}
            <span className="inline-block">{t('titleHighlight')}</span>
          </>
        }
        description={t('description')}
        button={{ label: t('button'), href: '/work-with-us' }}
      />
      <TestimonialsVoices />
      <TestimonialsDepartments />
      <TestimonialsAchievement />
      <PageCta
        title={{ highlight: tJoin('titleOne'), rest: tJoin('titleTwo') }}
        description={[tJoin('descriptionOne'), tJoin('descriptionTwo')]}
        button={{ label: tJoin('button'), href: '/opportunities' }}
      />
    </>
  );
}
