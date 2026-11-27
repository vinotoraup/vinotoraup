import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import {
  Reveal,
  RevealItem,
  RevealLine,
  RevealBar,
  RevealWords,
} from '@/components/Motion';
import HexagonScrub from '@/components/Hexagon/HexagonScrub';
import { wordsDuration } from '@/components/Motion/timing';

// Behind Every Service. Duplicated from the home About block ("Talent,
// Progress, and Possibilities"): two paragraphs, then a highlighted
// closing line instead of a button. Icon: the hexagon, drawn with scroll.

// Scroll reveal, played once when 20% of the section is in view:
// divider draws → tag fades → title words rise one by one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;
const RULE_DURATION = 500;

const paragraphs = ['descriptionOne', 'descriptionTwo'];

export default async function ServicesBehind() {
  const t = await getTranslations('ServicesBehind');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];
  const copyDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* Stacked on phones, icon beside the text from tablet up. */}
        <div className="grid items-start gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_0.675653fr] lg:gap-20">
          {/* The hexagon's rings draw with scroll (static on phones). */}
          <HexagonScrub
            variant="dark"
            className="block size-20 md:size-24 lg:size-28.5"
          />

          <div className="flex flex-col items-start gap-5 md:gap-6">
            <RevealItem distance={0}>
              <SectionTop text={t('sectionTop')} hasSeparator={false} />
            </RevealItem>

            <Title>
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>

            {paragraphs.map((key) => (
              <RevealItem key={key} delay={copyDelay}>
                <Description className="text-base leading-6">
                  {t(key)}
                </Description>
              </RevealItem>
            ))}

            {/* Closing line: Body L in Secondary with a 2 px Secondary rule
                on the left (20 px inset, 16 on phones); 24/110% on desktop,
                18/120% below. The rule grows top → bottom (500 ms), then
                the text fades in. */}
            <div className="relative pl-4 md:pl-5">
              <RevealBar
                aria-hidden
                direction="vertical"
                delay={copyDelay}
                duration={RULE_DURATION}
                className="absolute inset-y-0 left-0 block w-0.5 bg-secondary"
              />
              <RevealItem distance={0} delay={copyDelay + RULE_DURATION}>
                <Description className="text-lg leading-[120%] tracking-[-0.2px] text-secondary lg:text-2xl lg:leading-[110%] lg:tracking-[-0.5px]">
                  {t('quote')}
                </Description>
              </RevealItem>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
