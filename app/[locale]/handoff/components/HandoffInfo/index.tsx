import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from 'cn';
import SectionTop from '@/components/SectionTop';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import ArrowRight from '@/components/Icons/ArrowRight';
import { Separator } from '@/components/ui/separator';
import RevealOnScroll from '@/components/RevealOnScroll';

const listKeys = [
  'listItemOne',
  'listItemTwo',
  'listItemThree',
  'listItemFour',
] as const;

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
    showListOnMobile: true,
    descriptionClassName: 'max-lg:mb-6.5',
  },
  {
    key: 'stepThree',
    side: 'right',
    vector: 'left',
    hasLine: true,
    showListOnDesktop: true,
    className: 'lg:-mt-5',
  },
  {
    key: 'stepFour',
    side: 'right',
    vector: 'left',
    hasLine: false,
    hasButton: true,
    descriptionClassName: 'mb-10 lg:mb-2',
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

function StepText({
  label,
  title,
  description,
  descriptionClassName,
  className,
  children,
}: {
  label: string;
  title: string;
  description: string;
  descriptionClassName?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('mt-14', className)}>
      <SectionTop hasSeparator={false} text={label} className="mb-2" />
      <Title className="tracking-[-1.455px] mb-2" variant="blue-gray">
        {title}
      </Title>
      <Description
        size="2xl"
        className={cn('leading-[110%]', descriptionClassName)}
      >
        {description}
      </Description>
      {children}
    </div>
  );
}

function ListItems({
  items,
  className,
  itemClassName,
}: {
  items: {
    caption: string;
    title: string;
    subTitle: string;
    description: string;
  }[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn('space-y-1', className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className={cn(
            'bg-blue-gray rounded-2xl lg:min-h-30 flex flex-col justify-end',
            itemClassName
          )}
        >
          <div className="grid lg:grid-cols-[1fr_1fr] gap-4 items-center">
            <div>
              <Description variant="blue-gray-dark/50" className="mb-0.25">
                {item.caption}
              </Description>

              <Description
                variant="blue-gray-dark/50"
                className="tracking-[-1.455px]"
                size="48"
              >
                {item.title}
              </Description>
            </div>
            <div>
              <Description
                className="font-medium tracking-[-1.455px]"
                variant="blue-gray-dark/50"
              >
                {item.subTitle}
              </Description>
              <Description className="tracking-[-1.455px]">
                {item.description}
              </Description>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HandoffInfo() {
  const t = await getTranslations('HandoffInfo');
  const listItems = listKeys.map((key) => ({
    caption: t(`${key}.caption`),
    title: t(`${key}.title`),
    subTitle: t(`${key}.subTitle`),
    description: t(`${key}.description`),
  }));

  return (
    <section className="mb-16 lg:mb-25 overflow-hidden">
      <div className="container">
        {steps.map((step) => {
          const content = (
            <StepText
              label={t(`${step.key}.label`)}
              title={t(`${step.key}.title`)}
              description={t(`${step.key}.description`)}
              descriptionClassName={
                'descriptionClassName' in step
                  ? step.descriptionClassName
                  : undefined
              }
              className={cn(
                step.side === 'right' && 'lg:pl-1.75',
                step.side === 'left' && 'max-lg:order-2'
              )}
            >
              {'showListOnMobile' in step && step.showListOnMobile && (
                <ListItems
                  items={listItems}
                  className="lg:hidden"
                  itemClassName="p-4"
                />
              )}
              {'hasButton' in step && step.hasButton && (
                <div className="text-right">
                  <Button
                    render={<Link href="/coverage" />}
                    variant="secondary"
                    className="max-md:w-full"
                  >
                    {t('link')}
                    <ArrowRight color="currentColor" />
                  </Button>
                </div>
              )}
            </StepText>
          );

          return (
            <RevealOnScroll
              key={step.key}
              className={cn(
                'grid grid-cols-[46px_1fr] lg:grid-cols-[1fr_46px_1fr]',
                'className' in step && step.className
              )}
            >
              {step.side === 'left' ? (
                content
              ) : 'showListOnDesktop' in step && step.showListOnDesktop ? (
                <ListItems
                  items={listItems}
                  className="pt-10 pr-3.25 max-lg:hidden"
                  itemClassName="px-4 lg:px-2 py-6 lg:py-4"
                />
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
