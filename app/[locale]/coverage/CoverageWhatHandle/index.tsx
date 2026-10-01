import { getTranslations } from 'next-intl/server';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';

const itemKeys = [
  'customerCare',
  'application',
  'collections',
  'fraud',
  'compliance',
  'complaint',
] as const;

export default async function CoverageWhatHandle() {
  const t = await getTranslations('CoverageWhatHandle');

  return (
    <div className="mb-20 lg:mb-25">
      <div className="container">
        <SectionTop text={t('sectionTop')} />

        <div className="space-y-1">
          {itemKeys.map((key) => (
            <div
              key={key}
              className="px-4 py-6 md:px-2 md:py-4 bg-blue-gray rounded-2xl min-h-35 md:min-h-30 flex items-end"
            >
              <div className="grid lg:grid-cols-[1fr_1fr] gap-x-4 items-end justify-between w-full gap-y-10">
                <Description
                  size="54"
                  variant="blue-gray-dark/50"
                  className="tracking-[-1.455px]"
                >
                  {t(`${key}.title`)}
                </Description>
                <Description
                  size="2xl"
                  variant="blue-gray-dark"
                  className="font-medium tracking-[-1.455px]"
                >
                  {t(`${key}.description`)}
                </Description>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
