import { contactFormHref } from '@/data/contact';

export type PolicyLink = {
  href: string;
  label: string;
};

export type PolicyStrong = {
  strong: string;
};

export type PolicyPart = string | PolicyLink | PolicyStrong;

export type PolicyText = string | PolicyPart[];

export type PolicySection = {
  id: string;
  title?: string;
  nav?: boolean;
  paragraphs: PolicyText[];
  listIntro?: string;
  list?: PolicyText[];
  afterList?: PolicyText[];
};

export const termsConditions: PolicySection[] = [
  {
    id: 'what-vinotoraup-does',
    title: 'What Vinotoraup Does',
    paragraphs: [
      'Vinotoraup provides outsourced call center and customer operations support, primarily for financial businesses. Depending on the agreed scope, this may include customer care, application support, payment reminders and collections communication, fraud-related contact, compliance-related support, complaint handling, outbound calls, and other recurring customer communication.',
      'Vinotoraup supports the processes its clients define. Unless a separate written agreement expressly states otherwise, Vinotoraup does not provide banking, lending, insurance, investment, payment, or other regulated financial products to its clients’ customers.',
    ],
  },
  {
    id: 'who-the-services-are-for',
    title: 'Who the Services Are For',
    paragraphs: [
      'The services are intended primarily for businesses and organizations. If you contact Vinotoraup or enter into an agreement on behalf of one, you confirm that you are authorized to do so.',
    ],
  },
  {
    id: 'using-the-website',
    title: 'Using the Website',
    paragraphs: [
      'You may use the website to learn about Vinotoraup, review the types of work it covers, and contact the team about a possible engagement. Your use must be lawful and must not interfere with the website or the rights of others.',
    ],
    listIntro: 'In particular, you must not:',
    list: [
      'Submit fraudulent, misleading, abusive, or unlawful material.',
      'Attempt to access systems, accounts, or information without authorization.',
      'Introduce malware or carry out attacks that affect the website’s security or availability.',
      'Collect website content or data through unauthorized automated methods.',
      'Impersonate another person or business.',
      'Infringe another party’s intellectual property, privacy, or confidentiality rights.',
    ],
    afterList: [
      'Vinotoraup may limit access where reasonably necessary to protect the website, its operations, or other users.',
    ],
  },
  {
    id: 'inquiries-through-lets-talk',
    title: 'Inquiries Through Let’s Talk',
    paragraphs: [
      'The Let’s Talk page lets you send an inquiry using your name, company name, business email, optional phone number, and a message describing the support you need.',
      'Sending an inquiry does not create a service contract or guarantee that Vinotoraup will take on the work. The team may ask for more information, discuss your requirements, and assess whether the requested services can be provided. You must submit accurate information and have permission to share it.',
    ],
  },
  {
    id: 'quotes-and-proposals',
    title: 'Quotes and Proposals',
    paragraphs: [
      'A quote or proposal may describe the proposed scope, assumptions, pricing, and any period for which the offer remains valid. Discussions and preliminary estimates are not a commitment to provide services until the parties complete the applicable acceptance or contracting process.',
      'The price of an engagement may depend on the work involved, expected contact volumes, coverage hours, staffing, languages, training, systems, workflows, and other agreed requirements.',
    ],
  },
  {
    id: 'the-agreement-for-your-services',
    title: 'The Agreement for Your Services',
    paragraphs: [
      'The work Vinotoraup performs for a client should be set out in a separate written agreement, proposal, order form, statement of work, or similar document accepted by both parties. That document may cover:',
    ],
    list: [
      'The customer conversations and tasks included in the service.',
      'The responsibilities of each team and the points at which cases are handed over.',
      'Instructions, procedures, operating hours, capacity, and staffing.',
      'Fees, invoicing, payment terms, and applicable taxes.',
      'Any agreed service levels or performance measures.',
      'Confidentiality, data protection, and security requirements.',
      'The duration of the engagement and how it may be changed or ended.',
    ],
    afterList: [
      'If an agreed document conflicts with these Terms on the provision of contracted services, that document takes precedence for the relevant engagement.',
    ],
  },
  {
    id: 'what-clients-need-to-provide',
    title: 'What Clients Need to Provide',
    paragraphs: [
      'Clients must provide the instructions, information, materials, access, approvals, and cooperation reasonably needed to carry out the agreed work. They are responsible for the products and processes they ask Vinotoraup to support and for ensuring that their instructions comply with the laws and requirements applicable to their business.',
      'Vinotoraup may work from information supplied by a client unless there is a reasonable reason to question its accuracy, authority, or lawfulness.',
    ],
  },
  {
    id: 'support-for-financial-businesses',
    title: 'Support for Financial Businesses',
    paragraphs: [
      'Website references to collections, fraud, verification, compliance, applications, and complaints describe customer communication and operational support. They do not constitute legal, financial, regulatory, investment, credit, insurance, or compliance advice.',
      'Regulated decisions, approvals, policies, and activities remain the responsibility of the client, except to the extent a separate written agreement expressly and lawfully provides otherwise.',
    ],
  },
  {
    id: 'lawful-instructions',
    title: 'Lawful Instructions',
    paragraphs: [
      'Both parties must meet their applicable legal and contractual obligations. Vinotoraup may decline an instruction it reasonably considers unlawful, fraudulent, misleading, abusive, contrary to the agreed scope, or likely to create unacceptable legal or security risks.',
      'Vinotoraup may ask for clarification, supporting information, or changes to a proposed workflow before carrying out the affected work.',
    ],
  },
  {
    id: 'confidential-information',
    title: 'Confidential Information',
    paragraphs: [
      'Service discussions and engagements may involve confidential business, technical, operational, or customer information. Either party should disclose information received from the other only when authorized, needed to perform agreed obligations, or required by law.',
      'A separate service agreement, non-disclosure agreement, or other written document may set out more detailed confidentiality duties for a particular engagement.',
    ],
  },
  {
    id: 'personal-data',
    title: 'Personal Data',
    paragraphs: [
      [
        'Vinotoraup’s ',
        { href: '/privacy-notice', label: 'Privacy Notice' },
        ' explains how personal data submitted directly through its website is handled. When Vinotoraup processes customer data on behalf of a business client, the parties’ roles, instructions, security duties, and other requirements may be addressed in a separate data processing agreement or other applicable contract. Where data protection law requires a processor contract, that contract must contain the required terms.',
      ],
      'Clients are responsible for providing any required privacy information and establishing an appropriate lawful basis for the personal data they instruct Vinotoraup to process.',
    ],
  },
  {
    id: 'website-content-and-intellectual-property',
    title: 'Website Content and Intellectual Property',
    paragraphs: [
      'The website’s text, brand elements, logos, graphics, design, and other content belong to Vinotoraup or are used with permission, unless stated otherwise. You may view the material for ordinary internal business purposes connected with evaluating the services.',
      'You may not reproduce, distribute, republish, sell, license, or commercially exploit substantial parts of the website without authorization. Rights in materials created or used during a client engagement will be determined by the relevant written agreement.',
    ],
  },
  {
    id: 'external-websites-and-services',
    title: 'External Websites and Services',
    paragraphs: [
      'The website may link to resources operated by third parties. Vinotoraup does not control those resources and is not responsible for their content, availability, security, or policies. Their own terms may apply when you use them.',
    ],
  },
  {
    id: 'website-availability',
    title: 'Website Availability',
    paragraphs: [
      'Vinotoraup may update website content or temporarily interrupt access for maintenance, technical issues, or security reasons. It does not guarantee that the website will always be available or free of errors.',
      'Descriptions on the website provide general information. The availability and precise scope of any service depend on the requirements agreed for a particular engagement.',
    ],
  },
  {
    id: 'engagements-and-outcomes',
    title: 'Engagements and Outcomes',
    paragraphs: [
      'Vinotoraup may decide whether to accept a proposed engagement. Information on the website does not promise that a service will suit every business.',
      'Response times, service levels, operational targets, and other measurable commitments apply only if expressly included in the relevant agreement. The use of Vinotoraup’s services does not, by itself, guarantee specific sales, collection, financial, customer retention, compliance, or other business results.',
    ],
  },
  {
    id: 'fees-and-payment',
    title: 'Fees and Payment',
    paragraphs: [
      'Fees are established in the applicable quote, proposal, service agreement, order form, or other accepted commercial document. That document may also specify the payment schedule, currency, invoicing process, taxes, and consequences of late payment.',
      'Website information is not a binding price offer unless expressly stated otherwise.',
    ],
  },
  {
    id: 'ending-a-service-and-requesting-a-refund',
    title: 'Ending a Service and Requesting a Refund',
    paragraphs: [
      [
        'The applicable service agreement sets out how a client may cancel or end an engagement. Any credits, refunds, or other payment adjustments are handled under that agreement and the ',
        { href: '/refund-policy', label: 'Refund Policy' },
        ', where it applies.',
      ],
      'Preparation, onboarding, training, reserved capacity, and work already performed may affect the amount, if any, that can be refunded. A decision to stop using a service does not automatically entitle a client to a refund.',
    ],
  },
  {
    id: 'suspension-and-termination',
    title: 'Suspension and Termination',
    paragraphs: [
      'A service may be suspended or ended on the grounds and through the process stated in the relevant agreement. These may include a material breach, non-payment, unlawful use, security concerns, or misuse of the service.',
      'Ending an engagement does not remove fees, rights, liabilities, or other obligations that arose before its end. Provisions intended to continue afterward remain effective.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    paragraphs: [
      'To the extent permitted by applicable law, Vinotoraup is not liable for indirect, incidental, special, punitive, or consequential losses connected with use of the website or services, including lost profits, revenue, opportunities, goodwill, or anticipated savings.',
      'A service agreement may set out additional liability limits, caps, exclusions, indemnities, or allocations of risk for a particular engagement. Nothing in these Terms excludes or limits liability where applicable law does not permit it.',
    ],
  },
  {
    id: 'claims-arising-from-client-instructions',
    title: 'Claims Arising from Client Instructions',
    paragraphs: [
      'To the extent permitted by law and the applicable agreement, a client may be responsible for losses, claims, liabilities, or reasonable costs arising from unlawful instructions, materials it was not authorized to provide, infringement of third-party rights, misuse of services, or a material breach of its obligations.',
      'Any more specific indemnity terms will be set out in the relevant service agreement.',
    ],
  },
  {
    id: 'events-outside-reasonable-control',
    title: 'Events Outside Reasonable Control',
    paragraphs: [
      'Vinotoraup is not responsible for delays or failures caused by events beyond its reasonable control, subject to any different terms in the applicable service agreement. Such events may include major telecommunications failures, infrastructure outages, natural disasters, government action, civil disturbances, or armed conflict.',
    ],
  },
  {
    id: 'updates-to-these-terms',
    title: 'Updates to These Terms',
    paragraphs: [
      'Vinotoraup may revise these Terms when the website, services, operating practices, or applicable requirements change. The updated version will be made available on the website.',
      'Changes to an existing client’s contracted services remain subject to the terms of that client’s applicable agreement.',
    ],
  },
  {
    id: 'governing-law-and-disputes',
    title: 'Governing Law and Disputes',
    paragraphs: [
      'Any dispute concerning these Terms or use of the Vinotoraup website will be handled in accordance with the laws and jurisdiction applicable to the dispute.',
      'Where a separate service agreement specifies the governing law or a dispute resolution procedure, those provisions apply to the relevant engagement.',
    ],
  },
  {
    id: 'if-part-of-these-terms-cannot-be-enforced',
    title: 'If Part of These Terms Cannot Be Enforced',
    paragraphs: [
      'If a provision is found invalid or unenforceable, it will be limited or interpreted as necessary under applicable law. The remaining provisions will continue to apply.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      [
        'If you have questions about these Terms or Vinotoraup’s services, please use the ',
        { href: contactFormHref, label: 'contact form' },
        ' on the Let’s Talk page of the Vinotoraup website.',
      ],
    ],
  },
];

export const termsConditionsEs: PolicySection[] = termsConditions;

export function getTermsConditions(locale: string): PolicySection[] {
  return locale === 'es' ? termsConditionsEs : termsConditions;
}
