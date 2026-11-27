import { getTranslations } from 'next-intl/server';
import PageCta from '@/components/PageCta';

export default async function HomeLetsTalk() {
  const t = await getTranslations('HomeLetsTalk');

  return (
    <PageCta
      title={{ highlight: t('titleOne'), rest: t('titleTwo') }}
      description={t('description')}
      button={{ label: t('button') }}
    />
  );
}
