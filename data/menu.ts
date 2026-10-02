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

export function getMenuItems(ids: string[]) {
  return ids.flatMap((id) => menu.filter((item) => item.id === id));
}

export const footerMenu = getMenuItems([
  'coverage',
  'handoff',
  'use-cases',
  'people',
]);

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
