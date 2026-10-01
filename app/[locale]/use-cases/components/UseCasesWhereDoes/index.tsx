import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import ArrowRight from '@/components/Icons/ArrowRight';
import { contactFormHref } from '@/data/contact';

export default async function UseCasesWhereDoes() {
  const t = await getTranslations('UseCasesWhereDoes');

  return (
    <section>
      <div className="container">
        <div className="bg-blue-gray rounded-2xl px-4 py-6 lg:py-4 flex flex-col justify-center items-center lg:min-h-92">
          <Title
            className="tracking-[-1.455px] [&_span]:text-light-gray mb-4 max-w-196.25 text-center"
            variant="blue-gray-dark"
          >
            <span>{t('titleOne')}</span> {t('titleTwo')}
          </Title>

          <Description className="mb-8 max-w-154.5 text-center">
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
      </div>
    </section>
  );
}
