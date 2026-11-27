'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from 'cn';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { menu } from '@/data/menu';
import { contactFormHref, contactFormId } from '@/data/contact';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import ArrowRight16 from '@/components/Icons/ArrowRight16';

// Mobile panel items fade in one after another each time the menu opens.
function stagger(index: number) {
  return {
    className:
      'max-lg:animate-in max-lg:fade-in max-lg:slide-in-from-top-2 max-lg:duration-250 max-lg:fill-mode-both',
    style: { animationDelay: `${index * 40}ms` },
  };
}

export default function Header() {
  const pathname = usePathname();
  const tMenu = useTranslations('Menu');
  const tHeader = useTranslations('Header');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // The header is fixed and its height changes with the breakpoint (the
  // menu even wraps between 1024 and 1279 px), so it publishes where it
  // ends as --header-offset. Pages without the full-screen PageHero use it
  // to keep their top clear of the header.
  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const root = document.documentElement;
    const update = () =>
      root.style.setProperty(
        '--header-offset',
        `${header.getBoundingClientRect().bottom}px`
      );
    const observer = new ResizeObserver(update);

    update();
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        // Fixed on every page; PageHero is laid out for it.
        'fixed inset-x-0 top-6 z-50 py-2 transition-colors duration-150',
        scrolled && 'bg-background/80'
      )}
    >
      <div className="container md:max-lg:px-6.25">
        <div className="relative flex items-center justify-between gap-3 lg:flex-wrap lg:gap-6 max-lg:h-16.5 max-lg:rounded-2xl max-lg:bg-background/80 max-lg:p-2 max-lg:pl-4">
          {/* On narrow phones the logo gives way so the bar never wraps. */}
          <Link href="/" aria-label={tMenu('home')} className="min-w-0 shrink">
            <Image
              src="/logo.svg"
              alt="Vinotoraup"
              width={184}
              height={40}
              className="h-auto w-46 max-w-full"
            />
          </Link>

          <div className="lg:max-xl:order-3 flex items-center gap-3">
            <div
              ref={menuRef}
              id="header-menu"
              className={cn(
                'max-lg:fixed max-lg:inset-x-0 max-lg:top-24.5 max-lg:bottom-0 max-lg:z-2 max-lg:bg-background max-lg:w-55 flex gap-10 lg:items-center lg:gap-6 bg-background/80 lg:rounded-2xl lg:p-2 lg:pl-5 max-lg:flex-col max-lg:w-full max-lg:px-3.25 max-lg:pt-8',
                !open && 'max-lg:hidden'
              )}
            >
              <NavigationMenu className="flex-none">
                <NavigationMenuList className="gap-x-6 gap-y-10 lg:gap-y-4 max-lg:flex-col max-lg:items-start">
                  {menu.map((item, index) => (
                    <NavigationMenuItem key={item.id} {...stagger(index)}>
                      <NavigationMenuLink
                        active={pathname === item.href}
                        className="py-2 text-base leading-4 font-normal tracking-[-0.3px] text-prime transition-all duration-150 hover:text-secondary"
                        render={<Link href={item.href} />}
                      >
                        {tMenu(item.id)}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                nativeButton={false}
                style={stagger(menu.length).style}
                className={cn(
                  'h-10.5 px-4 text-base leading-4 font-medium text-prime md:min-w-0 max-md:w-auto',
                  stagger(menu.length).className
                )}
                variant="secondary"
                render={
                  <Link
                    href={contactFormHref}
                    onClick={() => {
                      if (pathname === '/lets-talk') {
                        document
                          .getElementById(contactFormId)
                          ?.scrollIntoView();
                      }
                    }}
                  />
                }
              >
                {tHeader('quote')}
                <ArrowRight16 color="currentColor" />
              </Button>
            </div>

            <LocaleSwitcher className="max-lg:hidden" />
          </div>

          <div className="lg:hidden flex shrink-0 items-center gap-3">
            <LocaleSwitcher variant="compact" />

            <button
              ref={buttonRef}
              type="button"
              className="size-12.5 p-3.25 rounded-xl flex items-center justify-center bg-white"
              aria-label={open ? 'Close' : 'Menu'}
              aria-expanded={open}
              aria-controls="header-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {/* Burger → close morph: outer bars meet in the middle and
                  rotate into an X while the middle bar fades out. */}
              <span aria-hidden className="relative block size-6">
                <span
                  className={cn(
                    'absolute left-0.75 top-[5.25px] h-[1.5px] w-4.5 rounded-full bg-prime transition-transform duration-250 ease-in-out',
                    open && 'translate-y-1.5 rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0.75 top-[11.25px] h-[1.5px] w-4.5 rounded-full bg-prime transition-opacity duration-250 ease-in-out',
                    open && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0.75 top-[17.25px] h-[1.5px] w-4.5 rounded-full bg-prime transition-transform duration-250 ease-in-out',
                    open && '-translate-y-1.5 -rotate-45'
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
