import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import {
  Reveal,
  RevealItem,
  RevealLine,
  RevealWords,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// What We Stand For: head like "Growing Together" on the home page, then
// the value rows (like the journey rows on the home page).

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Value rows slide in from the left, 120 ms apart: 40 px, 16 px on phones
// (same as the journey rows on the home page).
const VALUE_DELAY = 100;
const VALUE_STAGGER = 120;
const VALUE_SLIDE = { mobile: 16, tabletUp: 40 };

// Hover (tap on phones), as the journey rows on the home page:
// Tertialy → Prime, text turns light, 300 ms ease-in-out.
const inverts =
  'transition-colors duration-300 ease-in-out group-hover/row:text-background group-active/row:text-background';

const values = ['integrity', 'perspectives', 'quality', 'adaptability'];

export default async function OurMissionValues() {
  const t = await getTranslations('OurMissionValues');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];
  const copyDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* 704 / 480 columns on desktop, bottoms aligned; stacked below
            (24 px apart, 20 on phones). */}
        <div className="grid items-end gap-5 md:gap-6 lg:grid-cols-[704fr_480fr] lg:gap-20 mb-8 md:mb-10 lg:mb-14">
          <div>
            <RevealItem distance={0} className="mb-5 md:mb-6">
              <SectionTop text={t('sectionTop')} hasSeparator={false} />
            </RevealItem>

            <Title>
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>
          </div>

          <RevealItem delay={copyDelay}>
            <Description className="text-base leading-6">
              {t('description')}
            </Description>
          </RevealItem>
        </div>

        {/* Rows reveal on their own, further down the page.
            Each row: two equal columns (one on phones), 40 / 24 / 16 px
            apart; padding 32/40 desktop, 32/28 tablet, 24 phone. */}
        <Reveal className="space-y-2">
          {values.map((key, index) => (
            <RevealItem
              key={key}
              delay={VALUE_DELAY + index * VALUE_STAGGER}
              from="left"
              distance={VALUE_SLIDE}
              className="group/row grid gap-4 rounded-2xl bg-tertiary p-6 transition-colors duration-300 ease-in-out hover:bg-prime active:bg-prime md:grid-cols-2 md:gap-6 md:px-7 md:py-8 lg:gap-10 lg:px-10"
            >
              {/* Number and title, 16 px apart. */}
              <div className="space-y-4">
                <span
                  className={cn(
                    'block font-mono text-sm leading-3.5 tracking-[-0.28px] text-prime',
                    inverts
                  )}
                >
                  {String(index + 1).padStart(2, '0')} /
                </span>
                <Title as="h3" className={inverts}>
                  {t(`values.${key}.title`)}
                </Title>
              </div>

              <Description className={cn('text-base leading-6', inverts)}>
                {t(`values.${key}.description`)}
              </Description>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}
