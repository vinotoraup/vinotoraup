import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SectionTop from '@/components/SectionTop';
import LetsTalkSendUsForm from './Form';

export default async function LetsTalkSendUs() {
  const t = await getTranslations('LetsTalkSendUs');

  return (
    <div className="mb-16 lg:mb-25">
      <div className="container">
        <SectionTop hasSeparator={false} text={t('sectionTop')} />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9136fr_1fr] gap-6">
          <div className="relative rounded-3xl max-lg:aspect-[592/533] max-lg:max-w-148 max-md:aspect-[364/380] max-md:max-w-91 max-lg:order-2">
            <Image
              src="/images/lets-talk/send-us.png"
              fill
              sizes="(min-width: 80rem) 592px, (min-width: 48rem) 50vw, 100vw"
              alt="Image"
              className="rounded-inherit max-md:hidden"
            />
            <Image
              src="/images/lets-talk/send-us-mobile.png"
              fill
              sizes="364px"
              alt="Image"
              className="rounded-inherit md:hidden"
            />
          </div>

          <div className="bg-blue-gray rounded-2xl p-6">
            <LetsTalkSendUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
