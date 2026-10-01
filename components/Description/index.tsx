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
      '54': 'text-[32px] lg:text-[54px] leading-none',
    },
    variant: {
      default: 'text-blue',
      'blue-gray-dark/50': 'text-blue-gray-dark/50',
      'blue-gray-dark': 'text-blue-gray-dark',
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
