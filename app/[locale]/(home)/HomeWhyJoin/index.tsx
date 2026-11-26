import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import {
  Reveal,
  RevealItem,
  RevealScale,
  RevealWords,
} from '@/components/Motion';
import Hexagon from './Hexagon';
import { wordsDuration } from '@/components/Motion/timing';

// The panel scales in (0.96 → 1, 700 ms); the hexagon draws itself ring by
// ring; then the usual tag → title words → copy.
const HEXAGON_DELAY = 200;
const TITLE_DELAY = 300;
const COPY_GAP = 200;

export default async function HomeWhyJoin() {
  const t = await getTranslations('HomeWhyJoin');

  const title = [{ text: t('title') }];
  const copyDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        {/* Prime panel: icon column (108 px) beside the text, stacked on
            phones. Padding 96/64 desktop, 64/48 tablet, 48/24 phone. */}
        <RevealScale className="grid items-center gap-[23px] rounded-3xl bg-prime px-6 py-12 md:grid-cols-[108px_1fr] md:px-12 md:py-16 lg:px-16 lg:py-24 md:gap-8 lg:gap-20">
          <Hexagon delay={HEXAGON_DELAY} />

          <div>
            <RevealItem distance={0} className="mb-6">
              <SectionTop
                text={t('sectionTop')}
                variant="dark"
                hasSeparator={false}
                className="mb-0"
                badgeClassName="mb-0"
              />
            </RevealItem>

            <Title className="mb-6 text-background">
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>

            <RevealItem delay={copyDelay}>
              {/* Body L: 24 px on desktop, 18 px on tablet and phone. */}
              <Description className="text-lg leading-[120%] tracking-[-0.2px] text-background lg:text-2xl lg:leading-[110%] lg:tracking-[-0.5px]">
                {t('description')}
              </Description>
            </RevealItem>
          </div>
        </RevealScale>
      </div>
    </Reveal>
  );
}
