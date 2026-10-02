import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { contactFormHref } from '@/data/contact';
import { Separator } from '@/components/ui/separator';
import ArrowRight from '@/components/Icons/ArrowRight';

type GlobalHeroProps = {
  title: ReactNode;
  titleHighlight: ReactNode;
  description: ReactNode;
  link: ReactNode;
  imageSrc: string;
  imageSrcMobile: string;
  imageHeight?: string;
  href?: string;
};

export default function GlobalHero({
  title,
  titleHighlight,
  description,
  link,
  imageSrc,
  imageSrcMobile,
  imageHeight = 'h-105 md:h-82.75',
  href = contactFormHref,
}: GlobalHeroProps) {
  return (
    <section className="pt-16 lg:pb-16 mb-20 lg:mb-25">
      <div className="container">
        <Title as="h1" className="max-w-200 pb-10">
          {title} <span>{titleHighlight}</span>
        </Title>

        <Separator className="mb-10" />

        <div className="flex justify-between items-end mb-10 flex-wrap gap-10">
          <Description size="2xl" className="max-w-154">
            {description}
          </Description>

          <Button render={<Link href={href} />} size="48">
            {link}
            <ArrowRight color="currentColor" />
          </Button>
        </div>

        <div className={cn('relative rounded-3xl', imageHeight)}>
          <Image
            src={imageSrc}
            alt="Image"
            fill
            className="object-cover rounded-[inherit] max-md:hidden"
            sizes="(min-width: 80rem) 1264px, 100vw"
          />
          <Image
            src={imageSrcMobile}
            alt="Image"
            fill
            className="object-cover rounded-[inherit] md:hidden"
            sizes="(min-width: 40rem) 624px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
