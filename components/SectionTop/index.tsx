import type { ReactNode } from 'react';
import { cn } from 'cn';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';

type SectionTopProps = {
  text: ReactNode;
  hasSeparator?: boolean;
  className?: string;
  badgeClassName?: string;
};

export default function SectionTop({
  text,
  hasSeparator = true,
  className,
  badgeClassName,
}: SectionTopProps) {
  return (
    <div className={cn('mb-10', className)}>
      <div
        className={cn(
          'px-4 py-1 bg-blue-gray/25 rounded-2xl flex items-center gap-2.5 w-max mb-4',
          badgeClassName
        )}
      >
        <span className="w-2.75 h-2.75 bg-blue"></span>

        <Description className="font-medium">{text}</Description>
      </div>
      {hasSeparator && <Separator />}
    </div>
  );
}
