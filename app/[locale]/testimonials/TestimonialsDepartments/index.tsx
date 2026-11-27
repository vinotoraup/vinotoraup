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

// Inside Our Departments. Duplicated from the home "We Contribute" block
// ("Turning Ambition Into Real-World Experience"): same head, then white
// department rows instead of the journey rows. No subtitle, no button.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Rows slide in from the left one after another, as the journey rows:
// 40 px (16 px on phones), 120 ms apart. Each quote fades in 200 ms after
// its row.
const ROW_DELAY = 100;
const ROW_STAGGER = 120;
const ROW_SLIDE = { mobile: 16, tabletUp: 40 };
const QUOTE_GAP = 200;

const departments = ['customerRelations', 'commercial', 'management'];

export default async function TestimonialsDepartments() {
  const t = await getTranslations('TestimonialsDepartments');

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

        {/* Rows reveal on their own, further down; 8 px apart. */}
        <Reveal className="space-y-2">
          {departments.map((key, index) => {
            const rowDelay = ROW_DELAY + index * ROW_STAGGER;

            return (
              <RevealItem
                key={key}
                delay={rowDelay}
                from="left"
                distance={ROW_SLIDE}
                // Two equal columns (one on phones), centred, 40 / 24 px
                // apart; padding 36/40 desktop, 36/28 below.
                className="grid items-center gap-4 rounded-2xl bg-white px-7 py-9 md:grid-cols-2 md:gap-6 lg:gap-10 lg:px-10"
              >
                <div>
                  {/* Department: H4 28/31 on every breakpoint. */}
                  <Title as="h4" className="mb-2 text-[28px] leading-[31px]">
                    {t(`departments.${key}.department`)}
                  </Title>
                  <p className="text-base leading-6 font-medium text-secondary">
                    {t(`departments.${key}.name`)}
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-sm leading-4 font-medium text-tertiary-text">
                    {t(`departments.${key}.role`)}
                  </p>
                  <RevealItem distance={0} delay={rowDelay + QUOTE_GAP}>
                    <Description className="text-lg leading-[120%] tracking-[-0.2px] text-prime">
                      {t(`departments.${key}.quote`)}
                    </Description>
                  </RevealItem>
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </Reveal>
  );
}
