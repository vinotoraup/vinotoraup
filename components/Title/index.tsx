import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

const titleVariants = cva(
  'font-normal [&_span]:text-blue-gray [&_span]:inline',
  {
    variants: {
      size: {
        h1: 'text-[58px] lg:text-8xl leading-none tracking-[-2px] [&_span]:italic',
        h2: 'text-[40px] lg:text-[76px] leading-none lg:leading-[110%]',
        h3: 'text-[28px]/[110%]',
      },
      variant: {
        black: 'text-blue',
        'blue-gray-dark/50': 'text-blue-gray-dark/50',
        'blue-gray-dark': 'text-blue-gray-dark',
      },
    },
    defaultVariants: {
      size: 'h2',
      variant: 'black',
    },
  }
);

type TitleSize = NonNullable<VariantProps<typeof titleVariants>['size']>;

const titleSizes: TitleSize[] = ['h1', 'h2', 'h3'];

type TitleProps = ComponentPropsWithoutRef<'h1'> &
  Omit<VariantProps<typeof titleVariants>, 'size'> & {
    as?: ElementType;
    size?: TitleSize;
  };

export default function Title({
  as: Tag = 'h2',
  size,
  variant = 'black',
  className,
  ...props
}: TitleProps) {
  const resolvedSize =
    size ??
    (typeof Tag === 'string' && titleSizes.includes(Tag as TitleSize)
      ? (Tag as TitleSize)
      : 'h2');

  return (
    <Tag
      className={cn(titleVariants({ size: resolvedSize, variant }), className)}
      {...props}
    />
  );
}
