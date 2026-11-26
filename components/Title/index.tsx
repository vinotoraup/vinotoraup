import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

// A plain <span> inside a title is the highlighted part (Tertiary).
// Words from <RevealWords> carry `data-word`: they keep the title colour
// unless marked `.highlight`, and stay inline-block so they can animate.
const titleVariants = cva(
  'font-normal [&_span]:text-tertiary-text [&_span]:inline [&_[data-word]]:text-inherit [&_[data-word]]:inline-block [&_[data-word].highlight]:text-tertiary-text',
  {
    variants: {
      size: {
        // Mobile / Tablet / Desktop H1
        h1: 'text-[44px] leading-11 tracking-[-1px] md:text-[64px] md:leading-16 md:tracking-[-1.5px] lg:text-8xl lg:leading-23 lg:tracking-[-2px]',
        // Mobile / Tablet / Desktop H2
        h2: 'text-4xl leading-10 tracking-[-0.8px] md:text-[52px] md:leading-14 md:tracking-[-1px] lg:text-[76px] lg:leading-21 lg:tracking-[-1.5px]',
        // Mobile / Tablet+Desktop H3
        h3: 'text-2xl leading-7 tracking-[-0.2px] md:text-[40px] md:leading-11 md:tracking-[-0.8px]',
        // Mobile / Tablet+Desktop H4
        h4: 'text-2xl leading-7 tracking-[-0.2px] md:text-[28px] md:leading-[31px]',
        // Subtitle, same on every breakpoint
        subtitle: 'text-2xl leading-[120%] font-medium',
      },
      variant: {
        prime: 'text-prime',
        'secondary/50': 'text-secondary/50',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
      },
    },
    defaultVariants: {
      size: 'h2',
      variant: 'prime',
    },
  }
);

type TitleSize = NonNullable<VariantProps<typeof titleVariants>['size']>;

const titleSizes: TitleSize[] = ['h1', 'h2', 'h3', 'h4'];

type TitleProps = ComponentPropsWithoutRef<'h1'> &
  Omit<VariantProps<typeof titleVariants>, 'size'> & {
    as?: ElementType;
    size?: TitleSize;
  };

export default function Title({
  as: Tag = 'h2',
  size,
  variant = 'prime',
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
