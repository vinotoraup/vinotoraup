'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { cn } from 'cn';
import { locales, type Locale } from '@/i18n/config';
import { getPathname, usePathname } from '@/i18n/navigation';

// Matches the pill's slide duration, so the switch finishes before reload.
const SLIDE_MS = 250;

const variants = {
  // Desktop: sits next to the nav menu.
  default: {
    root: 'bg-background/80',
    item: 'py-1.75',
    gap: 0,
  },
  // Mobile: sits in the header bar next to the burger.
  compact: {
    root: 'bg-white gap-0.5',
    item: 'py-2',
    gap: 2,
  },
} as const;

export default function LocaleSwitcher({
  className,
  variant = 'default',
}: {
  className?: string;
  variant?: keyof typeof variants;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [active, setActive] = useState<Locale>(locale);
  const activeIndex = locales.indexOf(active);
  const styles = variants[variant];

  function selectLocale(next: Locale) {
    if (next === active) {
      return;
    }

    setActive(next);

    window.setTimeout(() => {
      window.location.assign(
        getPathname({ href: pathname, locale: next, forcePrefix: true })
      );
    }, SLIDE_MS);
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        'relative grid w-fit grid-flow-col auto-cols-fr rounded-[14px] p-1',
        styles.root,
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-1 left-1 rounded-[10px] bg-prime transition-transform duration-250 ease-out"
        style={{
          width: `calc((100% - 8px - ${styles.gap * (locales.length - 1)}px) / ${locales.length})`,
          transform: `translateX(calc(${activeIndex} * (100% + ${styles.gap}px)))`,
        }}
      />

      {locales.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={item === active}
          className={cn(
            'relative z-1 cursor-pointer rounded-[10px] border-0 bg-transparent px-2.5 text-sm leading-4 font-medium transition-colors duration-250',
            styles.item,
            item === active ? 'text-background' : 'text-prime'
          )}
          onClick={() => selectLocale(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
