import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const refundPolicy: PolicySection[] = [
  {
    id: 'when-this-policy-applies',
    title: 'When This Policy Applies',
    paragraphs: [
      'This Policy applies to payments for Vinotoraup services unless the client and Vinotoraup have agreed on different terms in a service agreement, statement of work, accepted proposal, order form, or another written document.',
      'Specific terms in such a document take precedence over this Policy for the relevant engagement. Sending an inquiry or requesting a quote through the website does not, by itself, create a payment obligation.',
    ],
  },
  {
    id: 'how-service-fees-are-determined',
    title: 'How Service Fees Are Determined',
    paragraphs: [
      'Fees may reflect the services covered, staffing, operating hours, expected contact volume, onboarding, training, workflows, and capacity allocated to the client.',
      'A payment does not automatically become refundable if a client later decides to reduce or stop the service. Vinotoraup reviews the work already performed, resources committed, applicable billing period, and agreed commercial terms before determining whether an adjustment is due.',
    ],
  },
  {
    id: 'when-an-adjustment-may-be-appropriate',
    title: 'When an Adjustment May Be Appropriate',
    paragraphs: [
      'Vinotoraup may consider a refund, partial refund, credit, or billing correction when:',
    ],
    list: [
      'The same amount was charged more than once.',
      'A charge was incorrect, or a payment was made in error.',
      'An agreed service was not delivered, and the related amount has not otherwise been earned or applied to agreed work.',
      'Vinotoraup and the client agree on an adjustment.',
      'The applicable agreement or law requires one.',
    ],
    afterList: [
      'The appropriate outcome may be a corrected invoice, a credit against another amount due, or a return of funds.',
    ],
  },
  {
    id: 'work-already-completed',
    title: 'Work Already Completed',
    paragraphs: [
      'Fees for services already performed are generally not refundable, unless the applicable agreement or law requires otherwise. Completed work may include customer care, outbound calls, payment follow-ups, application support, complaint handling, and other tasks within the agreed scope.',
      'If a client has paid for a period or scope that was only partly completed, the treatment of any remaining amount depends on the agreement and the circumstances.',
    ],
  },
  {
    id: 'preparation-and-reserved-capacity',
    title: 'Preparation and Reserved Capacity',
    paragraphs: [
      'Work may begin before the first customer call is handled. Vinotoraup may need to define workflows, prepare instructions, train personnel, configure an operation, or allocate staff and capacity.',
      'Fees for work completed or resources properly committed may remain payable if the client cancels. Any non-refundable setup fee, minimum commitment, or reserved-capacity charge must be communicated and agreed as part of the service arrangement.',
    ],
  },
  {
    id: 'payments-made-in-advance',
    title: 'Payments Made in Advance',
    paragraphs: [
      'An unused prepaid amount is neither automatically forfeited nor automatically refundable. Vinotoraup will review the applicable agreement, work completed, committed resources, outstanding charges, and relevant legal requirements.',
      'If the agreement requires a refund of an unused balance, Vinotoraup will handle it under those terms.',
    ],
  },
  {
    id: 'cancellation-by-a-client',
    title: 'Cancellation by a Client',
    paragraphs: [
      'A client may request to end services subject to any notice period, minimum commitment, billing cycle, or termination procedure agreed for the engagement.',
      'A cancellation request does not erase fees already accrued or charges for work completed and resources properly committed before the effective end date. If no specific cancellation terms were agreed, Vinotoraup and the client will review the request in light of the current scope, work completed, resources allocated, and outstanding amounts.',
    ],
  },
  {
    id: 'changes-to-the-scope',
    title: 'Changes to the Scope',
    paragraphs: [
      'A client may ask to change the services, capacity, workflows, or other parts of an engagement. Reducing future work does not automatically create a refund for earlier services or costs already incurred.',
      'The parties will determine how an agreed change affects future fees. Any overpayment or unused amount that should be credited or returned under the agreed terms will be adjusted accordingly.',
    ],
  },
  {
    id: 'incorrect-or-duplicate-charges',
    title: 'Incorrect or Duplicate Charges',
    paragraphs: [
      'If you believe an invoice or payment is incorrect, contact Vinotoraup as soon as reasonably possible. Include the invoice or payment details and explain the issue.',
      'We will review the billing records and applicable service terms. Where an error or duplicate charge is confirmed, Vinotoraup may correct the invoice, issue a credit, or refund the relevant amount.',
    ],
  },
  {
    id: 'concerns-about-a-service',
    title: 'Concerns About a Service',
    paragraphs: [
      'If a client believes an agreed service was not delivered as required, the client should provide details of the concern. Vinotoraup will review the scope, service records, responsibilities, and other relevant circumstances.',
      'Depending on the agreement and the findings, the resolution may involve correcting the issue, completing affected work, adjusting an invoice, issuing a credit, or providing a partial or full refund. Raising a concern does not automatically entitle a client to a full refund.',
    ],
  },
  {
    id: 'making-a-refund-request',
    title: 'Making a Refund Request',
    paragraphs: ['To help us assess a request, please provide:'],
    list: [
      'The client company’s name.',
      'The name and contact details of the person making the request.',
      'The relevant invoice or payment details.',
      'The amount in question.',
      'The reason for the request.',
      'Any supporting information relevant to the issue.',
    ],
    afterList: [
      'Vinotoraup may ask for further details where reasonably necessary.',
    ],
  },
  {
    id: 'how-requests-are-reviewed',
    title: 'How Requests Are Reviewed',
    paragraphs: [
      'Each request is considered in the context of the relevant engagement. The review may cover the written agreement, billing and payment records, completed services, committed resources, unused prepaid amounts, cancellation terms, and previous adjustments.',
      'Submitting a request does not guarantee a refund.',
    ],
  },
  {
    id: 'if-a-refund-is-approved',
    title: 'If a Refund Is Approved',
    paragraphs: [
      'An approved monetary refund will generally be returned through the original payment method where reasonably possible. If that method is unavailable, Vinotoraup and the client may agree on another appropriate method.',
      'The time it takes for the funds to appear may depend on the bank, payment provider, or payment method. Transaction fees and currency conversion differences will be handled under the applicable agreement and law.',
    ],
  },
  {
    id: 'credits-and-invoice-corrections',
    title: 'Credits and Invoice Corrections',
    paragraphs: [
      'An account credit or invoice adjustment may be more suitable than a return of funds in some circumstances. An agreed credit may be applied to current or future Vinotoraup services under the relevant commercial terms.',
      'A credit is not a cash refund unless the parties agree otherwise or applicable law requires it.',
    ],
  },
  {
    id: 'payment-disputes-and-chargebacks',
    title: 'Payment Disputes and Chargebacks',
    paragraphs: [
      'If a client suspects a billing error, contacting Vinotoraup directly allows us to review it against the relevant payment and service records.',
      'Starting a chargeback or other payment dispute does not remove a valid payment obligation under the applicable agreement. Vinotoraup may provide relevant contracts, invoices, and service records to a bank or payment provider when responding to a dispute. Nothing in this section limits rights that cannot lawfully be restricted.',
    ],
  },
  {
    id: 'if-vinotoraup-ends-an-engagement',
    title: 'If Vinotoraup Ends an Engagement',
    paragraphs: [
      'If Vinotoraup suspends or ends a service, the treatment of payments depends on the reason, work already performed, resources committed, outstanding obligations, and the applicable agreement.',
      'Where Vinotoraup has received payment for services it will not provide and has no contractual or legal basis to retain the unused amount, an appropriate refund or credit may be issued. If the engagement ends because of a client’s breach, non-payment, unlawful instructions, or misuse of the service, any refund will be determined under the agreement and applicable law.',
    ],
  },
  {
    id: 'business-services-and-return-periods',
    title: 'Business Services and Return Periods',
    paragraphs: [
      'Vinotoraup provides customized services to businesses. Procedures for returning physical consumer products therefore do not apply to these services.',
      'Cancellation and refund rights for an engagement are determined by the relevant agreement and any mandatory rights under applicable law.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to This Policy',
    paragraphs: [
      'Vinotoraup may update this Policy when its services, billing practices, contractual arrangements, or applicable requirements change. The updated version will be made available on the website.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      [
        'If you have questions about a payment, cancellation, credit, or refund request, please use the ',
        { href: contactFormHref, label: 'contact form' },
        ' on the Let’s Talk page of the Vinotoraup website.',
      ],
    ],
  },
];

export const refundPolicyEs: PolicySection[] = refundPolicy;

export function getRefundPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? refundPolicyEs : refundPolicy;
}
