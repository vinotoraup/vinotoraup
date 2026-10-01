import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default async function CoverageChangeScope() {
  const t = await getTranslations('CoverageChangeScope');

  return (
    <section className="mb-16 lg:mb-25 px-3.25 md:px-6">
      <Separator className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[0.93494fr_1fr] gap-6">
        <div className="relative rounded-3xl max-lg:aspect-[661/394] max-lg:max-w-165.25 max-md:aspect-[364/364] max-md:max-w-91">
          <Image
            src="/images/coverage/change-the-scope.png"
            fill
            sizes="(min-width: 80rem) 661px, (min-width: 48rem) 50vw, 100vw"
            alt="Image"
            className="rounded-inherit max-md:hidden"
          />
          <Image
            src="/images/coverage/change-the-scope-mobile.png"
            fill
            sizes="364px"
            alt="Image"
            className="rounded-inherit md:hidden"
          />
        </div>
        <div className="bg-blue-gray rounded-2xl py-6 px-4 lg:px-6 lg:min-h-98.5 flex flex-col justify-between gap-4">
          <Title
            className="tracking-[-1.455px] leading-[110%] [&_span]:not-italic [&_span]:text-light-gray"
            variant="blue-gray-dark"
          >
            <span>{t('titleOne')}</span> {t('titleTwo')}
          </Title>

          <Description size="2xl" className="tracking-[-0.5px]">
            {t('description')}
          </Description>
        </div>
      </div>
    </section>
  );
}
