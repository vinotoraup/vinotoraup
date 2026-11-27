import type { Metadata } from 'next';
import { Geist, Roboto_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/Motion/MotionProvider';
import { getPageMetadata } from '@/i18n/metadata';

// Geist is a variable font: every weight comes from a single file.
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

// Only used for small numerals (UI/Number).
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageMetadata('home');

  return {
    metadataBase: new URL('https://vinotoraup.com'),
    title: page.title,
    description: page.description,
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      images: ['/meta.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/meta.jpg'],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <MotionProvider>
            <Header />
            <main className="rounded-[0_0_20px_20px]">{children}</main>
            {/* Rounded end of the page content, right above the footer. */}
            <span
              aria-hidden
              className="h-26 md:h-30 lg:h-36 w-full bg-background rounded-b-3xl"
            />
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
