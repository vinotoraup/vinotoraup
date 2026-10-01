import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import ArrowRight from '@/components/Icons/ArrowRight';
import SectionTop from '@/components/SectionTop';

export default async function UseCasesOtherServices() {
  const t = await getTranslations('UseCasesOtherServices');

  return (
    <section className="mb-16 lg:mb-25">
      <div className="container">
        <SectionTop text={t('sectionTop')} />
        <div className="grid grid-cols-1 lg:grid-cols-[114px_0.68917fr] items-start gap-6 justify-between">
          <div>
            <Image
              src="/icons/icon-unknown.svg"
              width={114}
              height={114}
              alt="Image"
            />
          </div>
          <div>
            <Description className="mb-6">{t('description')}</Description>

            <Button
              render={<Link href="/coverage" />}
              variant="secondary"
              className="max-md:w-full"
            >
              {t('link')}
              <ArrowRight color="currentColor" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
