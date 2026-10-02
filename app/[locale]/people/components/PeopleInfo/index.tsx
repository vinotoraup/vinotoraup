import Image from 'next/image';
import { cn } from 'cn';
import SectionTop from '@/components/SectionTop';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { getTranslations } from 'next-intl/server';
import { Separator } from '@/components/ui/separator';
import RevealOnScroll from '@/components/RevealOnScroll';

const steps = [
  {
    key: 'stepOne',
    side: 'right',
    vector: 'left',
    hasLine: true,
  },
  {
    key: 'stepTwo',
    side: 'left',
    vector: 'right',
    hasLine: true,
  },
  {
    key: 'stepThree',
    side: 'right',
    vector: 'left',
    hasLine: false,
  },
] as const;

function TimelineMarker({
  vector,
  hasLine,
}: {
  vector: 'left' | 'right';
  hasLine?: boolean;
}) {
  return (
    <div className={cn('relative', vector === 'right' && 'max-lg:order-1')}>
      <Image
        src="/icons/icon-unknown-five.svg"
        width={46}
        height={46}
        alt="Image"
      />
      <div
        className={cn(
          'absolute top-5.75 z-1 w-83.75 lg:w-133.5',
          vector === 'left' && 'left-5.75',
          vector === 'right' &&
            'left-5.75 lg:left-[unset] lg:right-5.75 lg:rotate-[180deg]'
        )}
      >
        <Image src="/icons/vector-4.svg" width={534} height={1} alt="Image" />
      </div>
      {hasLine && (
        <Separator
          orientation="vertical"
          className="absolute h-full left-1/2 -translate-x-1/2 top-9"
        />
      )}
    </div>
  );
}

export default async function PeopleInfo() {
  const t = await getTranslations('PeopleInfo');

  return (
    <section className="mb-16 lg:mb-25 overflow-hidden">
      <div className="container">
        {steps.map((step, index) => {
          const content = (
            <div
              className={cn(
                'mt-14',
                step.side === 'right' && 'lg:pl-1.75',
                step.side === 'left' && 'max-lg:order-2',
                index < steps.length - 1 && 'mb-16'
              )}
            >
              <SectionTop
                hasSeparator={false}
                text={t(`${step.key}.label`)}
                className="mb-2"
              />
              <Title className="tracking-[-1.455px] mb-2" variant="blue-gray">
                {t(`${step.key}.title`)}
              </Title>
              <Description size="2xl" className="leading-[110%]">
                {t(`${step.key}.description`)}
              </Description>
            </div>
          );

          return (
            <RevealOnScroll
              key={step.key}
              className="grid grid-cols-[46px_1fr] lg:grid-cols-[1fr_46px_1fr]"
            >
              {step.side === 'left' ? (
                content
              ) : (
                <div className="max-lg:hidden" />
              )}

              <TimelineMarker vector={step.vector} hasLine={step.hasLine} />

              {step.side === 'right' ? (
                content
              ) : (
                <div className="max-lg:hidden" />
              )}
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
