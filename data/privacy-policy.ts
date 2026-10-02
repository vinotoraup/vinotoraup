import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const privacyPolicy: PolicySection[] = [
  {
    id: 'scope-of-this-notice',
    title: 'Scope of This Notice',
    paragraphs: [
      'This Notice covers personal data collected through the Vinotoraup website and our direct communications with prospective and existing business clients.',
      'Vinotoraup also handles customer communications on behalf of financial businesses. That work may involve information about their customers, applicants, borrowers, policyholders, or other individuals. Where we process that information under a client’s instructions, the client generally determines why and how it is used. A separate service or data processing agreement may govern those activities.',
    ],
  },
  {
    id: 'information-you-provide',
    title: 'Information You Provide',
    paragraphs: ['When you submit the website contact form, we collect:'],
    list: [
      'Your name.',
      'Your company name.',
      'Your business email address.',
      'Your phone number, if you provide one.',
      'The information you include in your message.',
    ],
    afterList: [
      'Please provide only information relevant to your inquiry. Do not include passwords, payment card details, account credentials, or other unnecessary sensitive information in a general message.',
    ],
  },
  {
    id: 'information-collected-during-website-visits',
    title: 'Information Collected During Website Visits',
    paragraphs: [
      'The website and the systems that support it may collect technical information when you visit. Depending on the technologies in use, this may include:',
    ],
    list: [
      'Your IP address.',
      'Browser, device, and operating system details.',
      'Language settings.',
      'Pages visited and actions taken on the website.',
      'The date and time of your visit.',
      'Referring pages.',
      'Technical, diagnostic, and security information.',
      'Cookie or similar identifiers, where applicable.',
    ],
    afterList: [
      [
        'Our ',
        { href: '/cookie-notice', label: 'Cookie Notice' },
        ' provides more information about cookies and related technologies.',
      ],
    ],
  },
  {
    id: 'how-we-use-personal-data',
    title: 'How We Use Personal Data',
    paragraphs: ['We may use personal data to:'],
    list: [
      'Receive and respond to inquiries.',
      'Understand the customer support a business needs.',
      'Discuss potential services, quotes, and proposals.',
      'Communicate with prospective and existing clients.',
      'Establish and manage business relationships.',
      'Provide agreed services.',
      'Keep records of relevant business communications.',
      'Operate, maintain, and protect the website.',
      'Detect misuse, fraud, or unauthorized activity.',
      'Understand website use and improve its functionality, where applicable.',
      'Meet legal, regulatory, accounting, or contractual obligations.',
      'Establish, exercise, or defend legal claims.',
    ],
    afterList: [
      'We do not treat a service inquiry as permission to use your contact details for unrelated purposes.',
    ],
  },
  {
    id: 'legal-grounds-for-processing',
    title: 'Legal Grounds for Processing',
    paragraphs: [
      'Where applicable law requires a legal basis, the basis depends on why we use the information. We may rely on:',
    ],
    list: [
      'Consent, where you have given valid consent to a specific activity.',
      'Contractual necessity, where processing is needed to take requested steps before entering into a contract or to perform one.',
      'Legitimate interests, where processing supports a lawful business purpose and your rights do not override that interest.',
      'Legal obligations, where processing is required to comply with the law.',
      'Legal claims, where information is needed to establish, exercise, or defend legal rights.',
    ],
    afterList: [
      'More than one basis may apply to different uses of the same information.',
    ],
  },
  {
    id: 'contact-form-submissions',
    title: 'Contact Form Submissions',
    paragraphs: [
      'The contact form asks you to confirm that you agree to the processing of your personal data as described in this Notice. We use the details you submit to review your request and respond to you.',
      'Where a specific processing activity relies on consent, you may withdraw that consent by contacting us. This does not affect processing carried out before withdrawal. We may continue to use or retain information where another lawful basis applies.',
    ],
  },
  {
    id: 'business-communications',
    title: 'Business Communications',
    paragraphs: [
      'If you contact Vinotoraup on behalf of a business, we use your details to answer and continue discussions about your request. We may keep relevant correspondence to manage proposals, services, and the business relationship.',
    ],
  },
  {
    id: 'information-we-handle-for-clients',
    title: 'Information We Handle for Clients',
    paragraphs: [
      'Our services may involve customer care, applications, payment reminders, collections support, verification communication, fraud-related contact, complaints, and other agreed customer operations. The information involved depends on the client’s business and the work covered by its agreement with Vinotoraup.',
      'When we act on a client’s behalf, we process personal data within the agreed scope and according to documented instructions, subject to applicable law. The client is generally responsible for identifying a lawful basis for its customer processes and providing any privacy information required for them.',
      'If Vinotoraup holds your information solely while working for one of its clients, that client may be the appropriate organization to handle a request about it. We may refer your request to the client or assist it with a response, depending on our role and obligations.',
    ],
  },
  {
    id: 'financial-and-sensitive-information',
    title: 'Financial and Sensitive Information',
    paragraphs: [
      'Some client engagements may involve information that requires additional care. The data our team may access depends on the outsourced task, the client’s instructions, and the relevant agreement.',
      'Our general website form is for business inquiries. Do not use it to send financial account information, identity documents, passwords, or payment credentials unless you have been directed to an appropriate authorized process.',
    ],
  },
  {
    id: 'sharing-personal-data',
    title: 'Sharing Personal Data',
    paragraphs: [
      'We may share personal data when reasonably necessary for the purposes described in this Notice. Recipients may include:',
    ],
    list: [
      'Providers supporting website hosting, communications, security, and business operations.',
      'Legal, accounting, compliance, or other professional advisers.',
      'Business clients in connection with an agreed service.',
      'Courts, regulators, public authorities, or law enforcement bodies where disclosure is required or permitted by law.',
      'Parties involved in a merger, acquisition, restructuring, financing, or sale of business assets, subject to applicable safeguards.',
    ],
    afterList: [
      'Service providers handling information for us must use it for authorized purposes and follow applicable contractual and legal requirements.',
    ],
  },
  {
    id: 'international-transfers',
    title: 'International Transfers',
    paragraphs: [
      'Vinotoraup, its clients, or its service providers may operate in different countries. As a result, personal data may sometimes be processed outside the country where it was collected.',
      'Where applicable law restricts such transfers, we use an appropriate transfer mechanism or safeguard. The measures required depend on the countries involved and the nature of the processing.',
    ],
  },
  {
    id: 'how-long-we-keep-data',
    title: 'How Long We Keep Data',
    paragraphs: [
      'We retain personal data for as long as reasonably necessary for the purpose for which it was collected. We may keep it longer where required for legal, contractual, regulatory, accounting, security, or dispute-related reasons.',
      'Retention periods depend on the type of information, whether an inquiry becomes a client relationship, how long that relationship lasts, and any applicable recordkeeping obligations. When information is no longer needed, we delete, anonymize, or securely dispose of it as appropriate.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We use organizational and technical measures intended to protect personal data from unauthorized access, alteration, disclosure, loss, or misuse. Additional requirements may be set out in agreements with individual clients.',
      'No method of electronic transmission or storage is completely secure. Please avoid sending information that is unnecessary for your inquiry.',
    ],
  },
  {
    id: 'cookies-and-similar-technologies',
    title: 'Cookies and Similar Technologies',
    paragraphs: [
      'The website may use cookies and similar technologies for functionality, security, preferences, and, where implemented, analytics. Where applicable law requires consent for non-essential cookies, we seek that consent before using them.',
    ],
  },
  {
    id: 'your-privacy-rights',
    title: 'Your Privacy Rights',
    paragraphs: ['Depending on the law that applies to you, you may have the right to:'],
    list: [
      'Access personal data held about you.',
      'Correct inaccurate or incomplete information.',
      'Request deletion in certain circumstances.',
      'Restrict certain processing.',
      'Object to processing on certain grounds.',
      'Withdraw consent where processing relies on it.',
      'Request portability of certain information.',
      'Complain to a competent data protection authority.',
    ],
    afterList: [
      'These rights may be subject to legal conditions, exceptions, and identity verification.',
    ],
  },
  {
    id: 'making-a-request',
    title: 'Making a Request',
    paragraphs: [
      'You may make a request about personal data Vinotoraup handles for its own purposes. We may ask for information needed to verify your identity or locate the relevant records.',
      'If your request concerns information we process solely for a business client, we may refer you to that client or help it respond, depending on our legal and contractual responsibilities.',
    ],
  },
  {
    id: 'complaints',
    title: 'Complaints',
    paragraphs: [
      'If you have concerns about how we handle your information, please contact us so we can review them. You may also have the right to complain to the relevant privacy or data protection authority in your jurisdiction.',
    ],
  },
  {
    id: 'third-party-websites',
    title: 'Third-Party Websites',
    paragraphs: [
      'Our website may link to sites operated by other organizations. Their privacy practices are outside Vinotoraup’s control. Review their privacy information before submitting personal data to them.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: 'Children’s Privacy',
    paragraphs: [
      'The website and services are intended for business and professional use. They are not directed at children, and we do not knowingly seek children’s personal data through our general inquiry channels.',
      'If we become aware that such information was submitted without an appropriate lawful basis, we will take reasonable steps to delete or otherwise handle it appropriately.',
    ],
  },
  {
    id: 'changes-to-this-notice',
    title: 'Changes to This Notice',
    paragraphs: [
      'We may update this Notice to reflect changes to the website, services, technologies, processing practices, or applicable requirements. The revised version will be made available on the website.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      [
        'If you have questions, privacy requests, or concerns, please use the ',
        { href: contactFormHref, label: 'contact form' },
        ' on the Let’s Talk page of the Vinotoraup website.',
      ],
    ],
  },
];

export const privacyPolicyEs: PolicySection[] = privacyPolicy;

export function getPrivacyPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? privacyPolicyEs : privacyPolicy;
}
