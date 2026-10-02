'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from 'cn';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function RevealOnScroll({
  children,
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
