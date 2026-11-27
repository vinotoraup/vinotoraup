'use client';

import * as m from 'motion/react-m';
import type { Variants } from 'motion/react';
import { useIsTabletUp } from '@/components/Motion';

/*
 * The large VINTORA wordmark from /logo.svg, split into one group per
 * letter so the letters can slide up one after another (60 ms apart).
 * Plays with the footer's own in-view trigger; reduced-motion users get a
 * plain fade (MotionConfig drops the movement).
 */

const STAGGER = 0.06;

// Rise in SVG units (viewBox is 1268 wide). Tablet / desktop: 80. Phones
// want ~16 px on screen; at a typical ~350 px wordmark that is ~58 units.
const RISE = { mobile: 58, tabletUp: 80 };

type LetterOptions = { index: number; rise: number };

const letter: Variants = {
  hidden: ({ rise }: LetterOptions) => ({ opacity: 0, y: rise }),
  visible: ({ index }: LetterOptions) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: index * STAGGER },
  }),
};

const ink = '#141C33';

export default function Wordmark({ className }: { className?: string }) {
  const isTabletUp = useIsTabletUp();
  const rise = isTabletUp ? RISE.tabletUp : RISE.mobile;

  return (
    <svg
      // The first render can't know the breakpoint, so the letters remount
      // once it does, to start from the right offset.
      key={String(isTabletUp)}
      viewBox="0 0 1268 277"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient
          id="footer-wordmark-v"
          x1="155.766"
          y1="170.073"
          x2="258.075"
          y2="93.5563"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D5BD6" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        {/* The letters' box (the original mask): cuts the R's leg at the
            baseline, and the letters slide up from under it. */}
        <clipPath id="footer-wordmark-clip">
          <rect x="61.3218" y="61.3722" width="1206.44" height="153.302" />
        </clipPath>
      </defs>

      <g clipPath="url(#footer-wordmark-clip)">
        {/* V */}
        <m.g variants={letter} custom={{ index: 0, rise }}>
          <path
            d="M63.3652 63.4159H112.146L149.449 135.151L173.844 182.214L158.054 212.629H140.844L63.3652 63.4159Z"
            fill={ink}
            stroke={ink}
            strokeWidth={4.08804}
            strokeLinejoin="round"
          />
          <path
            d="M186.753 63.4159H235.533L180.151 170.073L155.766 123.101L186.753 63.4159Z"
            fill="url(#footer-wordmark-v)"
            stroke="url(#footer-wordmark-v)"
            strokeWidth={4.08804}
            strokeLinejoin="round"
          />
        </m.g>

        {/* I */}
        <m.g variants={letter} custom={{ index: 1, rise }}>
          <path
            d="M294.811 61.3722H270.283V214.674H294.811V61.3722Z"
            fill={ink}
          />
        </m.g>

        {/* N */}
        <m.g variants={letter} custom={{ index: 2, rise }}>
          <path
            d="M362.264 61.3722H337.735V214.674H362.264V61.3722Z"
            fill={ink}
          />
          <path
            d="M470.598 61.3722H446.069V214.674H470.598V61.3722Z"
            fill={ink}
          />
          <path
            d="M337.734 61.3722H368.394L470.595 214.674H439.935L337.734 61.3722Z"
            fill={ink}
          />
        </m.g>

        {/* T */}
        <m.g variants={letter} custom={{ index: 3, rise }}>
          <path
            d="M646.382 61.3722H513.521V85.9004H646.382V61.3722Z"
            fill={ink}
          />
          <path
            d="M592.216 61.3722H567.688V214.674H592.216V61.3722Z"
            fill={ink}
          />
        </m.g>

        {/* O */}
        <m.g variants={letter} custom={{ index: 4, rise }}>
          <path
            d="M830.346 138.023C830.346 173.582 801.519 202.409 765.959 202.409C730.4 202.409 701.573 173.582 701.573 138.023C701.573 102.463 730.4 73.6361 765.959 73.6361C801.519 73.6361 830.346 102.463 830.346 138.023Z"
            stroke={ink}
            strokeWidth={24.5282}
          />
        </m.g>

        {/* R */}
        <m.g variants={letter} custom={{ index: 5, rise }}>
          <path
            d="M910.062 61.3722H885.534V214.674H910.062V61.3722Z"
            fill={ink}
          />
          <path
            d="M897.796 73.6361H959.117C969.146 73.6361 978.764 77.6201 985.856 84.7117C992.947 91.8032 996.931 101.421 996.931 111.45C996.931 121.479 992.947 131.098 985.856 138.189C978.764 145.281 969.146 149.265 959.117 149.265H897.796"
            stroke={ink}
            strokeWidth={24.5282}
          />
          <path
            d="M950.943 149.265L1016.35 235.113"
            stroke={ink}
            strokeWidth={27.5943}
          />
        </m.g>

        {/* A */}
        <m.g variants={letter} custom={{ index: 6, rise }}>
          <path
            d="M1117.53 61.3722H1142.06L1206.44 214.674H1177.83L1129.79 99.1865L1081.76 214.674H1053.14L1117.53 61.3722Z"
            fill={ink}
          />
        </m.g>
      </g>
    </svg>
  );
}
