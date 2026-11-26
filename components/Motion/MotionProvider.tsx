'use client';

import type { ReactNode } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';

/**
 * Site-wide Motion setup.
 * - LazyMotion + `m` components keep the initial bundle small; `strict`
 *   throws if a full `motion` component slips in and undoes that.
 * - reducedMotion="user": for people who ask for less motion, transforms
 *   are skipped and only fades remain.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
