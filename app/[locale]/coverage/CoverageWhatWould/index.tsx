import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import ArrowRight from '@/components/Icons/ArrowRight';
import { contactFormHref } from '@/data/contact';

export default async function CoverageWhatWould() {
  const t = await getTranslations('CoverageWhatWould');

  return (
    <section className="px-3.25 md:px-6">
      <div className="bg-blue-gray rounded-2xl px-4 py-6 lg:py-4 flex flex-col justify-center items-center lg:min-h-92">
        <Title
          className="tracking-[-1.455px] [&_span]:text-light-gray mb-4"
          variant="blue-gray-dark"
        >
          <span>{t('titleOne')}</span> {t('titleTwo')}
        </Title>

        <Description className="tracking-[-0.5px] mb-8">
          {t('description')}
        </Description>

        <Button
          render={<Link href={contactFormHref} />}
          variant="secondary"
          className="max-md:w-full"
        >
          {t('link')}
          <ArrowRight color="currentColor" />
        </Button>
      </div>
    </section>
  );
}
