'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from 'cn';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import Description from '@/components/Description';
import Title from '@/components/Title';
import SectionTop from '@/components/SectionTop';
import { contactFormHref } from '@/data/contact';
import ArrowRight from '@/components/Icons/ArrowRight';

type HomeHeroItem = {
  key: string;
  title: string;
  description: string;
};

type HomeHeroContentProps = {
  title: string;
  titleHighlight: string;
  descriptionOne: string;
  descriptionTwo: string;
  button: string;
  servicesButton: string;
  sectionTop: string;
  items: HomeHeroItem[];
};

export default function HomeHeroContent({
  title,
  titleHighlight,
  descriptionOne,
  descriptionTwo,
  button,
  servicesButton,
  sectionTop,
  items,
}: HomeHeroContentProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [atPageTop, setAtPageTop] = useState(true);
  const visibleCountRef = useRef(0);
  const atPageTopRef = useRef(true);
  const stepLockRef = useRef(false);
  const total = items.length;
  const showCards = visibleCount > 0;
  const allVisible = visibleCount >= total;
  const shouldLockScroll = atPageTop && !allVisible;

  useEffect(() => {
    visibleCountRef.current = visibleCount;
  }, [visibleCount]);

  useEffect(() => {
    atPageTopRef.current = atPageTop;
  }, [atPageTop]);

  useEffect(() => {
    function onScroll() {
      setAtPageTop(window.scrollY <= 0);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;

    html.style.overflow = shouldLockScroll ? 'hidden' : '';
    body.style.overflow = shouldLockScroll ? 'hidden' : '';

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [shouldLockScroll]);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.closest('section') ?? root;

    if (!section) {
      return;
    }

    function step(delta: 1 | -1) {
      if (stepLockRef.current) {
        return;
      }

      const next = Math.min(
        total,
        Math.max(0, visibleCountRef.current + delta)
      );

      if (next === visibleCountRef.current) {
        return;
      }

      stepLockRef.current = true;
      setVisibleCount(next);

      window.setTimeout(() => {
        stepLockRef.current = false;
      }, 450);
    }

    function onWheel(event: WheelEvent) {
      if (!atPageTopRef.current) {
        return;
      }

      const count = visibleCountRef.current;

      if (event.deltaY > 0) {
        if (count < total) {
          event.preventDefault();
          step(1);
        }

        return;
      }

      if (event.deltaY < 0 && count > 0) {
        event.preventDefault();
        step(-1);
      }
    }

    section.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', onWheel);
    };
  }, [total]);

  return (
    <div
      ref={rootRef}
      className="p-16 max-lg:px-4 flex flex-col justify-between h-full"
    >
      <div className="relative min-h-0 flex-1">
        <Title
          as="h1"
          className={cn(
            'max-w-201 transition-all duration-500',
            showCards
              ? 'pointer-events-none absolute opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          )}
        >
          {title} <span className="italic inline-block">{titleHighlight}</span>
        </Title>

        <div
          className={cn(
            'ml-auto transition-all duration-500',
            showCards
              ? 'opacity-100 translate-y-0'
              : 'pointer-events-none absolute inset-x-0 top-0 opacity-0 -translate-y-2'
          )}
        >
          <SectionTop
            text={sectionTop}
            hasSeparator={false}
            className="mb-4.25"
            badgeClassName="bg-white/25 backdrop-blur-[2px]"
          />

          <div className="mb-4 h-px w-full bg-beige">
            <div
              className="h-px bg-blue transition-[width] duration-500 ease-out"
              style={{ width: `${(visibleCount / total) * 100}%` }}
            />
          </div>

          <div className="grid h-70 grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-6 gap-y-4 overflow-y-auto">
            {items.slice(0, visibleCount).map((item) => (
              <div
                key={item.key}
                className="animate-in fade-in slide-in-from-bottom-2 p-6 bg-white/20 rounded-2xl duration-500"
              >
                <Description
                  size="46"
                  className="font-medium tracking-[-1px] mb-5"
                >
                  {item.title}
                </Description>
                <div>
                  <Description className="leading-[110%]">
                    {item.description}
                  </Description>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap justify-between gap-8">
        <div
          className={cn(
            'transition-all duration-500',
            showCards
              ? 'pointer-events-none absolute opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          )}
        >
          <Description size="2xl" className="max-w-154 max-md:tracking-[-1px]">
            {descriptionOne}
          </Description>
          <Description size="2xl" className="max-w-154 max-md:tracking-[-1px]">
            {descriptionTwo}
          </Description>
        </div>

        <Button
          className={cn('max-md:w-full', showCards && 'ml-auto')}
          size="48"
          render={
            <Link href={showCards ? '/coverage' : contactFormHref} />
          }
        >
          {showCards ? servicesButton : button}
          <ArrowRight color="currentColor" />
        </Button>
      </div>
    </div>
  );
}
