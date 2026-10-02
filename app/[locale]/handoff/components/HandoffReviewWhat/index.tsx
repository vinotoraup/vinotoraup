import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default async function HandoffReviewWhat() {
  const t = await getTranslations('HandoffReviewWhat');

  return (
    <div className="mb-16 lg:mb-25">
      <div className="container">
        <Separator className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[0.92847fr_1fr] gap-6">
          <div className="relative rounded-3xl max-lg:aspect-[597/394] max-lg:max-w-149.25 max-md:aspect-[364/314] max-md:max-w-91">
            <Image
              src="/images/handoff/review-what.png"
              fill
              sizes="(min-width: 80rem) 597px, (min-width: 48rem) 50vw, 100vw"
              alt="Image"
              className="rounded-inherit max-md:hidden"
            />
            <Image
              src="/images/handoff/review-what-mobile.png"
              fill
              sizes="364px"
              alt="Image"
              className="rounded-inherit md:hidden"
            />
          </div>
          <div className="bg-blue-gray rounded-2xl px-4 py-6 lg:px-6 lg:min-h-98.5 flex flex-col justify-between gap-4">
            <Title
              className="tracking-[-1.455px] lg:leading-none [&_span]:text-light-gray"
              variant="blue-gray-dark"
            >
              <span>{t('titleOne')}</span> {t('titleTwo')}
            </Title>

            <Description size="2xl">{t('description')}</Description>
          </div>
        </div>
      </div>
    </div>
  );
}
