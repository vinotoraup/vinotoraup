'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import CaretDown from '@/components/Icons/CaretDown';
import { Separator } from '@/components/ui/separator';

const items = [
  {
    key: 'fintech',
    image: 'icons/icon-unknown-one.svg',
    className: 'bg-blue-gray',
    textClassName: undefined,
    caretColor: undefined,
    separatorColor: 'bg-blue/50',
    list: ['itemOne', 'itemTwo', 'itemThree', 'itemFour'] as const,
  },
  {
    key: 'lending',
    image: 'icons/icon-unknown-two.svg',
    className: 'bg-blue',
    textClassName: 'text-white',
    caretColor: 'text-light-gray',
    separatorColor: 'text-light-gray/50',
    list: ['itemOne', 'itemTwo', 'itemThree', 'itemFour'] as const,
  },
  {
    key: 'insurance',
    image: 'icons/icon-unknown-three.svg',
    className: 'bg-beige',
    textClassName: undefined,
    caretColor: undefined,
    separatorColor: 'bg-blue/50',
    list: ['itemOne', 'itemTwo', 'itemThree', 'itemFour'] as const,
  },
] as const;

export default function UseCasesInfo() {
  const t = useTranslations('UseCasesInfo');
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});

  return (
    <div className="mb-16 lg:mb-25">
      <div className="grid lg:grid-cols-3">
        {items.map((item) => {
          const open = Boolean(openKeys[item.key]);

          return (
            <div
              key={item.key}
              className={cn(
                'py-10 px-6 lg:px-10 flex flex-col gap-4',
                item.className
              )}
            >
              <div>
                <Image src={item.image} alt="Icon" width={114} height={114} />
              </div>

              <div>
                <Title
                  as="p"
                  size="h3"
                  className={cn('mb-2 tracking-[-0.177px]', item.textClassName)}
                >
                  {t(`${item.key}.title`)}
                </Title>

                <Description
                  className={cn('leading-[154.375%] mb-3', item.textClassName)}
                >
                  {t(`${item.key}.description`)}
                </Description>

                <button
                  type="button"
                  aria-expanded={open}
                  className={cn(
                    'flex justify-between items-center py-2 w-full',
                    item.textClassName
                  )}
                  onClick={() =>
                    setOpenKeys((prev) => ({
                      ...prev,
                      [item.key]: !prev[item.key],
                    }))
                  }
                >
                  {t('action')}
                  <span
                    className={cn(
                      'inline-flex transition-transform',
                      open && 'rotate-180'
                    )}
                  >
                    <CaretDown className={item.caretColor} />
                  </span>
                </button>
                <Separator className={item.separatorColor} />

                {open ? (
                  <div className={cn('mt-2', item.textClassName)}>
                    <ul className="space-y-2 mb-2 list-disc pl-5">
                      {item.list.map((listKey) => (
                        <li key={listKey}>
                          <Description
                            className={cn(
                              'leading-[154.375%]',
                              item.textClassName
                            )}
                          >
                            {t(`${item.key}.${listKey}`)}
                          </Description>
                        </li>
                      ))}
                    </ul>

                    <Description
                      className={cn('leading-[154.375%]', item.textClassName)}
                    >
                      {t(`${item.key}.descriptionAfter`)}
                    </Description>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
