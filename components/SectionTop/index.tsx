import type { ReactNode } from 'react';
import { cn } from 'cn';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';

// Tag colours: `light` sits on light sections, `dark` on Prime ones.
const variants = {
  light: { badge: 'bg-white', square: 'bg-prime', text: 'text-prime' },
  dark: {
    badge: 'bg-prime-hover',
    square: 'bg-additional',
    text: 'text-background',
  },
} as const;

type SectionTopProps = {
  text: ReactNode;
  hasSeparator?: boolean;
  variant?: keyof typeof variants;
  className?: string;
  badgeClassName?: string;
};

export default function SectionTop({
  text,
  hasSeparator = true,
  variant = 'light',
  className,
  badgeClassName,
}: SectionTopProps) {
  const colors = variants[variant];

  return (
    <div className={cn('mb-10', className)}>
      <div
        className={cn(
          'px-3 py-1.5 rounded-lg flex items-center gap-2 w-max mb-4',
          colors.badge,
          badgeClassName
        )}
      >
        <span className={cn('size-2 rounded-[1px]', colors.square)}></span>

        <Description
          className={cn('text-sm leading-4 font-medium', colors.text)}
        >
          {text}
        </Description>
      </div>
      {hasSeparator && <Separator />}
    </div>
  );
}
