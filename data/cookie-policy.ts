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

export const cookiePolicyEs: PolicySection[] = cookiePolicy;

export function getCookiePolicy(locale: string): PolicySection[] {
  return locale === 'es' ? cookiePolicyEs : cookiePolicy;
}
