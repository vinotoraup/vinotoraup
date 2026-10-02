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

export const refundPolicyEs: PolicySection[] = [
  {
    id: 'when-this-policy-applies',
    title: 'Cuándo se aplica esta Política',
    paragraphs: [
      'Esta Política se aplica a los pagos por los servicios de Vinotoraup, salvo que el cliente y Vinotoraup hayan acordado condiciones distintas en un acuerdo de prestación de servicios, una descripción de los trabajos, una propuesta aceptada, un formulario de pedido u otro documento escrito.',
      'Las condiciones específicas de ese documento prevalecen sobre esta Política para la contratación correspondiente. Enviar una consulta o solicitar un presupuesto a través del sitio web no crea, por sí solo, una obligación de pago.',
    ],
  },
  {
    id: 'how-service-fees-are-determined',
    title: 'Cómo se determinan las tarifas',
    paragraphs: [
      'Las tarifas pueden tener en cuenta los servicios incluidos, el personal asignado, el horario de atención, el volumen previsto de contactos, la incorporación del cliente, la formación, los procesos de trabajo y la capacidad reservada para el cliente.',
      'Un pago no pasa a ser automáticamente reembolsable si el cliente decide más adelante reducir o interrumpir el servicio. Antes de determinar si corresponde un ajuste, Vinotoraup revisa el trabajo realizado, los recursos comprometidos, el periodo de facturación aplicable y las condiciones comerciales acordadas.',
    ],
  },
  {
    id: 'when-an-adjustment-may-be-appropriate',
    title: 'Cuándo puede corresponder un ajuste',
    paragraphs: [
      'Vinotoraup puede considerar un reembolso, un reembolso parcial, un crédito o una corrección de facturación cuando:',
    ],
    list: [
      'Se haya cobrado el mismo importe más de una vez.',
      'Un cargo sea incorrecto o se haya realizado un pago por error.',
      'No se haya prestado un servicio acordado y el importe correspondiente no se haya devengado por otro motivo ni aplicado al trabajo acordado.',
      'Vinotoraup y el cliente acuerden un ajuste.',
      'El acuerdo aplicable o la ley lo exijan.',
    ],
    afterList: [
      'La solución adecuada puede consistir en corregir una factura, aplicar un crédito a otro importe pendiente de pago o devolver los fondos.',
    ],
  },
  {
    id: 'work-already-completed',
    title: 'Trabajo ya realizado',
    paragraphs: [
      'Las tarifas correspondientes a servicios ya prestados generalmente no son reembolsables, salvo que el acuerdo aplicable o la ley establezcan lo contrario. El trabajo realizado puede incluir atención al cliente, llamadas salientes, seguimiento de pagos, asistencia con solicitudes, gestión de reclamaciones y otras tareas comprendidas en el alcance acordado.',
      'Si un cliente ha pagado por un periodo o un conjunto de tareas que solo se ha completado en parte, el tratamiento del importe restante dependerá del acuerdo y de las circunstancias.',
    ],
  },
  {
    id: 'preparation-and-reserved-capacity',
    title: 'Preparación y capacidad reservada',
    paragraphs: [
      'El trabajo puede comenzar antes de atender la primera llamada de un cliente. Es posible que Vinotoraup deba definir procesos, preparar instrucciones, formar al personal, configurar la operación o asignar personal y capacidad.',
      'Si el cliente cancela el servicio, las tarifas correspondientes al trabajo realizado o a los recursos debidamente comprometidos pueden seguir siendo exigibles. Cualquier tarifa de preparación no reembolsable, compromiso mínimo o cargo por capacidad reservada debe comunicarse y acordarse como parte de las condiciones del servicio.',
    ],
  },
  {
    id: 'payments-made-in-advance',
    title: 'Pagos anticipados',
    paragraphs: [
      'Un importe pagado por adelantado que no se haya utilizado no se pierde ni es reembolsable de forma automática. Vinotoraup revisará el acuerdo aplicable, el trabajo realizado, los recursos comprometidos, los cargos pendientes y los requisitos legales pertinentes.',
      'Si el acuerdo exige reembolsar un saldo no utilizado, Vinotoraup lo hará conforme a sus condiciones.',
    ],
  },
  {
    id: 'cancellation-by-a-client',
    title: 'Cancelación por parte del cliente',
    paragraphs: [
      'Un cliente puede solicitar la finalización de los servicios con sujeción al plazo de preaviso, compromiso mínimo, ciclo de facturación o procedimiento de terminación acordado para la contratación.',
      'La solicitud de cancelación no elimina las tarifas ya devengadas ni los cargos por el trabajo realizado y los recursos debidamente comprometidos antes de la fecha efectiva de finalización. Si no se acordaron condiciones de cancelación específicas, Vinotoraup y el cliente revisarán la solicitud teniendo en cuenta el alcance vigente, el trabajo realizado, los recursos asignados y los importes pendientes.',
    ],
  },
  {
    id: 'changes-to-the-scope',
    title: 'Cambios en el alcance',
    paragraphs: [
      'Un cliente puede solicitar cambios en los servicios, la capacidad, los procesos de trabajo u otros aspectos de la contratación. Reducir el trabajo futuro no genera automáticamente un reembolso por servicios anteriores o costes ya incurridos.',
      'Las partes determinarán cómo afecta a las tarifas futuras cualquier cambio acordado. Todo pago en exceso o importe no utilizado que deba abonarse como crédito o devolverse conforme a las condiciones acordadas se ajustará según corresponda.',
    ],
  },
  {
    id: 'incorrect-or-duplicate-charges',
    title: 'Cargos incorrectos o duplicados',
    paragraphs: [
      'Si crees que una factura o un pago es incorrecto, ponte en contacto con Vinotoraup tan pronto como sea razonablemente posible. Incluye los datos de la factura o del pago y explica el problema.',
      'Revisaremos los registros de facturación y las condiciones del servicio aplicables. Si se confirma un error o un cargo duplicado, Vinotoraup podrá corregir la factura, emitir un crédito o reembolsar el importe correspondiente.',
    ],
  },
  {
    id: 'concerns-about-a-service',
    title: 'Problemas relacionados con un servicio',
    paragraphs: [
      'Si un cliente considera que un servicio acordado no se prestó conforme a lo previsto, debe proporcionar los detalles del problema. Vinotoraup revisará el alcance, los registros del servicio, las responsabilidades y las demás circunstancias pertinentes.',
      'Según el acuerdo y el resultado de la revisión, la solución puede consistir en corregir el problema, completar el trabajo afectado, ajustar una factura, emitir un crédito o proporcionar un reembolso parcial o total. Comunicar un problema no da automáticamente derecho a un reembolso completo.',
    ],
  },
  {
    id: 'making-a-refund-request',
    title: 'Cómo solicitar un reembolso',
    paragraphs: [
      'Para ayudarnos a evaluar la solicitud, proporciona:',
    ],
    list: [
      'El nombre de la empresa cliente.',
      'El nombre y los datos de contacto de la persona que presenta la solicitud.',
      'Los datos de la factura o del pago correspondiente.',
      'El importe en cuestión.',
      'El motivo de la solicitud.',
      'Cualquier información justificativa relacionada con el problema.',
    ],
    afterList: [
      'Vinotoraup podrá solicitar más detalles cuando sea razonablemente necesario.',
    ],
  },
  {
    id: 'how-requests-are-reviewed',
    title: 'Cómo se revisan las solicitudes',
    paragraphs: [
      'Cada solicitud se examina teniendo en cuenta la contratación correspondiente. La revisión puede abarcar el acuerdo escrito, los registros de facturación y pago, los servicios prestados, los recursos comprometidos, los importes pagados por adelantado que no se hayan utilizado, las condiciones de cancelación y los ajustes anteriores.',
      'Presentar una solicitud no garantiza un reembolso.',
    ],
  },
  {
    id: 'if-a-refund-is-approved',
    title: 'Si se aprueba un reembolso',
    paragraphs: [
      'Por lo general, un reembolso monetario aprobado se devolverá mediante el método de pago original cuando sea razonablemente posible. Si ese método no está disponible, Vinotoraup y el cliente podrán acordar otro método adecuado.',
      'El tiempo que tarden los fondos en aparecer puede depender del banco, del proveedor de pagos o del método utilizado. Las comisiones de transacción y las diferencias derivadas de la conversión de divisas se tratarán conforme al acuerdo aplicable y a la ley.',
    ],
  },
  {
    id: 'credits-and-invoice-corrections',
    title: 'Créditos y correcciones de facturas',
    paragraphs: [
      'En algunas circunstancias, un crédito a favor del cliente o un ajuste de factura puede ser más adecuado que la devolución de fondos. Un crédito acordado puede aplicarse a servicios actuales o futuros de Vinotoraup conforme a las condiciones comerciales correspondientes.',
      'Un crédito no equivale a un reembolso en efectivo, salvo que las partes acuerden lo contrario o lo exija la legislación aplicable.',
    ],
  },
  {
    id: 'payment-disputes-and-chargebacks',
    title: 'Disputas sobre pagos y devoluciones de cargos',
    paragraphs: [
      'Si un cliente sospecha que hay un error de facturación, contactar directamente con Vinotoraup nos permite revisarlo junto con los registros de pago y del servicio correspondientes.',
      'Iniciar una devolución de cargo u otra disputa sobre un pago no elimina una obligación de pago válida conforme al acuerdo aplicable. Al responder a una disputa, Vinotoraup podrá facilitar al banco o al proveedor de pagos los contratos, facturas y registros del servicio pertinentes. Nada de lo dispuesto en esta sección limita derechos que legalmente no puedan restringirse.',
    ],
  },
  {
    id: 'if-vinotoraup-ends-an-engagement',
    title: 'Si Vinotoraup finaliza una contratación',
    paragraphs: [
      'Si Vinotoraup suspende o finaliza un servicio, el tratamiento de los pagos dependerá del motivo, del trabajo ya realizado, de los recursos comprometidos, de las obligaciones pendientes y del acuerdo aplicable.',
      'Si Vinotoraup ha recibido un pago por servicios que no prestará y no tiene una base contractual o legal para conservar el importe no utilizado, podrá emitir el reembolso o crédito correspondiente. Si la contratación finaliza por un incumplimiento del cliente, falta de pago, instrucciones ilícitas o uso indebido del servicio, cualquier reembolso se determinará conforme al acuerdo y a la legislación aplicable.',
    ],
  },
  {
    id: 'business-services-and-return-periods',
    title: 'Servicios para empresas y plazos de devolución',
    paragraphs: [
      'Vinotoraup presta servicios personalizados a empresas. Por ello, los procedimientos de devolución de productos físicos de consumo no se aplican a estos servicios.',
      'Los derechos de cancelación y reembolso correspondientes a cada contratación se determinan según el acuerdo pertinente y los derechos imperativos establecidos por la legislación aplicable.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Cambios en esta Política',
    paragraphs: [
      'Vinotoraup puede actualizar esta Política cuando cambien sus servicios, prácticas de facturación, acuerdos contractuales o requisitos aplicables. La versión actualizada estará disponible en el sitio web.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacto',
    paragraphs: [
      [
        'Si tienes preguntas sobre un pago, una cancelación, un crédito o una solicitud de reembolso, utiliza el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        ' de la página Contacto del sitio web de Vinotoraup.',
      ],
    ],
  },
];


export function getRefundPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? refundPolicyEs : refundPolicy;
}
