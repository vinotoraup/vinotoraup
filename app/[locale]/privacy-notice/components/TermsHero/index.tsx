import type { ReactNode } from 'react';
import Image from 'next/image';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';

type TermsHeroProps = {
  title: ReactNode;
  description: ReactNode[];
  imageSrc?: string;
};

export default function TermsHero({
  title,
  description,
  imageSrc = '/icons/icon-unknown-seven.svg',
}: TermsHeroProps) {
  return (
    <section className="pt-16 lg:mb-8">
      <div className="container">
        <Title as="h1" className="max-w-200 mb-6">
          {title}
        </Title>

        <Separator className="mb-6" />

        <div className="flex justify-between items-start-wrap gap-10">
          <div className="space-y-6 max-w-179.5">
            {description.map((item, index) => (
              <Description key={index} size="2xl">
                {item}
              </Description>
            ))}
          </div>

          <div className="max-lg:hidden">
            <Image src={imageSrc} alt="Image" width={114} height={114} />
          </div>
        </div>
      </div>
    </section>
  );
}
