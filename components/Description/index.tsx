import type { ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

const descriptionVariants = cva('font-normal', {
  variants: {
    size: {
      default: 'text-base leading-[120%]',
      xs: 'text-xs',
      '2xl': 'text-base md:text-2xl leading-[120%]',
      '46': 'text-[46px]/[120%] leading-none',
      '48': 'text-[32px] lg:text-5xl leading-none',
      '54': 'text-[32px] lg:text-[54px] leading-none',
    },
    variant: {
      default: 'text-prime',
      'secondary/50': 'text-secondary/50',
      secondary: 'text-secondary',
      error: 'text-[#ff0000]',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

type DescriptionProps = ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof descriptionVariants>;

export default function Description({
  className,
  size = 'default',
  variant = 'default',
  ...props
}: DescriptionProps) {
  return (
    <p
      className={cn(descriptionVariants({ size, variant }), className)}
      {...props}
    />
  );
}
