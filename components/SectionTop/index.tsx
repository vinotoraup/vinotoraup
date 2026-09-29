import Description from '@/components/Description';
import { Separator } from '@/components/ui/separator';

export default function SectionTop() {
  return (
    <div className="mb-10">
      <div className="px-4 py-1 bg-blue-gray/25 rounded-2xl flex items-center gap-2.5 w-max mb-4">
        <span className="w-2.75 h-2.75 bg-blue"></span>

        <Description className="font-medium">
          Support for Financial Businesses
        </Description>
      </div>
      <Separator />
    </div>
  );
}
