import { contactFormHref } from '@/data/contact';

export type MenuItem = {
  id: string;
  href: string;
  label: string;
};

export const menu: MenuItem[] = [
  { id: 'coverage', href: '/coverage', label: 'Coverage' },
  { id: 'use-cases', href: '/use-cases', label: 'Use Cases' },
  { id: 'handoff', href: '/handoff', label: 'Handoff' },
  { id: 'people', href: '/people', label: 'People' },
];

export const legalMenu: MenuItem[] = [
  {
    id: 'terms-conditions',
    href: '/terms-of-service',
    label: 'Terms of Service',
  },
  { id: 'privacy-policy', href: '/privacy-notice', label: 'Privacy Notice' },
  { id: 'refund-policy', href: '/refund-policy', label: 'Refund Policy' },
  { id: 'cookie-policy', href: '/cookie-notice', label: 'Cookie Notice' },
];

export type FooterLink = { id: string; href: string };

export type FooterColumn = {
  id: 'explore' | 'careers' | 'business' | 'legal';
  links: FooterLink[];
};

// Footer menu, four columns. Labels: Footer.columns.<id> for the headings,
// Footer.links.<id> for the links (Legal.<id> for the legal column).
export const footerColumns: FooterColumn[] = [
  {
    id: 'explore',
    links: [
      { id: 'home', href: '/' },
      { id: 'ourMission', href: '/our-mission' },
      { id: 'services', href: '/services' },
      { id: 'testimonials', href: '/testimonials' },
    ],
  },
  {
    id: 'careers',
    links: [
      { id: 'jobOpportunities', href: '/opportunities' },
      { id: 'faq', href: '/faq' },
      { id: 'workWithUs', href: '/work-with-us' },
    ],
  },
  {
    id: 'business',
    links: [{ id: 'requestQuote', href: contactFormHref }],
  },
  {
    id: 'legal',
    links: legalMenu.map(({ id, href }) => ({ id, href })),
  },
];
