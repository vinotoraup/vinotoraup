import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';

const items = [
  {
    key: 'start-with-requests',
    image: 'icons/icon-unknown-one.svg',
    className: 'bg-blue-gray',
    textClassName: undefined,
  },
  {
    key: 'keep-follow-ups-moving',
    image: 'icons/icon-unknown-two.svg',
    className: 'bg-blue',
    textClassName: 'text-white',
  },
  {
    key: 'cover-more-than-calls',
    image: 'icons/icon-unknown-three.svg',
    className: 'bg-beige',
    textClassName: undefined,
  },
] as const;

export default async function CoverageStartRequest() {
  const t = await getTranslations('CoverageStartRequest');

  return (
    <div className="mb-16 lg:mb-25">
      <div className="grid lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.key}
            className={cn(
              'py-10 px-6 lg:px-10 flex flex-col gap-8 lg:gap-22',
              item.className
            )}
          >
            <div>
              <Image src={item.image} alt="Icon" width={114} height={114} />
            </div>

            <div>
              <Title
                as="p"
                size="h3"
                className={cn('mb-2 tracking-[-0.177px]', item.textClassName)}
              >
                {t(`${item.key}.title`)}
              </Title>

              <Description
                className={cn('leading-[154.375%]', item.textClassName)}
              >
                {t(`${item.key}.description`)}
              </Description>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
