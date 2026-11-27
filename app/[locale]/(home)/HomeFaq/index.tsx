import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import Title from '@/components/Title';
import SectionTop from '@/components/SectionTop';
import Accordion, { AccordionItem } from '@/components/Accordion';
import {
  Reveal,
  RevealItem,
  RevealLine,
  RevealWords,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// Frequently Asked Questions: intro on the left, accordion on the right.

// Standard reveal: divider draws → tag fades → title words rise one by
// one → button fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

const questions = ['positions', 'skills', 'afterApplying', 'remote'];

export default async function HomeFaq() {
  const t = await getTranslations('HomeFaq');

  const title = [
    { text: t('titleOne'), className: 'highlight' },
    { text: t('titleTwo') },
  ];
  const buttonDelay = TITLE_DELAY + wordsDuration(title) + COPY_GAP;

  return (
    <Reveal className="mb-20 md:mb-24 lg:mb-30">
      <div className="container">
        <RevealLine className="h-px w-full bg-prime/15 mb-8 md:mb-10 lg:mb-14" />

        {/* Three grid items: intro, accordion, button.
            Tablet / phone: stacked in that order, 40 / 32 px apart.
            Desktop: 424 / 760 columns; the accordion spans both rows on the
            right, the button sits under the title on the left. Row 1 is
            sized by the intro alone, so the button stays 24 px below it. */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[424fr_760fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-6">
          <div className="flex flex-col items-start gap-5 md:gap-6 lg:col-start-1 lg:row-start-1">
            <RevealItem distance={0}>
              <SectionTop text={t('sectionTop')} hasSeparator={false} />
            </RevealItem>

            <Title>
              <RevealWords parts={title} delay={TITLE_DELAY} />
            </Title>
          </div>

          <RevealItem
            delay={buttonDelay}
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            {/* 12 px between questions, 8 px on phones. */}
            <Accordion className="space-y-2 md:space-y-3">
              {questions.map((key) => (
                <AccordionItem
                  key={key}
                  question={t(`questions.${key}.question`)}
                  answer={t.rich(`questions.${key}.answer`, {
                    // Not drawn in the mockup; underlined so it reads as a link.
                    link: (chunks) => (
                      <Link
                        href="/opportunities"
                        className="inline text-prime underline underline-offset-2"
                      >
                        {chunks}
                      </Link>
                    ),
                  })}
                />
              ))}
            </Accordion>
          </RevealItem>

          <RevealItem
            delay={buttonDelay}
            className="lg:col-start-1 lg:row-start-2 lg:self-start"
          >
            <Button size="cta" render={<Link href="/faq" />}>
              {t('button')}
              <ArrowRight16 color="currentColor" />
            </Button>
          </RevealItem>
        </div>
      </div>
    </Reveal>
  );
}
