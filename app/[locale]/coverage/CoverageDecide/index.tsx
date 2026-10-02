import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { cn } from 'cn';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import SectionTop from '@/components/SectionTop';
import ArrowRightSmall from '@/components/Icons/ArrowRightSmall';

const items = [
  {
    key: 'requests-we-can-handle',
    className: 'bg-blue-gray',
    titleClassName: 'text-blue-gray-dark',
    textClassName: 'text-blue',
  },
  {
    key: 'a-case-must-be-escalated',
    className: 'bg-blue-gray-dark',
    titleClassName: 'text-light-gray',
    textClassName: 'text-beige',
  },
  {
    key: 'information-we-can-provide',
    className: 'bg-beige',
    titleClassName: 'text-blue-gray-dark',
    textClassName: 'text-blue',
  },
  {
    key: 'owns-the-next-step',
    className: 'bg-blue',
    titleClassName: 'text-light-gray',
    textClassName: 'text-beige',
  },
] as const;

export default async function CoverageDecide() {
  const t = await getTranslations('CoverageDecide');

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
            <Title className="tracking-[-1.455px] mb-10 max-w-136.5">
              <span>{t('titleOne')}</span> {t('titleTwo')}
            </Title>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {items.map((item) => (
                <div
                  key={item.key}
                  className={cn('py-6 px-4 rounded-2xl', item.className)}
                >
                  <Description
                    size="46"
                    className={cn('tracking-[-0.5px]', item.titleClassName)}
                  >
                    {t(`${item.key}.title`)}
                  </Description>

                  <Description className={item.textClassName}>
                    {t(`${item.key}.description`)}
                  </Description>
                </div>
              ))}
            </div>

            <div className="text-right">
              <Button
                render={<Link href="/handoff" />}
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
