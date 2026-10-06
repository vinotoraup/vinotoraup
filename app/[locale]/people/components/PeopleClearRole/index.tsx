import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';

const itemKeys = ['itemOne', 'itemTwo', 'itemThree', 'itemFour'] as const;

export default async function PeopleClearRole() {
  const t = await getTranslations('PeopleClearRole');

  return (
    <div className="mb-16 lg:mb-25">
      <div className="container">
        <SectionTop text={t('sectionTop')} />

        <div className="space-y-1 mb-6">
          {itemKeys.map((key) => (
            <div
              key={key}
              className="px-4 lg:px-2 py-6 lg:py-4 bg-blue-gray rounded-2xl min-h-30 flex flex-col justify-end"
            >
              <div className="grid lg:grid-cols-[1fr_0.60313fr] gap-5 items-center">
                <div>
                  <Description variant="blue-gray-dark/50" className="mb-0.25">
                    {t(`${key}.caption`)}
                  </Description>

                  <Description
                    variant="blue-gray-dark/50"
                    className="tracking-[-1.455px]"
                    size="48"
                  >
                    {t(`${key}.title`)}
                  </Description>
                </div>
                <div>
                  <Description
                    className="font-medium"
                    variant="blue-gray-dark/50"
                  >
                    {t(`${key}.subTitle`)}
                  </Description>
                  <Description size="2xl" className="font-medium">
                    {t(`${key}.description`)}
                  </Description>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Description size="2xl">{t('description')}</Description>
      </div>
    </div>
  );
}
