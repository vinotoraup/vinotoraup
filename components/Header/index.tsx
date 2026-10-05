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
import { contactFormHref, contactFormId, contact } from '@/data/contact';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Header() {
  const pathname = usePathname();
  const tMenu = useTranslations('Menu');
  const tHeader = useTranslations('Header');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const isHome = pathname === '/';

  return (
    <header
      className={cn(
        'pt-6 pb-2 transition-colors',
        isHome && 'fixed inset-x-0 top-0 z-50',
        scrolled && 'bg-light-gray/80'
      )}
    >
      <div className="container">
        <div className="lg:mb-1 lg:flex lg:items-center lg:gap-4 lg:justify-end max-lg:hidden">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1 text-xs leading-none tracking-[-1px] bg-light-gray rounded-lg p-2"
          >
            <span>✉️</span>
            {contact.email}
          </a>

          <div className="max-lg:hidden">
            <LocaleSwitcher />
          </div>
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <Link href="/" aria-label={tMenu('home')}>
            <Image src="/logo.svg" alt="Vinotoraup" width={202} height={32} />
          </Link>

          <div
            ref={menuRef}
            id="header-menu"
            className={cn(
              'lg:max-xl:order-3 lg:max-xl:mx-auto max-lg:fixed max-lg:inset-x-0 max-lg:top-21 max-lg:bottom-0 max-lg:z-2 max-lg:bg-light-gray max-lg:w-55 flex gap-10 lg:gap-11.25 bg-light-gray/80 lg:rounded-2xl lg:py-2 lg:pl-4 lg:pr-2 max-lg:flex-col max-lg:w-full max-lg:px-3.25 max-lg:pt-8',
              !open && 'max-lg:hidden'
            )}
          >
            <NavigationMenu className="flex-none">
              <NavigationMenuList className="gap-x-11.25 gap-y-10 lg:gap-y-4 max-lg:flex-col max-lg:items-start">
                {menu.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      className=""
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
              className="h-11.5 px-6 text-base md:min-w-0 max-md:w-auto"
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
              {tHeader('quote')}
            </Button>

            <div className="lg:hidden px-2 py-1.25">
              <LocaleSwitcher />
            </div>
          </div>

          <div className="lg:hidden">
            <button
              ref={buttonRef}
              type="button"
              className="w-12.5 h-14.5 rounded-2xl flex items-center justify-center bg-blue"
              aria-label={open ? 'Close' : 'Menu'}
              aria-expanded={open}
              aria-controls="header-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <Image
                src={open ? '/icons/close.svg' : '/icons/list.svg'}
                alt=""
                width={open ? 24 : 18}
                height={open ? 24 : 14}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
