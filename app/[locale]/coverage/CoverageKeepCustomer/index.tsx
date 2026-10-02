import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { Separator } from '@/components/ui/separator';
import ArrowRightSmall from '@/components/Icons/ArrowRightSmall';

export default async function CoverageKeepCustomer() {
  const t = await getTranslations('CoverageKeepCustomer');

  return (
    <section className="mb-16 lg:mb-25">
      <div className="container">
        <Separator className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[114px_0.68917fr] items-start gap-6 justify-between">
          <div>
            <Image
              src="/icons/icon-unknown-four.svg"
              width={114}
              height={114}
              alt="Image"
            />
          </div>
          <div>
            <Title className="tracking-[-1.455px] mb-10">
              <span>{t('titleOne')}</span> {t('titleTwo')}
            </Title>

            <Description
              size="2xl"
              className="tracking-[-0.5px] mb-10 leading-[154.375%] lg:leading-[120%]"
            >
              {t('description')}
            </Description>

            <div className="text-right">
              <Button
                render={<Link href="/use-cases" />}
                variant="secondary"
                className="max-md:w-full"
              >
                {t('link')}
                <ArrowRightSmall color="currentColor" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
