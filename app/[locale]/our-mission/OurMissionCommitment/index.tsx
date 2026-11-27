import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import {
  Reveal,
  RevealClip,
  RevealItem,
  RevealLine,
  RevealWords,
} from '@/components/Motion';

// Our Commitment. Duplicated from the home Services block: head without a
// description (so no two-column grid), then two cards styled like the
// Services cards two (Prime) and three (Additional), same icons.
const cards = [
  {
    key: 'employees',
    // Phone: top corners; tablet / desktop: left corners.
    radius: 'rounded-t-3xl md:rounded-none md:rounded-l-3xl',
    className: 'bg-prime',
    textClassName: 'text-background',
    icon: '/icons/business-2.svg',
  },
  {
    key: 'partners',
    // Phone: bottom corners; tablet / desktop: right corners.
    radius: 'rounded-b-3xl md:rounded-none md:rounded-r-3xl',
    className: 'bg-additional',
    textClassName: 'text-prime',
    icon: '/icons/business-3.svg',
  },
] as const;

// Standard reveal: divider draws → tag fades → title words rise one by one.
const TITLE_DELAY = 100;

// Cards wipe in from the bottom (clip-path), 500 ms each, 100 ms apart.
const CARD_DELAY = 100;
const CARD_STAGGER = 100;
const CARD_DURATION = 500;

export default async function OurMissionCommitment() {
  const t = await getTranslations('OurMissionCommitment');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        <div className="mb-8 md:mb-10 lg:mb-14">
          <RevealItem distance={0} className="mb-5 md:mb-6">
            <SectionTop text={t('sectionTop')} hasSeparator={false} />
          </RevealItem>

          <Title>
            <RevealWords parts={title} delay={TITLE_DELAY} />
          </Title>
        </div>

        {/* Cards reveal on their own, further down the page. */}
        <Reveal>
          {/* Two columns from tablet up, one on phones, no gaps. Corner
              cards round the outer corners themselves (no clipping wrapper),
              so a card lifted on hover isn't cut off. Each card spans 4 rows
              via subgrid (icon, stretchy spacer, title, copy) so titles and
              copy line up across the row. */}
          <div className="grid auto-rows-[auto_1fr_auto_auto] md:grid-cols-2">
            {cards.map((card, index) => (
              <RevealClip
                key={card.key}
                delay={CARD_DELAY + index * CARD_STAGGER}
                duration={CARD_DURATION}
                className={cn(
                  // 420 px on desktop, natural height on tablet and phone.
                  // Padding 48 desktop, 40/32 tablet, 40/24 phone.
                  // Hover (tap on phones) lifts the card 8 px.
                  'group/line row-span-4 grid grid-rows-subgrid gap-0 px-6 py-10 md:px-8 lg:h-105 lg:p-12 transition-[translate] duration-300 motion-safe:hover:-translate-y-2 motion-safe:active:-translate-y-2',
                  card.radius,
                  card.className
                )}
              >
                {/* At least 18 px between icon and title; hover scales the
                    illustration up (no idle rotation here). */}
                <Image
                  src={card.icon}
                  width={96}
                  height={96}
                  alt=""
                  className="mb-4.5 transition-[scale] duration-300 motion-safe:group-hover/line:scale-[1.08] motion-safe:group-active/line:scale-[1.08]"
                />

                <Title
                  as="h4"
                  className={cn('row-start-3 mb-3', card.textClassName)}
                >
                  {t(`cards.${card.key}.title`)}
                </Title>
                <Description
                  className={cn(
                    'row-start-4 text-base leading-6',
                    card.textClassName
                  )}
                >
                  {t(`cards.${card.key}.description`)}
                </Description>
              </RevealClip>
            ))}
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
