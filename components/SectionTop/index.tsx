import type { ReactNode } from 'react';
import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';

type SectionTopProps = {
  text: ReactNode;
};

export default function SectionTop({ text }: SectionTopProps) {
  return (
    <div className="mb-10">
      <div className="px-4 py-1 bg-blue-gray/25 rounded-2xl flex items-center gap-2.5 w-max mb-4">
        <span className="w-2.75 h-2.75 bg-blue"></span>

        <Description className="font-medium">{text}</Description>
      </div>
      <Separator />
    </div>
  );
}
