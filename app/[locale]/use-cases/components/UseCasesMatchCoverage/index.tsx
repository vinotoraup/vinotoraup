import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';

const itemKeys = ['itemOne', 'itemTwo', 'itemThree', 'itemFour'] as const;

export default async function UseCasesMatchCoverage() {
  const t = await getTranslations('UseCasesMatchCoverage');

  return (
    <div className="mb-16 lg:mb-25">
      <div className="container">
        <SectionTop text={t('sectionTop')} />

        <div className="space-y-1">
          {itemKeys.map((key) => (
            <div
              key={key}
              className="px-4 lg:px-2 py-6 lg:py-4 bg-blue-gray rounded-2xl lg:min-h-30 flex flex-col justify-end"
            >
              <div className="grid lg:grid-cols-[1fr_1fr] gap-5.5 items-center">
                <Description
                  variant="blue-gray-dark/50"
                  className="tracking-[-1.455px]"
                  size="54"
                >
                  {t(`${key}.title`)}
                </Description>
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
      </div>
    </div>
  );
}
