import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import SectionTop from '@/components/SectionTop';
import Description from '@/components/Description';
import ArrowRight20 from '@/components/Icons/ArrowRight20';
import {
  Reveal,
  RevealClip,
  RevealItem,
  RevealLine,
  RevealScale,
  RevealWords,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// Behind the Achievement: divider, then a Prime panel with the intro on
// the left and Charlotte Evans's career journey on the right.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → icon fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// The panel scales in (0.96 → 1) with a fade, 500 ms.
const PANEL_DURATION = 500;
// Career path steps, 300 ms each, after the story has faded up.
const PATH_STEP = 300;

export default async function TestimonialsAchievement() {
  const t = await getTranslations('TestimonialsAchievement');

  const title = [{ text: t('title') }];
  const iconDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;
  const pathDelay = iconDelay + 500;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* Prime panel: padding 72/64 desktop, 64/48 below; 24 px corners.
            440 / 616 columns on desktop (80 px apart), stacked below
            (32 px). */}
        <RevealScale
          duration={PANEL_DURATION}
          className="grid gap-8 rounded-3xl bg-prime px-12 py-16 lg:grid-cols-[440fr_616fr] lg:gap-20 lg:px-16 lg:py-18"
        >
          <div>
            {/* 24 px below the tag. */}
            <RevealItem distance={0} className="mb-6">
              <SectionTop
                text={t('sectionTop')}
                variant="dark"
                hasSeparator={false}
              />
            </RevealItem>

            {/* Tablet/H2 (52/56, −1) in Background, on every breakpoint: the lg:
                values override Title's desktop H2 size. 48 px below it on
                desktop, where the icon follows. */}
            <Title className="text-[52px] leading-14 tracking-[-1px] text-background lg:mb-12 lg:text-[52px] lg:leading-14 lg:tracking-[-1px]">
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>

            {/* 120 × 120 with 10 px padding (9.6 in the mockup); desktop
                only. */}
            <RevealItem
              delay={iconDelay}
              className="size-30 p-2.5 max-lg:hidden"
            >
              <Image
                src="/icons/sunburst.svg"
                width={120}
                height={120}
                alt=""
                className="size-full"
              />
            </RevealItem>
          </div>

          <div>
            {/* Name and roles, with a Secondary rule under them (border,
                20 px above and below). */}
            <RevealItem
              delay={iconDelay}
              className="mb-5 border-b border-secondary pb-5"
            >
              {/* H4 28/31 on every breakpoint. */}
              <Title
                as="h4"
                className="mb-2 text-[28px] leading-[31px] text-background"
              >
                {t('journeyTitle')}
              </Title>
              <p className="text-sm leading-4 font-medium text-tertiary">
                {t('journeyRole')}
              </p>
            </RevealItem>

            {/* Story: Body L 18/120%, Background; 20 px below. */}
            <RevealItem delay={iconDelay}>
              <Description className="mb-5 text-lg leading-[120%] tracking-[-0.2px] text-background">
                {t('journeyQuote')}
              </Description>
            </RevealItem>

            {/* Career path: label, then the steps as pills joined by
                arrows, 12 px apart, centred; wraps on narrow screens.
                Plays in sequence, 300 ms each: first pill (with the
                label) fades in, the arrow draws left → right, then the
                second pill. */}
            <div className="flex flex-wrap items-center gap-3">
              <RevealItem
                distance={0}
                delay={pathDelay}
                duration={PATH_STEP}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="text-sm leading-4 font-medium text-tertiary">
                  {t('pathLabel')}
                </span>
                <span className="rounded-xl bg-secondary px-3.5 py-2 text-base leading-6 font-medium text-background">
                  {t('pathFrom')}
                </span>
              </RevealItem>
              <RevealClip
                from="left"
                delay={pathDelay + PATH_STEP}
                duration={PATH_STEP}
              >
                <ArrowRight20 />
              </RevealClip>
              <RevealItem
                distance={0}
                delay={pathDelay + 2 * PATH_STEP}
                duration={PATH_STEP}
              >
                <span className="block rounded-xl bg-additional px-3.5 py-2 text-base leading-6 font-medium text-prime">
                  {t('pathTo')}
                </span>
              </RevealItem>
            </div>
          </div>
        </RevealScale>
      </div>
    </Reveal>
  );
}
