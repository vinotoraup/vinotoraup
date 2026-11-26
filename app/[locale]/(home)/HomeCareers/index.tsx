import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import ArrowLink from '@/components/Icons/ArrowLink';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import { Button } from '@/components/ui/button';
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

// Careers at Vintora: head like Growth Opportunities, then "Featured
// Roles:" cards.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

// Role cards fade up 100 ms apart.
const ROLE_DELAY = 100;
const ROLE_STAGGER = 100;

const roles = [
  'customerRelations',
  'salesRepresentative',
  'administrativeAssistant',
  'teamLeader',
];

export default async function HomeCareers() {
  const t = await getTranslations('HomeCareers');

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

          {/* Roles: 2 columns on desktop and tablet, 1 on phone.
              Each card spans 3 rows (title, copy, link) via subgrid, so
              titles and copy of different lengths still line up the links
              across a row. The card's own 16 px gap spaces its rows. */}
          <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-14">
            {roles.map((role, index) => (
              <RevealItem
                key={role}
                delay={ROLE_DELAY + index * ROLE_STAGGER}
                // Hover (tap on phones): White → Tertialy, link underline slides
                // in from the left, arrow nudges 4 px right. 250 ms.
                className="group/role row-span-3 grid grid-rows-subgrid gap-4 rounded-2xl bg-white px-6 pt-6 pb-8 transition-colors duration-250 hover:bg-tertiary active:bg-tertiary"
              >
                {/* H4 here is 24/28 on tablet too, 28/31 on desktop only. */}
                <Title
                  as="h4"
                  className="md:text-2xl md:leading-7 lg:text-[28px] lg:leading-[31px]"
                >
                  {t(`roles.${role}.title`)}
                </Title>
                <Description className="text-base leading-6 text-neutral">
                  {t(`roles.${role}.description`)}
                </Description>

                <Link
                  href="/opportunities"
                  className="flex w-fit items-center gap-2 py-2 text-base leading-4 font-medium text-prime"
                >
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-250 group-hover/role:after:scale-x-100 group-active/role:after:scale-x-100 motion-reduce:after:transition-none">
                    {t('roleLink')}
                  </span>
                  <span className="transition-[translate] duration-250 motion-safe:group-hover/role:translate-x-1 motion-safe:group-active/role:translate-x-1">
                    <ArrowLink color="currentColor" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </div>

          <RevealItem
            delay={ROLE_DELAY + roles.length * ROLE_STAGGER}
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
