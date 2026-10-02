import Description from '@/components/Description';
import SectionTop from '@/components/SectionTop';
import { Link } from '@/i18n/navigation';
import type {
  PolicyPart,
  PolicySection,
  PolicyText,
} from '@/data/terms-conditions';

type TermsContentProps = {
  sections: PolicySection[];
};

function isPolicyLink(
  part: PolicyPart
): part is { href: string; label: string } {
  return typeof part === 'object' && 'href' in part;
}

function isPolicyStrong(part: PolicyPart): part is { strong: string } {
  return typeof part === 'object' && 'strong' in part;
}

function PolicyRichText({ text }: { text: PolicyText }) {
  if (typeof text === 'string') {
    return (
      <Description variant="blue-gray-dark" className="leading-[110%]">
        {text}
      </Description>
    );
  }

  return (
    <Description variant="blue-gray-dark" className="leading-[110%]">
      {text.map((part, index) => {
        if (typeof part === 'string') {
          return (
            <span key={index} className="inline">
              {part}
            </span>
          );
        }

        if (isPolicyLink(part)) {
          return (
            <Link
              key={index}
              href={part.href}
              className="inline underline underline-offset-2"
            >
              {part.label}
            </Link>
          );
        }

        if (isPolicyStrong(part)) {
          return (
            <strong key={index} className="font-medium">
              {part.strong}
            </strong>
          );
        }

        return null;
      })}
    </Description>
  );
}

export default function TermsContent({ sections }: TermsContentProps) {
  return (
    <div className="container">
      <div className="space-y-10 lg:space-y-8">
        {sections.map((section) => (
          <div key={section.id} id={section.id}>
            {section.title && (
              <SectionTop text={section.title} className="mb-4 lg:mb-6" />
            )}

            <div className="space-y-6 max-w-194.25 ml-auto">
              {section.paragraphs.map((paragraph, index) => (
                <PolicyRichText key={index} text={paragraph} />
              ))}

              {section.listIntro && (
                <Description
                  variant="blue-gray-dark"
                  className="leading-[110%]"
                >
                  {section.listIntro}
                </Description>
              )}

              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, index) => (
                    <li key={index}>
                      <PolicyRichText text={item} />
                    </li>
                  ))}
                </ul>
              )}

              {section.afterList?.map((paragraph, index) => (
                <PolicyRichText key={index} text={paragraph} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
