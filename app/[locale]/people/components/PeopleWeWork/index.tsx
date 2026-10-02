import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import Image from 'next/image';
import Title from '@/components/Title';

export default async function PeopleWeWork() {
  const t = await getTranslations('PeopleWeWork');

  return (
    <section className="mb-16 lg:mb-25">
      <div className="container">
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
            <Title className="tracking-[-1.455px] mb-4">
              <span>{t('titleOne')}</span> {t('titleTwo')}
            </Title>

            <Description>{t('description')}</Description>
          </div>
        </div>
      </div>
    </section>
  );
}
