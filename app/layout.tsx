import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPageMetadata } from '@/i18n/metadata';

const abcArealSuperFamily = localFont({
  src: [
    {
      path: '../public/fonts/ABCAreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCAreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCAreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCAreal-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-abc-areal-super-family',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageMetadata('home');

  return {
    metadataBase: new URL('https://cinpc.com'),
    title: page.title,
    description: page.description,
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      images: ['/meta.png'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/meta.png'],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${abcArealSuperFamily.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="rounded-[0_0_20px_20px]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
