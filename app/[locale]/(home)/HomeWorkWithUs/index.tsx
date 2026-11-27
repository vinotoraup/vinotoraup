import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import { Reveal, RevealItem, RevealWords } from '@/components/Motion';
import Diamond from './Diamond';

// Work With Us: Additional panel, intro on the left, copy and button on
// the right.

// Panel fades up; inside it the standard reveal: tag fades → title words
// rise one by one → icon and copy fade up. The diamond draws with scroll.
const PANEL_RISE = { mobile: 16, tabletUp: 40 };
const PANEL_DURATION = 700;
const TITLE_DELAY = 100;
const ICON_DELAY = 400;
const COPY_DELAY = 400;

const paragraphs = ['descriptionOne', 'descriptionTwo', 'descriptionThree'];

export default async function HomeWorkWithUs() {
  const t = await getTranslations('HomeWorkWithUs');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];

  // No container: the panel runs almost edge to edge with 24 / 16 / 8 px at
  // the sides, like Let's Talk below it. Bottom margin 24 / 24 / 16.
  return (
    <Reveal className="mb-4 px-2 md:mb-6 md:px-4 lg:px-6">
      {/* Padding 96/64 desktop, 64/48 tablet, 48/24 phone.
            The panel fades up 40 px (16 px on phones) over 700 ms. */}
      <RevealItem
        distance={PANEL_RISE}
        duration={PANEL_DURATION}
        className="rounded-3xl bg-additional px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-24"
      >
        {/* 704 / 480 columns on desktop, bottoms aligned; stacked below. */}
        <div className="grid items-end gap-6 md:gap-8 lg:grid-cols-[704fr_480fr] lg:gap-20">
          {/* Tag, title and icon.
                Desktop: stacked tag → title → icon, 24 px apart.
                Tablet: tag and icon share the first row (pushed apart, top
                aligned), the title takes the full second row, 32 px below.
                Phone: icon moves to the top → tag → title, 24 px apart. */}
          <div className="grid justify-items-start gap-6 md:max-lg:grid-cols-[1fr_auto] md:max-lg:items-start md:max-lg:gap-8">
            <RevealItem
              distance={0}
              className="md:max-lg:col-start-1 md:max-lg:row-start-1"
            >
              <SectionTop text={t('sectionTop')} hasSeparator={false} />
            </RevealItem>

            {/* Highlight is Secondary here, not the usual Tertiary text. */}
            <Title className="[&_[data-word].highlight]:text-secondary md:max-lg:col-span-2 md:max-lg:row-start-2">
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>

            {/* Box 140 / 11 px padding (desktop), 100 / 8 px (tablet),
                  88 / 7 px (phone); the illustration fills what's left:
                  118, 84 or 74. */}
            <RevealItem
              delay={ICON_DELAY}
              className="size-22 p-[7px] max-md:-order-1 md:max-lg:col-start-2 md:max-lg:row-start-1 md:max-lg:size-25 md:max-lg:justify-self-end md:max-lg:p-2 lg:size-35 lg:p-[11px]"
            >
              <Diamond className="size-full" />
            </RevealItem>
          </div>

          <div>
            {/* 16 px between paragraphs. */}
            <div className="space-y-4">
              {paragraphs.map((key) => (
                <RevealItem key={key} delay={COPY_DELAY}>
                  <Description className="text-base leading-6">
                    {t(key)}
                  </Description>
                </RevealItem>
              ))}
            </div>

            {/* 32 px above the button, 24 px on phones. */}
            <RevealItem delay={COPY_DELAY} className="mt-6 md:mt-8">
              {/* On phones: full width, text and arrow at the ends. */}
              <Button size="cta" render={<Link href="/work-with-us" />}>
                {t('button')}
                <ArrowRight16 color="currentColor" />
              </Button>
            </RevealItem>
          </div>
        </div>
      </RevealItem>
    </Reveal>
  );
}
