'use client';

import { useRef } from 'react';
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import * as m from 'motion/react-m';
import { useIsTabletUp } from '@/components/Motion';
import { HEXAGON_DARK, HEXAGON_LIGHT, HEXAGON_STROKE_WIDTH } from './paths';

const variants = { light: HEXAGON_LIGHT, dark: HEXAGON_DARK };

// Each ring draws over half of the scroll range; rings start a tenth
// apart, inner ring first.
const SPAN = 0.5;
const STEP = 0.1;

function Layer({
  d,
  stroke,
  order,
  progress,
  enabled,
}: {
  d: string;
  stroke: string;
  order: number;
  progress: MotionValue<number>;
  enabled: boolean;
}) {
  const start = order * STEP;
  const pathLength = useTransform(progress, [start, start + SPAN], [0, 1], {
    clamp: true,
  });

  return (
    <m.path
      d={d}
      stroke={stroke}
      strokeWidth={HEXAGON_STROKE_WIDTH}
      strokeMiterlimit={10}
      style={{ pathLength: enabled ? pathLength : 1 }}
    />
  );
}

/**
 * The hexagon illustration, its rings drawn with scroll (scrub): empty as
 * it enters at the bottom of the viewport, complete once it reaches the
 * middle; inner ring first. Phones and reduced-motion users get the
 * finished drawing (no scroll-linked motion there).
 */
export default function HexagonScrub({
  variant = 'light',
  className,
}: {
  /** light: Tertialy lines for dark panels; dark: Prime lines. */
  variant?: keyof typeof variants;
  className?: string;
}) {
  const { viewBox, stroke, layers } = variants[variant];
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const enabled = useIsTabletUp() && !reduceMotion;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  return (
    // useScroll tracks an HTML element, so the ref sits on a wrapper.
    <span ref={ref} className={className} aria-hidden>
      <svg viewBox={viewBox} fill="none" className="block size-full">
        {layers.map((d, index) => (
          <Layer
            key={index}
            d={d}
            stroke={stroke}
            // Layers are listed outermost first; the inner ring draws first.
            order={layers.length - 1 - index}
            progress={scrollYProgress}
            enabled={enabled}
          />
        ))}
      </svg>
    </span>
  );
}
