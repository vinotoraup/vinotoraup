import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
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
import { wordsDuration } from '@/components/Motion/timing';

// Business lines. Illustrations are drawn dark on the light cards and
// light on the dark ones; text follows the same pattern.
const lines = [
  {
    key: 'one',
    radius:
      'rounded-t-3xl md:rounded-none md:rounded-tl-3xl lg:rounded-none lg:rounded-l-3xl',
    className: 'bg-tertiary',
    textClassName: 'text-prime',
    icon: '/icons/business-1.svg',
  },
  {
    key: 'two',
    radius: 'md:rounded-tr-3xl lg:rounded-none',
    className: 'bg-prime',
    textClassName: 'text-background',
    icon: '/icons/business-2.svg',
  },
  {
    key: 'three',
    radius: 'md:rounded-bl-3xl lg:rounded-none',
    className: 'bg-additional',
    textClassName: 'text-prime',
    icon: '/icons/business-3.svg',
  },
  {
    key: 'four',
    radius:
      'rounded-b-3xl md:rounded-none md:rounded-br-3xl lg:rounded-none lg:rounded-r-3xl',
    className: 'bg-secondary',
    textClassName: 'text-background',
    icon: '/icons/business-4.svg',
  },
] as const;

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Cards wipe in from the bottom, 600 ms each, 100 ms apart.
const CARD_DELAY = 100;
const CARD_STAGGER = 100;

export default async function HomeHandoff() {
  const t = await getTranslations('HomeHandoff');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];
  const copyDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* 704 / 480 columns on desktop, bottoms aligned; stacked below. */}
        <div className="grid items-end gap-5 md:gap-6 lg:grid-cols-[704fr_480fr] lg:gap-20 mb-8 md:mb-10 lg:mb-14">
          <div>
            <RevealItem distance={0} className="mb-5 md:mb-6">
              <SectionTop text={t('sectionTop')} hasSeparator={false} />
            </RevealItem>

            <Title>
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>
          </div>

          <div className="space-y-5 md:space-y-4">
            <RevealItem delay={copyDelay}>
              <Description className="text-base leading-6">
                {t('descriptionOne')}
              </Description>
            </RevealItem>
            <RevealItem delay={copyDelay}>
              <Description className="text-base leading-6">
                {t('descriptionTwo')}
              </Description>
            </RevealItem>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Cards and button reveal on their own, further down the page. */}
        <Reveal>
          {/* 4 columns on desktop, 2 on tablet, 1 on phone, no gaps.
              The outer corners of the whole set are rounded by the corner
              cards themselves (no clipping wrapper), so a card lifted on
              hover isn't cut off.
              Every card spans 4 rows of this grid via subgrid: icon, a
              stretchy spacer, title, copy. Titles of different lengths then
              still line up across a row, and so does the copy. */}
          <div className="grid auto-rows-[auto_1fr_auto_auto] md:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-10 lg:mb-14">
            {lines.map((line, index) => (
              <RevealClip
                key={line.key}
                delay={CARD_DELAY + index * CARD_STAGGER}
                className={cn(
                  // 420 px on desktop, natural height on tablet and phone.
                  // Hover (tap on phones) lifts the card 8 px.
                  'group/line row-span-4 grid grid-rows-subgrid gap-0 px-6 py-8 md:px-8 md:py-10 lg:h-105 transition-[translate] duration-300 motion-safe:hover:-translate-y-2 motion-safe:active:-translate-y-2',
                  line.radius,
                  line.className
                )}
              >
                {/* At least 18 px between icon and title, also where the
                    spacer row collapses (no fixed height).
                    From tablet up the illustration turns slowly (360° per
                    40 s); hover scales it up. */}
                <Image
                  src={line.icon}
                  width={96}
                  height={96}
                  alt=""
                  className="mb-4.5 transition-[scale] duration-300 md:motion-safe:animate-[spin_40s_linear_infinite] motion-safe:group-hover/line:scale-[1.08] motion-safe:group-active/line:scale-[1.08]"
                />

                <Title
                  as="h4"
                  className={cn('row-start-3 mb-3', line.textClassName)}
                >
                  {t(`lines.${line.key}.title`)}
                </Title>
                <Description
                  className={cn(
                    'row-start-4 text-base leading-6',
                    line.textClassName
                  )}
                >
                  {t(`lines.${line.key}.description`)}
                </Description>
              </RevealClip>
            ))}
          </div>

          <RevealItem
            delay={CARD_DELAY + lines.length * CARD_STAGGER}
            // Right on desktop, left on tablet and phone.
            className="flex lg:justify-end"
          >
            <Button size="cta" render={<Link href="/services" />}>
              {t('button')}
              <ArrowRight16 color="currentColor" />
            </Button>
          </RevealItem>
        </Reveal>
      </div>
    </Reveal>
  );
}
