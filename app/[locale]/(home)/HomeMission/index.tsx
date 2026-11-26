import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
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

// Same scroll reveal as About: divider draws → tag fades → title words
// rise one by one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// "What Guides Us" cards fade up one after another:
// 32 px (16 px on phones), 600 ms, 100 ms apart.
const GUIDE_DELAY = 100;
const GUIDE_STAGGER = 100;
const GUIDE_DURATION = 600;
const GUIDE_RISE = { mobile: 16, tabletUp: 32 };

const guides = [
  { key: 'potential', icon: '/icons/guides-1.svg' },
  { key: 'experience', icon: '/icons/guides-2.svg' },
  { key: 'leadership', icon: '/icons/guides-3.svg' },
  { key: 'success', icon: '/icons/guides-4.svg' },
];

export default async function HomeMission() {
  const t = await getTranslations('HomeMission');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];
  const copyDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* 704 / 480 columns on desktop, stacked on tablet and phone. */}
        <div className="grid gap-6 lg:grid-cols-[704fr_480fr] lg:gap-20 mb-8 md:mb-10 lg:mb-14">
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

          <div className="flex flex-col gap-5 md:gap-4">
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

        {/* Second part reveals on its own, as it sits further down. */}
        <Reveal>
          <RevealItem>
            <Title as="h3" size="subtitle" className="mb-8 md:mb-10 lg:mb-14">
              {t('guidesTitle')}
            </Title>
          </RevealItem>

          {/* 4 columns on desktop, 2 on tablet, 1 on phone.
              Each card spans 3 rows of this grid (top row, title, copy) via
              subgrid, so titles of different lengths still line up the copy
              across a row. gap-0 on the card keeps the grid gap between
              cards only; spacing inside the card comes from margins. */}
          <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4 mb-8 md:mb-10 lg:mb-14">
            {guides.map((guide, index) => (
              <RevealItem
                key={index}
                delay={GUIDE_DELAY + index * GUIDE_STAGGER}
                duration={GUIDE_DURATION}
                distance={GUIDE_RISE}
                // Hover (tap on phones): card tints, icon tile turns white,
                // icon grows and tilts, number darkens. All 250 ms.
                className="group/card row-span-3 grid grid-rows-subgrid gap-0 rounded-2xl bg-white p-6 md:p-8 transition-colors duration-250 hover:bg-additional active:bg-additional"
              >
                <div className="flex items-start justify-between mb-8 md:mb-10 lg:mb-14">
                  <div className="size-18 rounded-2xl bg-background p-3 transition-colors duration-250 group-hover/card:bg-white group-active/card:bg-white">
                    <Image
                      src={guide.icon}
                      width={48}
                      height={48}
                      alt=""
                      className="transition-[scale,rotate] duration-250 motion-safe:group-hover/card:scale-[1.06] motion-safe:group-hover/card:rotate-8 motion-safe:group-active/card:scale-[1.06] motion-safe:group-active/card:rotate-8"
                    />
                  </div>

                  <span className="font-mono text-sm leading-3.5 tracking-[-0.28px] text-tertiary-text transition-colors duration-250 group-hover/card:text-prime group-active/card:text-prime">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <Title as="h4" className="mb-3">
                  {t(`guides.${guide.key}.title`)}
                </Title>
                <Description className="text-base leading-6 text-neutral">
                  {t(`guides.${guide.key}.description`)}
                </Description>
              </RevealItem>
            ))}
          </div>

          <RevealItem
            delay={GUIDE_DELAY + guides.length * GUIDE_STAGGER}
            // Right on desktop, left on tablet and phone.
            className="flex lg:justify-end"
          >
            <Button className="h-13" render={<Link href="/our-mission" />}>
              {t('button')}
              <ArrowRight16 color="currentColor" />
            </Button>
          </RevealItem>
        </Reveal>
      </div>
    </Reveal>
  );
}
