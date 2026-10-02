'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { footerMenu, legalMenu } from '@/data/menu';
import Description from '@/components/Description';
import { contactFormHref, contactFormId } from '@/data/contact';
import { Button } from '@/components/ui/button';
import ArrowRightSmall from '@/components/Icons/ArrowRightSmall';
import Image from 'next/image';

export default function Footer() {
  const tMenu = useTranslations('Menu');
  const tFooter = useTranslations('Footer');
  const tLegal = useTranslations('Legal');
  const pathname = usePathname();

  return (
    <footer className="pt-18.5 lg:pt-33.75 pb-6 relative z-1">
      <span className="h-12.5 absolute top-0 left-0 w-full -z-1 bg-light-gray rounded-[0_0_40px_40px] md:rounded-[0_0_500px_500px]"></span>
      <video
        className="absolute top-0 left-0 size-full object-cover -z-2"
        src="/video/footer-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[328px_397px_auto] justify-between mb-6 lg:mb-15 gap-6">
          <div>
            <Link
              href="/"
              aria-label={tMenu('home')}
              className="text-blue text-2xl leading-none font-bold tracking-[-1px] mb-5"
            >
              Vinotoraup
            </Link>

            <Description size="2xl" className="tracking-[-1px]">
              {tFooter('description')}
            </Description>
          </div>

          <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-21.25">
            {footerMenu.map((item) => (
              <div key={item.id} className="p-4 border-l border-blue">
                <Link
                  href={item.href}
                  className="text-xl/[110%] font-bold tracking-[-1px] mb-1"
                >
                  {tMenu(item.id)}
                </Link>
                <Description className="tracking-[-1px] leading-[110%]">
                  {tMenu(`descriptions.${item.id}`)}
                </Description>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between items-end gap-10">
            <Button
              nativeButton={false}
              className="tracking-[-1px] h-11.25 gap-1 max-md:w-full"
              variant="secondary"
              render={
                <Link
                  href={contactFormHref}
                  onClick={() => {
                    if (pathname === '/lets-talk') {
                      document.getElementById(contactFormId)?.scrollIntoView();
                    }
                  }}
                />
              }
            >
              {tFooter('contact')}
              <ArrowRightSmall />
            </Button>

            <button
              type="button"
              aria-label="Scroll to top"
              className="px-2.5 py-2 border border-blue rounded-2xl"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image src="/icons/arrow-up.svg" width={32} height={38} alt="" />
            </button>
          </div>
        </div>

        <Link
          href="/"
          aria-label={tMenu('home')}
          className="text-blue text-[70px] lg:text-[200px] xl:text-[255px] leading-none tracking-[0.5px] mb-3.5 text-center"
        >
          Vinotoraup
        </Link>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-y-10 gap-x-4 max-md:justify-center max-lg:flex-col">
          <Description
            className="lg:max-w-31.5 tracking-[-1px] max-lg:order-2"
            variant="blue-gray-dark"
          >
            {tFooter('copyright', { year: new Date().getFullYear() })}
          </Description>
          <ul className="grid gap-x-10 lg:gap-x-29.5 grid-cols-2 md:grid-cols-4 gap-y-10 max-lg:order-1 justify-center">
            {legalMenu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-base leading-none text-blue-gray-dark tracking-[-1px]"
                >
                  {tLegal(item.id)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
