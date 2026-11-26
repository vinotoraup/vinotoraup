import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import ArrowRight16 from '@/components/Icons/ArrowRight16';
import {
  Reveal,
  RevealItem,
  RevealLine,
  RevealWords,
  ScrollRotate,
} from '@/components/Motion';
import { wordsDuration } from '@/components/Motion/timing';

// Scroll reveal, played once when 20% of the section is in view:
// divider draws → tag fades → title words rise one by one → copy fades up.
const TITLE_DELAY = 100;
const COPY_GAP = 200;

export default async function HomeTakeRecurring() {
  const t = await getTranslations('HomeTakeRecurring');

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
        <div className="grid items-start gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_0.675653fr] lg:gap-10">
          <ScrollRotate className="w-fit">
            <Image
              src="/icons/icon-unknown.svg"
              width={114}
              height={114}
              alt="Image"
              className="size-20 md:size-24 lg:size-28.5"
            />
          </ScrollRotate>

          <div className="flex flex-col items-start gap-6">
            <RevealItem distance={0}>
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

            <RevealItem delay={copyDelay} className="max-md:w-full">
              <Button
                className="h-13 max-md:w-full"
                render={<Link href="/our-mission" />}
              >
                {t('button')}
                <ArrowRight16 color="currentColor" />
              </Button>
            </RevealItem>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
