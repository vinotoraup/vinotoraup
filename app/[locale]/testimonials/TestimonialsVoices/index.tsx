import { getTranslations } from 'next-intl/server';
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

// Insights From Within Vintora. Head duplicated from Growth Opportunities
// ("Your Career Doesn't Have to Stand Still"), then four quote cards.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Quote cards fade up 100 ms apart.
const CARD_DELAY = 100;
const CARD_STAGGER = 100;

const voices = ['amelia', 'daniel', 'sophie', 'oliver'];

/** "Amelia Foster" → "AF". */
function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default async function TestimonialsVoices() {
  const t = await getTranslations('TestimonialsVoices');

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

        {/* Cards reveal on their own, as they sit further down. */}
        <Reveal>
          {/* Two columns on desktop (32 px apart), one below (12 px).
              Each card spans 3 rows via subgrid (number, quote, author), so
              the authors of the two cards in a row line up. */}
          <div className="grid gap-3 lg:grid-cols-2 lg:gap-8">
            {voices.map((key, index) => (
              <RevealItem
                key={key}
                delay={CARD_DELAY + index * CARD_STAGGER}
                // Hover (tap on phones): White → Additional, accent bar → Prime.
                className="group/voice row-span-3 grid grid-rows-subgrid gap-8 rounded-2xl bg-white p-8 transition-colors duration-300 hover:bg-additional active:bg-additional"
              >
                {/* Number and the 40 × 4 accent bar, pushed apart. */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm leading-3.5 tracking-[-0.28px] text-secondary">
                    {String(index + 1).padStart(2, '0')} /
                  </span>
                  <span
                    aria-hidden
                    className="block h-1 w-10 rounded-[2px] bg-tertiary transition-colors duration-300 group-hover/voice:bg-prime group-active/voice:bg-prime"
                  />
                </div>

                {/* Quote: Body L 18/120%, Prime, on every breakpoint. */}
                <Description className="text-lg leading-[120%] tracking-[-0.2px] text-prime">
                  {t(`voices.${key}.quote`)}
                </Description>

                {/* Avatar: 48 px Tertialy circle with the initials (Body/
                    Medium), beside the name and role, 16 px apart. */}
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex size-12 shrink-0 items-center justify-center rounded-3xl bg-tertiary text-base leading-6 font-medium text-prime"
                  >
                    {initials(t(`voices.${key}.name`))}
                  </span>
                  <div>
                    <p className="text-base leading-6 font-medium text-prime">
                      {t(`voices.${key}.name`)}
                    </p>
                    <p className="text-xs leading-4 font-medium text-neutral">
                      {t(`voices.${key}.role`)}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
