import Image from 'next/image';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';
import { getTranslations } from 'next-intl/server';

export default async function LetsTalkHero() {
  const t = await getTranslations('LetsTalkHero');

  return (
    <section className="pt-16 mb-20 lg:mb-25">
      <div className="container">
        <Title as="h1" className="max-w-200 mb-6">
          {t('titleOne')} <span> {t('titleTwo')}</span>
        </Title>

        <Separator className="mb-6" />

        <div className="flex justify-between items-center flex-wrap gap-10">
          <Description size="2xl" className="max-w-154 leading-[120%]">
            {t('description')}
          </Description>

          <div>
            <Image
              src="/icons/icon-unknown-six.svg"
              alt="Image"
              width="114"
              height="114"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
