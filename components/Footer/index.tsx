'use client';

import { animate, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { footerColumns } from '@/data/menu';
import { contactFormHref, contactFormId } from '@/data/contact';
import ArrowUp from '@/components/Icons/ArrowUp';
import Image from 'next/image';
import Wordmark from './Wordmark';

// Links: underline slides in from the left on hover, or tap on phones
// (200 ms).
const linkUnderline =
  'relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 group-hover/link:after:scale-x-100 group-active/link:after:scale-x-100 motion-reduce:after:transition-none';

export default function Footer() {
  const tMenu = useTranslations('Menu');
  const tFooter = useTranslations('Footer');
  const tLegal = useTranslations('Legal');
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  // Back to top: a smooth 800 ms scroll (instant for reduced motion).
  function scrollToTop() {
    if (reduceMotion) {
      window.scrollTo(0, 0);
      return;
    }

    animate(window.scrollY, 0, {
      duration: 0.8,
      ease: 'easeInOut',
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }

  return (
    // The wordmark letters slide up once 30% of the footer is in view.
    <m.footer
      className="pb-10 relative z-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <video
        className="absolute top-0 left-0 size-full object-cover -z-2"
        src="/video/footer-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="container pt-20 md:pt-24 lg:pt-30">
        {/* Desktop: logo · menus · back to top as an auto / 1fr / auto grid,
            40 px apart, top aligned.
            Tablet / phone: logo and back to top share the first row (pushed
            apart, centred), 56 / 48 px above the menus, which take the full
            second row. Bottom margin 80 / 56 / 48. */}
        <div className="mb-12 grid grid-cols-[1fr_auto] items-center gap-x-10 gap-y-12 md:mb-14 md:gap-y-14 lg:mb-20 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
          <Link
            href="/"
            aria-label={tMenu('home')}
            className="col-start-1 row-start-1 justify-self-start"
          >
            <Image src="/logo.svg" alt="Vintora" width={184} height={40} />
          </Link>

          {/* Four equal columns (two on phones), 32 / 24 / 16 px apart. */}
          <nav className="col-span-2 row-start-2 grid w-full grid-cols-2 items-start gap-4 md:grid-cols-4 md:gap-6 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:gap-8">
            {footerColumns.map((column) => (
              <div key={column.id} className="border-l border-prime/40 pl-4">
                {/* UI/Small heading, 12 px below it. */}
                <p className="mb-3 text-xs leading-4 font-medium text-secondary">
                  {tFooter(`columns.${column.id}`)}
                </p>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        // UI/Footer link: 20/110% desktop, 16/24 below.
                        className="group/link text-base leading-6 font-medium text-prime lg:text-xl lg:leading-[110%]"
                        onClick={() => {
                          // Already on the form's page: just scroll to it.
                          if (
                            link.href === contactFormHref &&
                            pathname === '/lets-talk'
                          ) {
                            document
                              .getElementById(contactFormId)
                              ?.scrollIntoView();
                          }
                        }}
                      >
                        <span className={linkUnderline}>
                          {column.id === 'legal'
                            ? tLegal(link.id)
                            : tFooter(`links.${link.id}`)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* 48 px circle, 1.5 px Prime border; the arrow nudges up 4 px on
              hover (tap on phones). */}
          <button
            type="button"
            aria-label={tFooter('scrollToTop')}
            className="group/top col-start-2 row-start-1 flex size-12 items-center justify-center justify-self-end rounded-3xl border-[1.5px] border-prime p-[13px] lg:col-start-3"
            onClick={scrollToTop}
          >
            <ArrowUp
              color="currentColor"
              className="text-prime transition-[translate] duration-200 motion-safe:group-hover/top:-translate-y-1 motion-safe:group-active/top:-translate-y-1"
            />
          </button>
        </div>

        <Link
          href="/"
          aria-label={tMenu('home')}
          className="mb-12 text-center md:mb-14 lg:mb-20"
        >
          <Wordmark className="h-[78px] w-full md:h-[153px] lg:h-auto" />
        </Link>

        {/* Copyright left, rights notice right (max 560 px, right-aligned),
            bottoms aligned; stacked and left-aligned on phones. 12 px gap.
            Both in UI/Small. */}
        <div className="grid gap-3 text-xs leading-4 font-medium text-prime md:grid-cols-[auto_minmax(0,560px)] md:items-end md:justify-between">
          <p>{tFooter('copyright', { year: new Date().getFullYear() })}</p>
          <p className="md:text-right">{tFooter('rights')}</p>
        </div>
      </div>
    </m.footer>
  );
}
