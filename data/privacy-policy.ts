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

export const privacyPolicyEs: PolicySection[] = [
  {
    id: 'scope-of-this-notice',
    title: 'Alcance de este aviso',
    paragraphs: [
      'Este Aviso se aplica a los datos personales recopilados a través del sitio web de Vinotoraup y de nuestras comunicaciones directas con empresas que son o podrían llegar a ser clientes.',
      'Vinotoraup también gestiona comunicaciones con clientes por cuenta de empresas financieras. Ese trabajo puede implicar el tratamiento de información sobre sus clientes, solicitantes, prestatarios, titulares de pólizas u otras personas. Cuando tratamos esa información siguiendo las instrucciones de una empresa cliente, esta suele determinar para qué y cómo se utiliza. Estas actividades pueden regirse por un acuerdo de prestación de servicios o de tratamiento de datos separado.',
    ],
  },
  {
    id: 'information-you-provide',
    title: 'Información que nos proporcionas',
    paragraphs: [
      'Cuando envías el formulario de contacto del sitio web, recopilamos:',
    ],
    list: [
      'Tu nombre.',
      'El nombre de tu empresa.',
      'Tu correo electrónico de trabajo.',
      'Tu número de teléfono, si decides proporcionarlo.',
      'La información que incluyas en tu mensaje.',
    ],
    afterList: [
      'Proporciona únicamente información relacionada con tu consulta. No incluyas contraseñas, datos de tarjetas de pago, credenciales de acceso a cuentas ni otra información sensible que no sea necesaria en un mensaje general.',
    ],
  },
  {
    id: 'information-collected-during-website-visits',
    title: 'Información recopilada durante las visitas al sitio web',
    paragraphs: [
      'El sitio web y los sistemas que lo hacen funcionar pueden recopilar información técnica cuando lo visitas. Según las tecnologías utilizadas, esta información puede incluir:',
    ],
    list: [
      'Tu dirección IP.',
      'Datos sobre tu navegador, dispositivo y sistema operativo.',
      'La configuración de idioma.',
      'Las páginas visitadas y las acciones realizadas en el sitio web.',
      'La fecha y hora de tu visita.',
      'Las páginas desde las que llegaste al sitio web.',
      'Información técnica, de diagnóstico y de seguridad.',
      'Identificadores de cookies o tecnologías similares, cuando corresponda.',
    ],
    afterList: [
      [
        'Nuestro ',
        { href: '/cookie-notice', label: 'Aviso de cookies' },
        ' ofrece más información sobre las cookies y tecnologías relacionadas.',
      ],
    ],
  },
  {
    id: 'how-we-use-personal-data',
    title: 'Cómo utilizamos los datos personales',
    paragraphs: [
      'Podemos utilizar datos personales para:',
    ],
    list: [
      'Recibir consultas y responderlas.',
      'Entender qué tipo de atención al cliente necesita una empresa.',
      'Hablar sobre posibles servicios, presupuestos y propuestas.',
      'Comunicarnos con empresas que son o podrían llegar a ser clientes.',
      'Establecer y gestionar relaciones comerciales.',
      'Prestar los servicios acordados.',
      'Conservar registros de comunicaciones comerciales relevantes.',
      'Gestionar, mantener y proteger el sitio web.',
      'Detectar usos indebidos, fraudes o actividades no autorizadas.',
      'Entender cómo se utiliza el sitio web y mejorar su funcionamiento, cuando corresponda.',
      'Cumplir obligaciones legales, regulatorias, contables o contractuales.',
      'Formular, ejercer o defender reclamaciones.',
    ],
    afterList: [
      'El envío de una consulta sobre nuestros servicios no se considera una autorización para utilizar tus datos de contacto con fines ajenos a ella.',
    ],
  },
  {
    id: 'legal-grounds-for-processing',
    title: 'Bases jurídicas del tratamiento',
    paragraphs: [
      'Cuando la legislación aplicable exige una base jurídica, esta depende del motivo por el que utilizamos la información. Podemos basarnos en:',
    ],
    list: [
      'El consentimiento, cuando hayas dado tu consentimiento válido para una actividad concreta.',
      'La necesidad contractual, cuando el tratamiento sea necesario para adoptar las medidas que hayas solicitado antes de celebrar un contrato o para ejecutarlo.',
      'Los intereses legítimos, cuando el tratamiento responda a una finalidad empresarial lícita y tus derechos no prevalezcan sobre ese interés.',
      'Las obligaciones legales, cuando el tratamiento sea necesario para cumplir la ley.',
      'Las reclamaciones legales, cuando la información sea necesaria para formular, ejercer o defender derechos.',
    ],
    afterList: [
      'Pueden aplicarse distintas bases jurídicas a diferentes usos de la misma información.',
    ],
  },
  {
    id: 'contact-form-submissions',
    title: 'Envíos a través del formulario de contacto',
    paragraphs: [
      'El formulario de contacto te pide que confirmes tu aceptación del tratamiento de tus datos personales tal como se describe en este Aviso. Utilizamos los datos que envías para revisar tu solicitud y responderte.',
      'Cuando una actividad concreta de tratamiento se base en tu consentimiento, podrás retirarlo poniéndote en contacto con nosotros. La retirada no afecta al tratamiento realizado antes de ella. Podremos seguir utilizando o conservando información cuando exista otra base jurídica que lo permita.',
    ],
  },
  {
    id: 'business-communications',
    title: 'Comunicaciones comerciales',
    paragraphs: [
      'Si contactas con Vinotoraup en nombre de una empresa, utilizamos tus datos para responderte y continuar las conversaciones sobre tu solicitud. Podemos conservar la correspondencia relevante para gestionar propuestas, servicios y la relación comercial.',
    ],
  },
  {
    id: 'information-we-handle-for-clients',
    title: 'Información que tratamos para nuestros clientes',
    paragraphs: [
      'Nuestros servicios pueden incluir atención al cliente, asistencia con solicitudes, recordatorios de pago, apoyo en cobros, comunicaciones relacionadas con verificaciones o posibles fraudes, gestión de reclamaciones y otras tareas acordadas de atención al cliente. La información utilizada depende de la actividad de la empresa cliente y del trabajo incluido en su acuerdo con Vinotoraup.',
      'Cuando actuamos por cuenta de una empresa cliente, tratamos los datos personales dentro del alcance acordado y conforme a instrucciones documentadas, con sujeción a la legislación aplicable. Por lo general, la empresa cliente es responsable de determinar la base jurídica de los tratamientos relacionados con sus clientes y de proporcionarles la información sobre privacidad que corresponda.',
      'Si Vinotoraup conserva tu información únicamente porque trabaja para una de sus empresas clientes, esa empresa puede ser la entidad adecuada para atender una solicitud relacionada con tus datos. Según nuestra función y obligaciones, podremos remitirle tu solicitud o ayudarla a responder.',
    ],
  },
  {
    id: 'financial-and-sensitive-information',
    title: 'Información financiera y sensible',
    paragraphs: [
      'Algunos servicios prestados a clientes pueden implicar el tratamiento de información que requiere especial cuidado. Los datos a los que puede acceder nuestro equipo dependen de la tarea externalizada, las instrucciones de la empresa cliente y el acuerdo correspondiente.',
      'El formulario general del sitio web está destinado a consultas comerciales. No lo utilices para enviar información de cuentas financieras, documentos de identidad, contraseñas ni credenciales de pago, salvo que se te haya indicado un procedimiento autorizado y adecuado para hacerlo.',
    ],
  },
  {
    id: 'sharing-personal-data',
    title: 'Con quién compartimos datos personales',
    paragraphs: [
      'Podemos compartir datos personales cuando sea razonablemente necesario para los fines descritos en este Aviso. Entre los destinatarios pueden encontrarse:',
    ],
    list: [
      'Proveedores que prestan servicios de alojamiento web, comunicaciones, seguridad y apoyo a nuestras operaciones.',
      'Asesores jurídicos, contables, de cumplimiento normativo u otros profesionales.',
      'Empresas clientes en relación con un servicio acordado.',
      'Tribunales, organismos reguladores, autoridades públicas o fuerzas de seguridad, cuando la divulgación sea obligatoria o esté permitida por la ley.',
      'Partes involucradas en una fusión, adquisición, reestructuración, financiación o venta de activos empresariales, con las garantías aplicables.',
    ],
    afterList: [
      'Los proveedores de servicios que traten información por cuenta nuestra deben utilizarla para fines autorizados y cumplir los requisitos contractuales y legales aplicables.',
    ],
  },
  {
    id: 'international-transfers',
    title: 'Transferencias internacionales',
    paragraphs: [
      'Vinotoraup, sus empresas clientes o sus proveedores de servicios pueden operar en distintos países. Por ello, en ocasiones los datos personales pueden tratarse fuera del país en el que se recopilaron.',
      'Cuando la legislación aplicable restrinja estas transferencias, utilizaremos un mecanismo de transferencia o una garantía adecuada. Las medidas necesarias dependerán de los países implicados y de la naturaleza del tratamiento.',
    ],
  },
  {
    id: 'how-long-we-keep-data',
    title: 'Durante cuánto tiempo conservamos los datos',
    paragraphs: [
      'Conservamos los datos personales durante el tiempo razonablemente necesario para la finalidad con la que se recopilaron. Podemos conservarlos durante más tiempo cuando sea necesario por motivos legales, contractuales, regulatorios, contables, de seguridad o relacionados con una controversia.',
      'Los plazos de conservación dependen del tipo de información, de si una consulta da lugar a una relación comercial, de la duración de esa relación y de las obligaciones de conservación de registros que sean aplicables. Cuando la información deje de ser necesaria, la eliminaremos, anonimizaremos o destruiremos de forma segura, según corresponda.',
    ],
  },
  {
    id: 'security',
    title: 'Seguridad',
    paragraphs: [
      'Utilizamos medidas organizativas y técnicas destinadas a proteger los datos personales frente al acceso, la modificación o la divulgación no autorizados, así como frente a su pérdida o uso indebido. Los acuerdos con cada empresa cliente pueden establecer requisitos adicionales.',
      'Ningún método de transmisión o almacenamiento electrónico es completamente seguro. Evita enviar información que no sea necesaria para tu consulta.',
    ],
  },
  {
    id: 'cookies-and-similar-technologies',
    title: 'Cookies y tecnologías similares',
    paragraphs: [
      'El sitio web puede utilizar cookies y tecnologías similares para su funcionamiento, seguridad y preferencias y, cuando se hayan implementado, para fines de análisis. Si la legislación aplicable exige consentimiento para utilizar cookies no esenciales, lo solicitaremos antes de utilizarlas.',
    ],
  },
  {
    id: 'your-privacy-rights',
    title: 'Tus derechos de privacidad',
    paragraphs: [
      'Según la legislación que te sea aplicable, puedes tener derecho a:',
    ],
    list: [
      'Acceder a los datos personales que conservamos sobre ti.',
      'Corregir información inexacta o incompleta.',
      'Solicitar la eliminación de tus datos en determinadas circunstancias.',
      'Limitar determinados tratamientos.',
      'Oponerte al tratamiento por ciertos motivos.',
      'Retirar tu consentimiento cuando el tratamiento se base en él.',
      'Solicitar la portabilidad de determinada información.',
      'Presentar una reclamación ante una autoridad de protección de datos competente.',
    ],
    afterList: [
      'El ejercicio de estos derechos puede estar sujeto a condiciones legales, excepciones y a la verificación de tu identidad.',
    ],
  },
  {
    id: 'making-a-request',
    title: 'Cómo presentar una solicitud',
    paragraphs: [
      'Puedes presentar una solicitud relacionada con los datos personales que Vinotoraup trata para sus propios fines. Es posible que te pidamos la información necesaria para verificar tu identidad o localizar los registros correspondientes.',
      'Si tu solicitud se refiere a información que tratamos únicamente por cuenta de una empresa cliente, podremos remitirte a ella o ayudarla a responder, según nuestras responsabilidades legales y contractuales.',
    ],
  },
  {
    id: 'complaints',
    title: 'Reclamaciones',
    paragraphs: [
      'Si te preocupa cómo tratamos tu información, ponte en contacto con nosotros para que podamos revisar tu caso. También puedes tener derecho a presentar una reclamación ante la autoridad competente en materia de privacidad o protección de datos de tu jurisdicción.',
    ],
  },
  {
    id: 'third-party-websites',
    title: 'Sitios web de terceros',
    paragraphs: [
      'Nuestro sitio web puede incluir enlaces a páginas gestionadas por otras organizaciones. Las prácticas de privacidad de esas páginas quedan fuera del control de Vinotoraup. Consulta su información sobre privacidad antes de enviarles datos personales.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: 'Privacidad de los menores',
    paragraphs: [
      'El sitio web y los servicios están destinados a un uso empresarial y profesional. No están dirigidos a menores y no solicitamos deliberadamente datos personales de menores a través de nuestros canales generales de consulta.',
      'Si tenemos conocimiento de que se ha enviado este tipo de información sin una base jurídica adecuada, tomaremos medidas razonables para eliminarla o tratarla de otra forma apropiada.',
    ],
  },
  {
    id: 'changes-to-this-notice',
    title: 'Cambios en este Aviso',
    paragraphs: [
      'Podemos actualizar este Aviso para reflejar cambios en el sitio web, los servicios, las tecnologías, las prácticas de tratamiento o los requisitos aplicables. La versión revisada estará disponible en el sitio web.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacto',
    paragraphs: [
      [
        'Si tienes preguntas, solicitudes relacionadas con la privacidad o alguna inquietud, utiliza el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        ' de la página Contacto del sitio web de Vinotoraup.',
      ],
    ],
  },
];


export function getPrivacyPolicy(locale: string): PolicySection[] {
  return locale === 'es' ? privacyPolicyEs : privacyPolicy;
}
