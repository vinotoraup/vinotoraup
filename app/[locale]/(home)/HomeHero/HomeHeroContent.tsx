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
  const [visibleCount, setVisibleCount] = useState(0);
  const visibleCountRef = useRef(0);
  const stepLockRef = useRef(false);
  const total = items.length;
  const showCards = visibleCount > 0;

  useEffect(() => {
    visibleCountRef.current = visibleCount;
  }, [visibleCount]);

  // The page itself is never locked (no `overflow: hidden`): we only intercept
  // the inputs we can turn into a step. Anything we don't recognise scrolls
  // the page natively, so nobody can get stuck on the hero.
  useEffect(() => {
    const swipeThreshold = 30;
    let touchY: number | null = null;

    function isActive() {
      // Skip while something else owns the page (preloader, mobile menu).
      return window.scrollY <= 0 && document.body.style.overflow !== 'hidden';
    }

    function canStep(delta: 1 | -1) {
      const count = visibleCountRef.current;

      return delta > 0 ? count < total : count > 0;
    }

    function step(delta: 1 | -1) {
      if (stepLockRef.current) {
        return;
      }

      stepLockRef.current = true;
      setVisibleCount((count) => Math.min(total, Math.max(0, count + delta)));

      window.setTimeout(() => {
        stepLockRef.current = false;
      }, 450);
    }

    function onWheel(event: WheelEvent) {
      if (event.ctrlKey || !isActive()) {
        return;
      }

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const delta = event.deltaY > 0 ? 1 : -1;

      if (canStep(delta)) {
        event.preventDefault();
        step(delta);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        !isActive()
      ) {
        return;
      }

      const target = event.target instanceof HTMLElement ? event.target : null;

      if (
        target?.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        return;
      }

      let delta: 1 | -1;

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        delta = 1;
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        delta = -1;
      } else if (event.key === ' ' && !target?.closest('a, button')) {
        delta = event.shiftKey ? -1 : 1;
      } else {
        return;
      }

      if (canStep(delta)) {
        event.preventDefault();
        step(delta);
      }
    }

    function onTouchStart(event: TouchEvent) {
      touchY = event.touches.length === 1 ? event.touches[0].clientY : null;
    }

    function onTouchMove(event: TouchEvent) {
      if (touchY === null || event.touches.length !== 1 || !isActive()) {
        return;
      }

      const distance = touchY - event.touches[0].clientY;

      if (distance === 0) {
        return;
      }

      const delta = distance > 0 ? 1 : -1;

      if (!canStep(delta)) {
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }

      if (Math.abs(distance) >= swipeThreshold) {
        touchY = event.touches[0].clientY;
        step(delta);
      }
    }

    function onTouchEnd() {
      touchY = null;
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [total]);

  return (
    <div className="p-16 max-lg:px-4 flex flex-col justify-between h-full">
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
          render={<Link href={showCards ? '/coverage' : contactFormHref} />}
        >
          {showCards ? servicesButton : button}
          <ArrowRight color="currentColor" />
        </Button>
      </div>
    </div>
  );
}
