import { contactFormHref } from '@/data/contact';
import type { PolicySection } from '@/data/terms-conditions';

export const cookiePolicy: PolicySection[] = [
  {
    id: 'what-cookies-are',
    title: 'What Cookies Are',
    paragraphs: [
      'Cookies are small pieces of data that a website stores on or reads from your device. They can help a site remember a choice, operate a feature, maintain security, or understand how pages are used.',
      'A session cookie generally expires when your browsing session ends. A persistent cookie may remain for a set period or until you delete it. Cookies can be set by the website itself or by a third-party service used on it.',
    ],
  },
  {
    id: 'similar-technologies',
    title: 'Similar Technologies',
    paragraphs: [
      'Websites may also use local storage, pixels, tags, scripts, and other identifiers for related purposes. In this Notice, cookies also refer to these technologies where they store or access information on a visitor’s device.',
    ],
  },
  {
    id: 'why-they-may-be-used',
    title: 'Why They May Be Used',
    paragraphs: ['Depending on the features installed, cookies may help Vinotoraup:'],
    list: [
      'Keep essential website functions working.',
      'Protect the website and detect misuse.',
      'Support the contact form.',
      'Remember a language or privacy preference.',
      'Identify technical errors.',
      'Understand website traffic and navigation.',
      'Improve page performance and usability.',
      'Measure promotional activity, if such tools are implemented.',
    ],
    afterList: [
      'The categories in this Notice describe possible uses. They do not mean that every category is active on the website.',
    ],
  },
  {
    id: 'essential-cookies',
    title: 'Essential Cookies',
    paragraphs: [
      'Essential cookies support functions needed to provide the website or a feature you request. They may be used for security, network management, form operation, or remembering your cookie choices.',
      'Where applicable law permits, these cookies may operate without consent. Blocking them in your browser could prevent parts of the website from working correctly.',
    ],
  },
  {
    id: 'preference-cookies',
    title: 'Preference Cookies',
    paragraphs: [
      'Preference cookies can remember choices such as your selected language. This may save you from making the same selection each time you visit.',
      'If consent is required for a particular preference cookie, it will be used only after that consent has been obtained.',
    ],
  },
  {
    id: 'analytics-and-performance-cookies',
    title: 'Analytics and Performance Cookies',
    paragraphs: [
      'If analytics tools are implemented, their cookies may show which pages are visited, how visitors move through the site, where errors occur, and how the website performs. Vinotoraup may use that information to identify problems and improve the site.',
      'Where applicable law requires consent, analytics and performance cookies will be activated only after you provide it.',
    ],
  },
  {
    id: 'marketing-cookies',
    title: 'Marketing Cookies',
    paragraphs: [
      'If Vinotoraup implements advertising or campaign measurement tools, related cookies may help measure interactions with promotions or support advertising features. Some may be provided by third parties.',
      'Marketing cookies will be subject to consent where applicable law requires it.',
    ],
  },
  {
    id: 'cookies-set-by-vinotoraup-and-third-parties',
    title: 'Cookies Set by Vinotoraup and Third Parties',
    paragraphs: [
      'First-party cookies are set by or on behalf of the Vinotoraup website. Third-party cookies may be set or accessed through external services used on the site.',
      'Depending on the tools implemented, third parties may support hosting, security, analytics, communications, or other website functions. The providers and cookies in use may change when those tools change.',
    ],
  },
  {
    id: 'consent-and-cookie-choices',
    title: 'Consent and Cookie Choices',
    paragraphs: [
      'Where required by applicable law, Vinotoraup will ask for your consent before using cookies that are not essential. A cookie notice or preference control may let you accept, reject, or manage the relevant categories. The website may store your choice so it can remember it.',
      'Essential cookies may remain active where they are needed for website operation and the law permits their use without consent.',
    ],
  },
  {
    id: 'changing-your-preferences',
    title: 'Changing Your Preferences',
    paragraphs: [
      'If cookie controls are available on the website, you can use them to change your choices or withdraw consent for non-essential cookies. Withdrawal does not affect use that lawfully took place before you changed your preference.',
      'Choices may be stored separately for each browser or device. You may therefore need to set them again when using a different one.',
    ],
  },
  {
    id: 'browser-controls',
    title: 'Browser Controls',
    paragraphs: [
      'Most browsers let you view, delete, restrict, or block cookies through their settings. Browser controls operate separately from any preferences offered on the website.',
      'Blocking or deleting cookies may affect features that rely on them, including the contact form or saved settings.',
    ],
  },
  {
    id: 'how-long-cookies-last',
    title: 'How Long Cookies Last',
    paragraphs: [
      'Cookie duration depends on the technology and its purpose. Some cookies expire at the end of a browsing session; others remain for a defined period or until they are deleted.',
      'Durations may change as website tools and settings are updated. Cookie-related information is kept only as long as reasonably necessary for the relevant purpose, subject to applicable requirements.',
    ],
  },
  {
    id: 'personal-data-and-cookies',
    title: 'Personal Data and Cookies',
    paragraphs: [
      'Information collected through cookies may qualify as personal data. Depending on the tools used, it may include IP addresses, browser and device details, identifiers, page interactions, and technical records.',
      [
        'Where cookie information is personal data, Vinotoraup handles it in accordance with applicable privacy requirements and its ',
        { href: '/privacy-notice', label: 'Privacy Notice' },
        '.',
      ],
    ],
  },
  {
    id: 'processing-in-other-countries',
    title: 'Processing in Other Countries',
    paragraphs: [
      'A website service provider may process cookie-related information outside the country from which you visit. Where that information is personal data and applicable law restricts its transfer, appropriate safeguards or lawful transfer arrangements will be used as required.',
    ],
  },
  {
    id: 'changes-to-this-notice',
    title: 'Changes to This Notice',
    paragraphs: [
      'Vinotoraup may update this Notice when website features, service providers, cookies, or applicable requirements change. The revised version will be made available on the website.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      [
        'If you have questions about cookies on the Vinotoraup website, please use the ',
        { href: contactFormHref, label: 'contact form' },
        ' on the Let’s Talk page.',
      ],
    ],
  },
];

export const cookiePolicyEs: PolicySection[] = [
  {
    id: 'what-cookies-are',
    title: 'Qué son las cookies',
    paragraphs: [
      'Las cookies son pequeños archivos de datos que un sitio web almacena en tu dispositivo o lee desde él. Pueden ayudar a recordar una elección, hacer funcionar una función, mantener la seguridad o entender cómo se utilizan las páginas.',
      'Una cookie de sesión suele caducar cuando termina tu sesión de navegación. Una cookie persistente puede permanecer durante un periodo determinado o hasta que la elimines. Las cookies pueden proceder del propio sitio web o de un servicio de terceros utilizado en él.',
    ],
  },
  {
    id: 'similar-technologies',
    title: 'Tecnologías similares',
    paragraphs: [
      'Los sitios web también pueden utilizar almacenamiento local, píxeles, etiquetas, scripts y otros identificadores con fines relacionados. En este Aviso, las referencias a las cookies incluyen también estas tecnologías cuando almacenan información en el dispositivo de un visitante o acceden a ella.',
    ],
  },
  {
    id: 'why-they-may-be-used',
    title: 'Para qué pueden utilizarse',
    paragraphs: [
      'Según las funciones instaladas, las cookies pueden ayudar a Vinotoraup a:',
    ],
    list: [
      'Mantener en funcionamiento las funciones esenciales del sitio web.',
      'Proteger el sitio web y detectar usos indebidos.',
      'Permitir el funcionamiento del formulario de contacto.',
      'Recordar una preferencia de idioma o privacidad.',
      'Detectar errores técnicos.',
      'Entender el tráfico y la navegación en el sitio web.',
      'Mejorar el rendimiento y la facilidad de uso de las páginas.',
      'Medir la actividad promocional, si se implementan herramientas para ello.',
    ],
    afterList: [
      'Las categorías de este Aviso describen posibles usos. Esto no significa que todas estén activas en el sitio web.',
    ],
  },
  {
    id: 'essential-cookies',
    title: 'Cookies esenciales',
    paragraphs: [
      'Las cookies esenciales permiten las funciones necesarias para ofrecer el sitio web o una función que hayas solicitado. Pueden utilizarse para fines de seguridad, gestión de la red, funcionamiento de formularios o para recordar tus elecciones sobre cookies.',
      'Cuando la legislación aplicable lo permita, estas cookies podrán utilizarse sin consentimiento. Si las bloqueas en tu navegador, es posible que algunas partes del sitio web no funcionen correctamente.',
    ],
  },
  {
    id: 'preference-cookies',
    title: 'Cookies de preferencias',
    paragraphs: [
      'Las cookies de preferencias pueden recordar elecciones como el idioma que has seleccionado. Así, no tienes que volver a elegirlo cada vez que visitas el sitio web.',
      'Si una cookie de preferencias concreta requiere consentimiento, solo se utilizará después de obtenerlo.',
    ],
  },
  {
    id: 'analytics-and-performance-cookies',
    title: 'Cookies de análisis y rendimiento',
    paragraphs: [
      'Si se implementan herramientas de análisis, sus cookies pueden mostrar qué páginas se visitan, cómo navegan los visitantes por el sitio, dónde se producen errores y cómo funciona el sitio web. Vinotoraup puede utilizar esa información para detectar problemas y mejorar el sitio.',
      'Cuando la legislación aplicable exija consentimiento, las cookies de análisis y rendimiento solo se activarán después de que lo hayas dado.',
    ],
  },
  {
    id: 'marketing-cookies',
    title: 'Cookies de marketing',
    paragraphs: [
      'Si Vinotoraup implementa herramientas de publicidad o medición de campañas, las cookies relacionadas pueden ayudar a medir las interacciones con las promociones o permitir funciones publicitarias. Algunas pueden proceder de terceros.',
      'Las cookies de marketing estarán sujetas a consentimiento cuando lo exija la legislación aplicable.',
    ],
  },
  {
    id: 'cookies-set-by-vinotoraup-and-third-parties',
    title: 'Cookies de Vinotoraup y de terceros',
    paragraphs: [
      'Las cookies propias son las instaladas por el sitio web de Vinotoraup o en su nombre. Las cookies de terceros pueden instalarse o utilizarse a través de servicios externos empleados en el sitio.',
      'Según las herramientas implementadas, los terceros pueden prestar servicios de alojamiento web, seguridad, análisis, comunicaciones u otras funciones del sitio web. Los proveedores y las cookies utilizadas pueden cambiar cuando cambien esas herramientas.',
    ],
  },
  {
    id: 'consent-and-cookie-choices',
    title: 'Consentimiento y elección de cookies',
    paragraphs: [
      'Cuando lo exija la legislación aplicable, Vinotoraup solicitará tu consentimiento antes de utilizar cookies no esenciales. Un aviso de cookies o un panel de preferencias puede permitirte aceptar, rechazar o gestionar las categorías correspondientes. El sitio web puede guardar tu elección para recordarla.',
      'Las cookies esenciales pueden permanecer activas cuando sean necesarias para el funcionamiento del sitio web y la ley permita utilizarlas sin consentimiento.',
    ],
  },
  {
    id: 'changing-your-preferences',
    title: 'Cómo cambiar tus preferencias',
    paragraphs: [
      'Si el sitio web dispone de controles de cookies, puedes utilizarlos para cambiar tus elecciones o retirar tu consentimiento para las cookies no esenciales. La retirada no afecta al uso que se haya realizado lícitamente antes del cambio.',
      'Las elecciones pueden guardarse por separado en cada navegador o dispositivo. Por eso, es posible que tengas que configurarlas de nuevo cuando utilices otro.',
    ],
  },
  {
    id: 'browser-controls',
    title: 'Configuración del navegador',
    paragraphs: [
      'La mayoría de los navegadores permiten consultar, eliminar, restringir o bloquear cookies desde sus ajustes. Los controles del navegador funcionan de forma independiente de las preferencias que pueda ofrecer el sitio web.',
      'Bloquear o eliminar cookies puede afectar a las funciones que dependen de ellas, incluido el formulario de contacto o la configuración guardada.',
    ],
  },
  {
    id: 'how-long-cookies-last',
    title: 'Duración de las cookies',
    paragraphs: [
      'La duración de una cookie depende de la tecnología utilizada y de su finalidad. Algunas caducan al terminar la sesión de navegación; otras permanecen durante un periodo definido o hasta que se eliminan.',
      'Los plazos pueden cambiar cuando se actualicen las herramientas o la configuración del sitio web. La información relacionada con las cookies se conserva únicamente durante el tiempo razonablemente necesario para la finalidad correspondiente, con sujeción a los requisitos aplicables.',
    ],
  },
  {
    id: 'personal-data-and-cookies',
    title: 'Datos personales y cookies',
    paragraphs: [
      'La información recopilada mediante cookies puede constituir datos personales. Según las herramientas utilizadas, puede incluir direcciones IP, datos del navegador y del dispositivo, identificadores, interacciones con las páginas y registros técnicos.',
      [
        'Cuando la información obtenida mediante cookies sea un dato personal, Vinotoraup la tratará conforme a los requisitos de privacidad aplicables y a su ',
        { href: '/privacy-notice', label: 'Aviso de privacidad' },
        '.',
      ],
    ],
  },
  {
    id: 'processing-in-other-countries',
    title: 'Tratamiento en otros países',
    paragraphs: [
      'Un proveedor de servicios del sitio web puede tratar información relacionada con cookies fuera del país desde el que lo visitas. Cuando esa información constituya datos personales y la legislación aplicable restrinja su transferencia, se utilizarán las garantías adecuadas o los mecanismos legales de transferencia que correspondan.',
    ],
  },
  {
    id: 'changes-to-this-notice',
    title: 'Cambios en este Aviso',
    paragraphs: [
      'Vinotoraup puede actualizar este Aviso cuando cambien las funciones del sitio web, los proveedores de servicios, las cookies o los requisitos aplicables. La versión revisada estará disponible en el sitio web.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacto',
    paragraphs: [
      [
        'Si tienes preguntas sobre las cookies del sitio web de Vinotoraup, utiliza el ',
        { href: contactFormHref, label: 'formulario de contacto' },
        ' de la página Contacto.',
      ],
    ],
  },
];


export function getCookiePolicy(locale: string): PolicySection[] {
  return locale === 'es' ? cookiePolicyEs : cookiePolicy;
}
