import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center gap-2 justify-center rounded-2xl border border-transparent text-sm font-normal transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 font-medium text-base px-4',
  {
    variants: {
      variant: {
        default: 'bg-blue text-light-gray hover:bg-blue/80',
        outline:
          'border-black/10 bg-white hover:bg-black/5 hover:text-black aria-expanded:bg-black/5',
        secondary: 'bg-transparent text-blue border-blue',
        ghost: 'hover:bg-black/5 hover:text-black aria-expanded:bg-black/5',
        destructive: 'bg-black text-white hover:bg-black/80',
        link: 'text-blue underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11.25',
        '48': 'h-12 ',
        sm: "h-7 gap-1 rounded-md px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-7 rounded-md in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      nativeButton={nativeButton ?? render == null}
      render={render}
      {...props}
    />
  );
}

export { Button, buttonVariants };
