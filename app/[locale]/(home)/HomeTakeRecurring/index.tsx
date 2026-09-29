import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default async function HomeTakeRecurring() {
  const t = await getTranslations('HomeTakeRecurring');

  return (
    <section className="mb-20 lg:mb-25">
      <div className="container">
        <Separator className="mb-6 lg:mb-10" />
        <div className="grid lg:grid-cols-[auto_0.675653fr] items-start gap-y-15">
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
              <span className="text-[#C0C8DE] inline">{t('titleOne')}</span>{' '}
              {t('titleTwo')}
            </Title>
            <Description className="max-md:tracking-[-0.5px]">
              {t('descriptionOne')}
            </Description>
            <Description className="max-md:tracking-[-0.5px]">
              {t('descriptionTwo')}
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
