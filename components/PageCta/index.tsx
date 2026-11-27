import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { contactFormHref } from '@/data/contact';
import { Button } from '@/components/ui/button';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import Title from '@/components/Title';
import Description from '@/components/Description';
import {
  Magnetic,
  Reveal,
  RevealItem,
  RevealScale,
  RevealWords,
} from '@/components/Motion';

// Closing call to action used as the last block of a page (Let's Talk on
// the home page, Be Part of What We're Building on Our Mission, …):
// Secondary panel, title on the left, copy and button on the right.

// The panel scales in (0.96 → 1); then the title words rise one by one and
// the copy fades up. Hover (tap on phones) deepens the panel from
// Secondary to Prime over 600 ms; the button is magnetic (max 6 px).
const PANEL_DURATION = 700;
const TITLE_DELAY = 100;
const COPY_DELAY = 400;

type PageCtaProps = {
  /** Title split in two; the first part is highlighted (Tertialy). */
  title: { highlight: string; rest: string };
  description: ReactNode;
  button: { label: ReactNode; href?: string };
};

export default function PageCta({ title, description, button }: PageCtaProps) {
  const parts = [
    { text: title.highlight, className: 'highlight' },
    { text: title.rest },
  ];

  // Last block on the page: no container and no bottom margin; the panel
  // runs almost edge to edge with 24 / 16 / 8 px at the sides.
  return (
    <Reveal className="px-2 md:px-4 lg:px-6">
      {/* Padding 80/64 desktop, 64/48 tablet, 48/24 phone. */}
      <RevealScale
        duration={PANEL_DURATION}
        className="rounded-3xl bg-secondary px-6 py-12 transition-colors duration-600 hover:bg-prime active:bg-prime md:px-12 md:py-16 lg:px-16 lg:py-20"
      >
        {/* 704 / 480 columns on desktop, bottoms aligned; stacked below. */}
        <div className="grid items-end gap-6 md:gap-8 lg:grid-cols-[704fr_480fr] lg:gap-20">
          {/* Background text, highlight in Tertialy. */}
          <Title className="text-background [&_[data-word].highlight]:text-tertiary">
            <RevealWords parts={parts} delay={TITLE_DELAY} />
          </Title>

          <div>
            <RevealItem delay={COPY_DELAY}>
              <Description className="text-base leading-6 text-background">
                {description}
              </Description>
            </RevealItem>

            {/* 24 px above the button on desktop and phone, 32 on tablet.
                Defaults to the contact form, like the header's Request a
                Quote. */}
            <RevealItem delay={COPY_DELAY} className="mt-6 md:max-lg:mt-8">
              <Magnetic className="max-md:w-full md:w-fit">
                <Button
                  size="cta"
                  render={<Link href={button.href ?? contactFormHref} />}
                >
                  {button.label}
                  <ArrowRight16 color="currentColor" />
                </Button>
              </Magnetic>
            </RevealItem>
          </div>
        </div>
      </RevealScale>
    </Reveal>
  );
}
