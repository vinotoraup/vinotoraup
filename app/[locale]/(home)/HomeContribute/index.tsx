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
  RevealItem,
  RevealLine,
  RevealWords,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// "Where Can Your Journey Take You?" rows slide in from the left one after
// another: 40 px (16 px on phones), 120 ms apart.
const JOURNEY_DELAY = 100;
const JOURNEY_STAGGER = 120;
const JOURNEY_SLIDE = { mobile: 16, tabletUp: 40 };
const inverts =
  'transition-colors duration-300 ease-in-out group-hover/row:text-background group-active/row:text-background';

const journeys = ['strengths', 'expertise', 'higher'];

export default async function HomeContribute() {
  const t = await getTranslations('HomeContribute');

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
            <RevealItem distance={0} className="mb-6">
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
              {t('journeyTitle')}
            </Title>
          </RevealItem>

          <div className="flex flex-col gap-2 mb-8 md:mb-10 lg:mb-14">
            {journeys.map((key, index) => (
              <RevealItem
                key={key}
                delay={JOURNEY_DELAY + index * JOURNEY_STAGGER}
                from="left"
                distance={JOURNEY_SLIDE}
                // Hover (tap on phones): Tertialy → Prime, text turns light.
                className="group/row grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-10 rounded-2xl bg-tertiary p-6 md:px-7 md:py-8 lg:px-10 transition-colors duration-300 ease-in-out hover:bg-prime active:bg-prime"
              >
                <div>
                  <span
                    className={cn(
                      'mb-4 block font-mono text-sm leading-3.5 tracking-[-0.28px] text-prime',
                      inverts
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Title as="h3" className={inverts}>
                    {t(`journeys.${key}.title`)}
                  </Title>
                </div>

                <Description className={cn('text-base leading-6', inverts)}>
                  {t(`journeys.${key}.description`)}
                </Description>
              </RevealItem>
            ))}
          </div>

          <RevealItem
            delay={JOURNEY_DELAY + journeys.length * JOURNEY_STAGGER}
            // Right on desktop, left on tablet and phone.
            className="flex lg:justify-end"
          >
            <Button className="h-13" render={<Link href="/opportunities" />}>
              {t('button')}
              <ArrowRight16 color="currentColor" />
            </Button>
          </RevealItem>
        </Reveal>
      </div>
    </Reveal>
  );
}
