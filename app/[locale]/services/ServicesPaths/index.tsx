import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import { Link } from '@/i18n/navigation';
import { contactFormHref } from '@/data/contact';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Reveal, RevealScale } from '@/components/Motion';

// Two calls to action, duplicated from the "Our Business Lines" cards:
// styled as Administrative Operations (Additional) and Technical
// Assistance (Secondary), without number, icon, divider or head.
const cards = [
  {
    key: 'join',
    href: '/opportunities',
    className: 'bg-additional',
    textClassName: 'text-prime',
    highlightClassName: '[&_span]:text-secondary',
  },
  {
    key: 'partner',
    href: contactFormHref,
    className: 'bg-secondary',
    textClassName: 'text-background',
    highlightClassName: '[&_span]:text-tertiary',
  },
] as const;

// Cards scale in (0.96 → 1) with a fade, 500 ms each, 100 ms apart.
const CARD_DELAY = 100;
const CARD_STAGGER = 100;
const CARD_DURATION = 500;

export default async function ServicesPaths() {
  const t = await getTranslations('ServicesPaths');

  return (
    <Reveal>
      <div className="container">
        {/* Two columns on desktop (24 px apart), one below (12 px). Each
            card spans 3 rows via subgrid (title, copy, button), 25 px
            apart, so the two cards line up. */}
        <div className="grid gap-x-6 gap-y-3 lg:grid-cols-2 lg:gap-y-6">
          {cards.map((card, index) => (
            <RevealScale
              key={card.key}
              delay={CARD_DELAY + index * CARD_STAGGER}
              duration={CARD_DURATION}
              className={cn(
                // Padding 40, 32/24 on phones; 24 px corners.
                'row-span-3 grid grid-rows-subgrid items-start gap-6.25 rounded-3xl px-6 py-8 md:p-10',
                card.className
              )}
            >
              {/* 40/44 desktop, 52/56 tablet, 36/40 phone. The opening
                  words are highlighted: Secondary on the light card,
                  Tertialy on the dark one. */}
              <Title
                as="h3"
                className={cn(
                  'text-4xl leading-10 tracking-[-0.8px] md:text-[52px] md:leading-14 md:tracking-[-1px] lg:text-[40px] lg:leading-11 lg:tracking-[-0.8px]',
                  card.textClassName,
                  card.highlightClassName
                )}
              >
                <span>{t(`${card.key}.titleOne`)}</span>{' '}
                {t(`${card.key}.titleTwo`)}
              </Title>

              <Description
                className={cn('text-base leading-6', card.textClassName)}
              >
                {t(`${card.key}.description`)}
              </Description>

              <div>
                <Button size="cta" render={<Link href={card.href} />}>
                  {t(`${card.key}.button`)}
                  <ArrowRight16 color="currentColor" />
                </Button>
              </div>
            </RevealScale>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
