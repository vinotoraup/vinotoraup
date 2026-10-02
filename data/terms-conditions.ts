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

export const termsConditionsEs: PolicySection[] = [
  {
    id: 'what-vinotoraup-does',
    title: 'Qué hace Vinotoraup',
    paragraphs: [
      'Vinotoraup ofrece servicios externalizados de centro de llamadas y apoyo en la atención al cliente, principalmente para empresas financieras. Según el alcance acordado, estos servicios pueden incluir atención al cliente, asistencia con solicitudes, recordatorios de pago y comunicaciones relacionadas con cobros, contacto con clientes sobre posibles fraudes, apoyo en tareas relacionadas con el cumplimiento normativo, gestión de reclamaciones, llamadas salientes y otras comunicaciones recurrentes con clientes.',
      'Vinotoraup trabaja conforme a los procesos definidos por sus clientes. Salvo que un acuerdo escrito establezca expresamente lo contrario, Vinotoraup no ofrece productos bancarios, de crédito, seguros, inversiones, servicios de pago ni otros productos financieros regulados a los clientes de las empresas que contratan sus servicios.',
    ],
  },
  {
    id: 'who-the-services-are-for',
    title: 'A quién van dirigidos los servicios',
    paragraphs: [
      'Los servicios están destinados principalmente a empresas y organizaciones. Si contactas con Vinotoraup o celebras un acuerdo en nombre de una de ellas, confirmas que tienes autorización para hacerlo.',
    ],
  },
  {
    id: 'using-the-website',
    title: 'Uso del sitio web',
    paragraphs: [
      'Puedes utilizar el sitio web para conocer Vinotoraup, consultar los tipos de trabajo que realiza y contactar con el equipo sobre una posible contratación. Debes utilizarlo de forma lícita y sin interferir en su funcionamiento ni en los derechos de otras personas.',
    ],
    listIntro: 'En particular, no debes:',
    list: [
      'Enviar contenido fraudulento, engañoso, abusivo o ilícito.',
      'Intentar acceder sin autorización a sistemas, cuentas o información.',
      'Introducir programas maliciosos o realizar ataques que afecten a la seguridad o disponibilidad del sitio web.',
      'Recopilar contenido o datos del sitio web mediante métodos automatizados no autorizados.',
      'Hacerte pasar por otra persona o empresa.',
      'Vulnerar los derechos de propiedad intelectual, privacidad o confidencialidad de terceros.',
    ],
    afterList: [
      'Vinotoraup podrá limitar el acceso cuando sea razonablemente necesario para proteger el sitio web, sus operaciones o a otros usuarios.',
    ],
  },
  {
    id: 'inquiries-through-lets-talk',
    title: 'Consultas a través de Contacto',
    paragraphs: [
      'La página Contacto te permite enviar una consulta indicando tu nombre, el nombre de tu empresa, tu correo electrónico de trabajo, un número de teléfono opcional y un mensaje en el que describas el apoyo que necesitas.',
      'Enviar una consulta no crea un contrato de prestación de servicios ni garantiza que Vinotoraup asuma el trabajo. El equipo podrá solicitar más información, hablar contigo sobre tus necesidades y evaluar si puede prestar los servicios solicitados. Debes proporcionar información exacta y contar con autorización para compartirla.',
    ],
  },
  {
    id: 'quotes-and-proposals',
    title: 'Presupuestos y propuestas',
    paragraphs: [
      'Un presupuesto o una propuesta pueden describir el alcance previsto, las condiciones en las que se basa la oferta, el precio y, en su caso, su plazo de validez. Las conversaciones y las estimaciones preliminares no constituyen un compromiso de prestación de servicios hasta que las partes completen el proceso de aceptación o contratación correspondiente.',
      'El precio de un servicio puede depender del trabajo necesario, el volumen previsto de contactos, el horario de atención, el personal asignado, los idiomas, la formación, los sistemas, los procesos de trabajo y otros requisitos acordados.',
    ],
  },
  {
    id: 'the-agreement-for-your-services',
    title: 'El acuerdo de prestación de servicios',
    paragraphs: [
      'El trabajo que Vinotoraup realiza para un cliente debe recogerse en un acuerdo escrito, una propuesta, un formulario de pedido, una descripción de los servicios u otro documento similar aceptado por ambas partes. Ese documento puede establecer:',
    ],
    list: [
      'Las consultas de clientes y las tareas incluidas en el servicio.',
      'Las responsabilidades de cada equipo y los momentos en que se transfieren los casos.',
      'Las instrucciones, los procedimientos, el horario de atención, la capacidad y el personal asignado.',
      'Las tarifas, la facturación, las condiciones de pago y los impuestos aplicables.',
      'Los niveles de servicio o indicadores de rendimiento acordados.',
      'Los requisitos de confidencialidad, protección de datos y seguridad.',
      'La duración de la relación contractual y la forma en que puede modificarse o finalizarse.',
    ],
    afterList: [
      'Si un documento acordado contradice estos Términos en lo relativo a la prestación de los servicios contratados, prevalecerá ese documento para la contratación correspondiente.',
    ],
  },
  {
    id: 'what-clients-need-to-provide',
    title: 'Qué deben proporcionar los clientes',
    paragraphs: [
      'Los clientes deben facilitar las instrucciones, la información, los materiales, los accesos, las aprobaciones y la colaboración razonablemente necesarios para realizar el trabajo acordado. Son responsables de los productos y procesos para los que solicitan el apoyo de Vinotoraup, así como de garantizar que sus instrucciones cumplen las leyes y los requisitos aplicables a su actividad.',
      'Vinotoraup podrá basarse en la información proporcionada por un cliente, salvo que tenga motivos razonables para cuestionar su exactitud, la autorización para proporcionarla o su licitud.',
    ],
  },
  {
    id: 'support-for-financial-businesses',
    title: 'Apoyo a empresas financieras',
    paragraphs: [
      'Las referencias del sitio web a cobros, fraude, verificación, cumplimiento normativo, solicitudes y reclamaciones describen tareas de comunicación con clientes y apoyo operativo. No constituyen asesoramiento jurídico, financiero, regulatorio, de inversión, crediticio, de seguros ni en materia de cumplimiento normativo.',
      'Las decisiones, aprobaciones, políticas y actividades reguladas siguen siendo responsabilidad del cliente, salvo en la medida en que un acuerdo escrito establezca expresamente y de forma lícita otra cosa.',
    ],
  },
  {
    id: 'lawful-instructions',
    title: 'Instrucciones lícitas',
    paragraphs: [
      'Ambas partes deben cumplir sus obligaciones legales y contractuales aplicables. Vinotoraup podrá rechazar una instrucción que considere razonablemente ilícita, fraudulenta, engañosa, abusiva, contraria al alcance acordado o susceptible de generar riesgos legales o de seguridad inaceptables.',
      'Vinotoraup podrá solicitar aclaraciones, información justificativa o cambios en un proceso propuesto antes de realizar el trabajo afectado.',
    ],
  },
  {
    id: 'confidential-information',
    title: 'Información confidencial',
    paragraphs: [
      'Las conversaciones sobre los servicios y las relaciones contractuales pueden implicar el intercambio de información empresarial, técnica, operativa o de clientes de carácter confidencial. Cada parte solo debe divulgar la información recibida de la otra cuando esté autorizada, sea necesario para cumplir las obligaciones acordadas o lo exija la ley.',
      'Un acuerdo de prestación de servicios, un acuerdo de confidencialidad u otro documento escrito pueden establecer obligaciones de confidencialidad más detalladas para una contratación concreta.',
    ],
  },
  {
    id: 'personal-data',
    title: 'Datos personales',
    paragraphs: [
      [
        'El ',
        { href: '/privacy-notice', label: 'Aviso de privacidad' },
        ' de Vinotoraup explica cómo se tratan los datos personales enviados directamente a través de su sitio web. Cuando Vinotoraup trata datos de clientes finales por cuenta de una empresa que contrata sus servicios, las funciones de las partes, las instrucciones, las obligaciones de seguridad y otros requisitos pueden establecerse en un acuerdo de tratamiento de datos separado o en otro contrato aplicable. Cuando la normativa de protección de datos exija un contrato con el encargado del tratamiento, dicho contrato deberá incluir las cláusulas requeridas.',
      ],
      'Los clientes son responsables de facilitar la información sobre privacidad que corresponda y de contar con una base jurídica adecuada para el tratamiento de los datos personales que encarguen a Vinotoraup.',
    ],
  },
  {
    id: 'website-content-and-intellectual-property',
    title: 'Contenido del sitio web y propiedad intelectual',
    paragraphs: [
      'Los textos, elementos de marca, logotipos, gráficos, diseño y demás contenidos del sitio web pertenecen a Vinotoraup o se utilizan con autorización, salvo que se indique lo contrario. Puedes consultar estos materiales para fines empresariales internos habituales relacionados con la evaluación de los servicios.',
      'No puedes reproducir, distribuir, volver a publicar, vender, licenciar ni explotar comercialmente partes sustanciales del sitio web sin autorización. Los derechos sobre los materiales creados o utilizados durante la prestación de servicios a un cliente se determinarán en el acuerdo escrito correspondiente.',
    ],
  },
  {
    id: 'external-websites-and-services',
    title: 'Sitios web y servicios externos',
    paragraphs: [
      'El sitio web puede incluir enlaces a recursos gestionados por terceros. Vinotoraup no controla esos recursos y no se responsabiliza de su contenido, disponibilidad, seguridad ni políticas. Al utilizarlos, pueden aplicarse sus propias condiciones.',
    ],
  },
  {
    id: 'website-availability',
    title: 'Disponibilidad del sitio web',
    paragraphs: [
      'Vinotoraup puede actualizar el contenido del sitio web o interrumpir temporalmente el acceso por tareas de mantenimiento, problemas técnicos o motivos de seguridad. No garantiza que el sitio web esté siempre disponible o libre de errores.',
      'Las descripciones publicadas en el sitio web ofrecen información general. La disponibilidad y el alcance concreto de cada servicio dependen de los requisitos acordados para cada contratación.',
    ],
  },
  {
    id: 'engagements-and-outcomes',
    title: 'Contrataciones y resultados',
    paragraphs: [
      'Vinotoraup podrá decidir si acepta una propuesta de contratación. La información del sitio web no garantiza que un servicio sea adecuado para todas las empresas.',
      'Los tiempos de respuesta, niveles de servicio, objetivos operativos y otros compromisos medibles solo serán aplicables si figuran expresamente en el acuerdo correspondiente. La contratación de los servicios de Vinotoraup no garantiza por sí sola resultados concretos en ventas, cobros, finanzas, retención de clientes, cumplimiento normativo ni otros ámbitos empresariales.',
    ],
  },
  {
    id: 'fees-and-payment',
    title: 'Tarifas y pagos',
    paragraphs: [
      'Las tarifas se establecen en el presupuesto, la propuesta, el acuerdo de prestación de servicios, el formulario de pedido u otro documento comercial aceptado que corresponda. Ese documento también puede especificar el calendario de pagos, la moneda, el proceso de facturación, los impuestos y las consecuencias de los pagos atrasados.',
      'La información publicada en el sitio web no constituye una oferta de precio vinculante, salvo que se indique expresamente lo contrario.',
    ],
  },
  {
    id: 'ending-a-service-and-requesting-a-refund',
    title: 'Finalización de un servicio y solicitud de reembolso',
    paragraphs: [
      [
        'El acuerdo de prestación de servicios aplicable establece cómo puede un cliente cancelar o finalizar una contratación. Los créditos, reembolsos u otros ajustes de pago se gestionan conforme a ese acuerdo y a la ',
        { href: '/refund-policy', label: 'Política de reembolsos' },
        ', cuando esta sea aplicable.',
      ],
      'La preparación, la incorporación del cliente, la formación, la capacidad reservada y el trabajo ya realizado pueden influir en el importe que, en su caso, pueda reembolsarse. La decisión de dejar de utilizar un servicio no da automáticamente derecho a un reembolso.',
    ],
  },
  {
    id: 'suspension-and-termination',
    title: 'Suspensión y terminación',
    paragraphs: [
      'Un servicio podrá suspenderse o finalizarse por los motivos y mediante el procedimiento establecidos en el acuerdo correspondiente. Entre esos motivos pueden figurar un incumplimiento grave, la falta de pago, un uso ilícito, problemas de seguridad o un uso indebido del servicio.',
      'La finalización de una contratación no elimina las tarifas, los derechos, las responsabilidades ni otras obligaciones surgidas antes de su finalización. Las disposiciones previstas para seguir aplicándose después conservarán su vigencia.',
    ],
  },
  {
    id: 'liability',
    title: 'Responsabilidad',
    paragraphs: [
      'En la medida permitida por la legislación aplicable, Vinotoraup no será responsable de pérdidas indirectas, incidentales, especiales, punitivas o consecuentes relacionadas con el uso del sitio web o de los servicios, incluidas las pérdidas de beneficios, ingresos, oportunidades, reputación comercial o ahorros previstos.',
      'Un acuerdo de prestación de servicios puede establecer límites de responsabilidad adicionales, importes máximos, exclusiones, obligaciones de indemnización o una distribución de riesgos para una contratación concreta. Nada de lo dispuesto en estos Términos excluye o limita la responsabilidad cuando la legislación aplicable no lo permite.',
    ],
  },
  {
    id: 'claims-arising-from-client-instructions',
    title: 'Reclamaciones derivadas de las instrucciones del cliente',
    paragraphs: [
      'En la medida permitida por la ley y el acuerdo aplicable, un cliente podrá ser responsable de las pérdidas, reclamaciones, responsabilidades o costes razonables derivados de instrucciones ilícitas, materiales que no estaba autorizado a proporcionar, vulneraciones de derechos de terceros, uso indebido de los servicios o un incumplimiento grave de sus obligaciones.',
      'Las condiciones de indemnización más específicas, si las hubiera, se establecerán en el acuerdo de prestación de servicios correspondiente.',
    ],
  },
  {
    id: 'events-outside-reasonable-control',
    title: 'Circunstancias fuera de un control razonable',
    paragraphs: [
      'Vinotoraup no será responsable de retrasos o incumplimientos causados por acontecimientos fuera de su control razonable, sin perjuicio de las condiciones distintas que pueda establecer el acuerdo de prestación de servicios aplicable. Estos acontecimientos pueden incluir fallos importantes de las telecomunicaciones, interrupciones de infraestructuras, desastres naturales, actuaciones gubernamentales, disturbios civiles o conflictos armados.',
    ],
  },
  {
    id: 'updates-to-these-terms',
    title: 'Actualización de estos Términos',
    paragraphs: [
      'Vinotoraup podrá modificar estos Términos cuando cambien el sitio web, los servicios, las prácticas operativas o los requisitos aplicables. La versión actualizada se publicará en el sitio web.',
      'Los cambios en los servicios contratados por un cliente existente seguirán sujetos a las condiciones de su acuerdo correspondiente.',
    ],
  },
  {
    id: 'governing-law-and-disputes',
    title: 'Ley aplicable y controversias',
    paragraphs: [
      'Toda controversia relacionada con estos Términos o con el uso del sitio web de Vinotoraup se resolverá conforme a la ley y la jurisdicción aplicables a dicha controversia.',
      'Si un acuerdo de prestación de servicios separado establece la ley aplicable o un procedimiento de resolución de controversias, esas disposiciones se aplicarán a la contratación correspondiente.',
    ],
  },
  {
    id: 'if-part-of-these-terms-cannot-be-enforced',
    title: 'Si alguna disposición no puede aplicarse',
    paragraphs: [
      'Si una disposición se considera inválida o inaplicable, se limitará o interpretará según sea necesario conforme a la legislación aplicable. Las demás disposiciones seguirán vigentes.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacto',
    paragraphs: [
      [
        'Si tienes preguntas sobre estos Términos o los servicios de Vinotoraup, utiliza el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        ' de la página Contacto del sitio web de Vinotoraup.',
      ],
    ],
  },
];


export function getTermsConditions(locale: string): PolicySection[] {
  return locale === 'es' ? termsConditionsEs : termsConditions;
}
