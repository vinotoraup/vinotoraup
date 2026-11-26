import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import {
  Reveal,
  RevealBar,
  RevealItem,
  RevealLine,
  RevealWords,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// Growth Opportunities: head like "Growing Together" (HomeMission), then
// the "A Possible Career Progression:" part.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Career steps fade up 120 ms apart; then the level bars grow 01 → 04,
// 150 ms apart; step 04 pulses once after it lands.
const STEP_DELAY = 100;
const STEP_STAGGER = 120;
const BAR_DELAY = STEP_DELAY + 300;
const BAR_STAGGER = 150;

const steps = ['agent', 'specialist', 'leader', 'management'];

// Text turns light on the Prime hover background.
const onHover =
  'transition-colors duration-300 group-hover/step:text-background group-active/step:text-background';

export default async function HomeGrowthOpportunities() {
  const t = await getTranslations('HomeGrowthOpportunities');

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
        <div className="grid items-end gap-6 lg:grid-cols-[704fr_480fr] lg:gap-20 mb-8 md:mb-10 lg:mb-14">
          <div>
            <RevealItem distance={0} className="mb-5 md:mb-6">
              <SectionTop
                text={t('sectionTop')}
                hasSeparator={false}
                className="mb-0"
                badgeClassName="mb-0"
              />
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

        {/* Second part reveals on its own, as it sits further down. */}
        <Reveal>
          <RevealItem>
            <Title as="h3" size="subtitle" className="mb-8 md:mb-10 lg:mb-14">
              {t('progressionTitle')}
            </Title>
          </RevealItem>

          {/* Career steps: 4 columns on desktop, 2 on tablet, 1 on phone.
              Each card spans 3 rows (top row, title, copy) via subgrid, so
              titles of different lengths still line up the copy. gap-0 on
              the card keeps the grid gap between cards only. */}
          <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-4 mb-8 md:mb-10 lg:mb-14">
            {steps.map((step, index) => (
              <RevealItem
                key={step}
                delay={STEP_DELAY + index * STEP_STAGGER}
                pulse={index === steps.length - 1}
                // Hover (tap on phones): White → Prime.
                className="group/step row-span-3 grid grid-rows-subgrid gap-0 rounded-2xl bg-white px-6 pt-6 pb-8 transition-colors duration-300 hover:bg-prime active:bg-prime"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm leading-3.5 tracking-[-0.28px] text-secondary transition-colors duration-300 group-hover/step:text-tertiary group-active/step:text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <RevealBar
                    aria-hidden
                    delay={BAR_DELAY + index * BAR_STAGGER}
                    className="block h-1 w-10 rounded-[2px] bg-tertiary"
                  />
                </div>

                <Title as="h4" className={cn('mb-6', onHover)}>
                  {t(`steps.${step}.title`)}
                </Title>
                <Description
                  className={cn('text-base leading-6 text-neutral', onHover)}
                >
                  {t(`steps.${step}.description`)}
                </Description>
              </RevealItem>
            ))}
          </div>

          <RevealItem
            delay={STEP_DELAY + steps.length * STEP_STAGGER}
            // Right on desktop, left on tablet and phone.
            className="flex lg:justify-end"
          >
            <Button className="h-13" render={<Link href="/work-with-us" />}>
              {t('button')}
              <ArrowRight16 color="currentColor" />
            </Button>
          </RevealItem>
        </Reveal>
      </div>
    </Reveal>
  );
}
