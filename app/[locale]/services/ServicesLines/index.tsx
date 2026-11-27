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
import { wordsDuration } from '@/components/Motion/timing';

// Our Business Lines. Duplicated from the home Services block ("Business
// Solutions Powered by People"): same head, same four coloured cards and
// icons, but each card carries a longer write-up and they sit two per row.
const lines = [
  {
    key: 'customerExperience',
    className: 'bg-tertiary',
    textClassName: 'text-prime',
    icon: '/icons/business-1.svg',
  },
  {
    key: 'sales',
    className: 'bg-prime',
    textClassName: 'text-background',
    icon: '/icons/business-2.svg',
  },
  {
    key: 'administrative',
    className: 'bg-additional',
    textClassName: 'text-prime',
    icon: '/icons/business-3.svg',
  },
  {
    key: 'technical',
    className: 'bg-secondary',
    textClassName: 'text-background',
    icon: '/icons/business-4.svg',
  },
] as const;

const paragraphs = ['descriptionOne', 'descriptionTwo'] as const;

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Cards wipe in from the bottom (clip-path), 500 ms each, 100 ms apart.
const CARD_DELAY = 100;
const CARD_STAGGER = 100;
const CARD_DURATION = 500;

export default async function ServicesLines() {
  const t = await getTranslations('ServicesLines');

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

          <RevealItem delay={copyDelay}>
            <Description className="text-base leading-6">
              {t('description')}
            </Description>
          </RevealItem>
        </div>

        {/* Cards reveal on their own, further down the page. */}
        <Reveal>
          {/* Two per row on desktop (24 px apart), one per row below (12 px).
              Every card is rounded on its own. Each spans 4 rows via subgrid
              (icon + number, line name, title, copy), 20 px apart, so the
              text of the two cards in a row lines up. */}
          <div className="grid auto-rows-auto gap-x-6 gap-y-3 lg:grid-cols-2 lg:gap-y-6">
            {lines.map((line, index) => (
              <RevealClip
                key={line.key}
                delay={CARD_DELAY + index * CARD_STAGGER}
                duration={CARD_DURATION}
                className={cn(
                  // Padding 40, 32/24 on phones; 24 px corners.
                  // Hover (tap on phones) lifts the card 8 px.
                  'group/line row-span-4 grid grid-rows-subgrid gap-5 rounded-3xl px-6 py-8 md:p-10 transition-[translate] duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:active:-translate-y-2',
                  line.className,
                  line.textClassName
                )}
              >
                {/* Number left, icon right, top aligned. On hover (tap on
                    phones) the illustration turns 15°. */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm leading-3.5 tracking-[-0.28px]">
                    {String(index + 1).padStart(2, '0')} /
                  </span>
                  {/* 72 × 72 with 6 px padding (5.76 in the mockup). */}
                  <Image
                    src={line.icon}
                    width={96}
                    height={96}
                    alt=""
                    className="size-18 p-1.5 transition-[rotate] duration-500 ease-out motion-safe:group-hover/line:rotate-15 motion-safe:group-active/line:rotate-15"
                  />
                </div>

                {/* Line name: H3 (40/44, 24/28 on phones). */}
                <Title as="h3" className={line.textClassName}>
                  {t(`lines.${line.key}.label`)}
                </Title>

                {/* Subtitle: 24 px, 18 px on phones; weight 500, 120%. */}
                <Title
                  as="h4"
                  size="subtitle"
                  className={cn('max-md:text-lg', line.textClassName)}
                >
                  {t(`lines.${line.key}.title`)}
                </Title>

                <div className="space-y-5">
                  {paragraphs.map((key) => (
                    <Description
                      key={key}
                      className={cn('text-base leading-6', line.textClassName)}
                    >
                      {t(`lines.${line.key}.${key}`)}
                    </Description>
                  ))}
                </div>
              </RevealClip>
            ))}
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
