import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import Image from 'next/image';
import SectionTop from '@/components/SectionTop';

export default async function HandoffKeepOpen() {
  const t = await getTranslations('HandoffKeepOpen');

  return (
    <section className="mb-16 lg:mb-25">
      <div className="container">
        <SectionTop text={t('sectionTop')} />
        <div className="grid grid-cols-1 lg:grid-cols-[114px_0.68917fr] items-start gap-6 justify-between">
          <div>
            <Image
              src="/icons/icon-unknown.svg"
              width={114}
              height={114}
              alt="Image"
            />
          </div>
          <div>
            <Description size="2xl" className="leading-[110%]">
              {t('description')}
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
