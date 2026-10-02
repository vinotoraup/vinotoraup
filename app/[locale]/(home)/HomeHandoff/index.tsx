import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/i18n/navigation';
import { contactFormHref } from '@/data/contact';
import ArrowRight from '@/components/Icons/ArrowRight';

const items = [
  {
    key: 'fintech',
    image: '/icons/icon-unknown-one.svg',
    href: '/handoff',
    className: 'bg-blue-gray',
    textClassName: undefined,
    linkClassName: 'text-blue',
    arrowColor: undefined,
  },
  {
    key: 'lending',
    image: '/icons/icon-unknown-two.svg',
    href: '/people',
    className: 'bg-blue',
    textClassName: 'text-white',
    linkClassName: 'text-white',
    arrowColor: '#FFF',
  },
  {
    key: 'insurance',
    image: '/icons/icon-unknown-three.svg',
    href: contactFormHref,
    className: 'bg-beige',
    textClassName: undefined,
    linkClassName: 'text-blue',
    arrowColor: undefined,
  },
] as const;

export default async function HomeHandoff() {
  const t = await getTranslations('HomeHandoff');

  return (
    <div className="lg:mb-25">
      <Separator className="mb-10 max-lg:hidden" />

      <div className="grid lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.key}
            className={cn(
              'p-10 max-lg:px-6 flex flex-col justify-between gap-2',
              item.className
            )}
          >
            <div>
              <div className="mb-2">
                <Image src={item.image} alt="Icon" width={114} height={114} />
              </div>

              <Title
                as="p"
                size="h3"
                className={cn('mb-2', item.textClassName)}
              >
                {t(`${item.key}.title`)}
              </Title>

              <Description
                className={cn('leading-[154.375%]', item.textClassName)}
              >
                {t(`${item.key}.description`)}
              </Description>
            </div>

            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-2 justify-center lg:justify-end px-4 py-6 text-base font-medium leading-none',
                item.linkClassName
              )}
            >
              {t(`${item.key}.link`)}
              <ArrowRight color={item.arrowColor} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
