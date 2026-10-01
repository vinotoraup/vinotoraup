import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

const itemKeys = [
  'finTech',
  'lending',
  'insurance',
  'financialServices',
] as const;

export default async function HomeSupport() {
  const t = await getTranslations('HomeLessPressure');

  return (
    <div className="mb-20 lg:mb-25">
      <div className="container">
        <SectionTop text="Support for Financial Businesses" />

        <div className="space-y-1">
          {itemKeys.map((key) => (
            <div
              key={key}
              className="px-4 md:px-2 py-4 bg-blue-gray rounded-2xl min-h-30 mb-10"
            >
              <div className="grid lg:grid-cols-[1fr_1fr] gap-4 items-center">
                <Title
                  as="p"
                  size="h2"
                  variant="blue-gray-dark/50"
                  className="text-[32px]"
                >
                  {t(`${key}.title`)}
                </Title>
                <div>
                  <Description
                    className="font-medium"
                    variant="blue-gray-dark/50"
                  >
                    {t(`${key}.subTitle`)}
                  </Description>
                  <Description
                    size="2xl"
                    className="font-medium max-md:leading-[120%]"
                  >
                    {t(`${key}.description`)}
                  </Description>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right">
          <Button
            className="max-md:w-full"
            render={<Link href={'/use-cases'} />}
          >
            {t('link')}
          </Button>
        </div>
      </div>
    </div>
  );
}
