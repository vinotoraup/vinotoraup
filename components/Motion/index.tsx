'use client';

import {
  Fragment,
  useRef,
  useSyncExternalStore,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import {
  stagger,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'motion/react';
import * as m from 'motion/react-m';
import { WORD_STAGGER, splitWords, type RevealWordsPart } from './timing';

/*
 * Shared motion primitives. Timings follow the motion spec:
 * 500 ms ease-out, 16 px travel.
 *
 * Scroll reveals work through variants: <Reveal> switches from "hidden" to
 * "visible" once when 20% of it is in view, and every Reveal* child inside
 * picks that up automatically. Each child takes a `delay` in ms.
 */

const DURATION = 0.5;
const DISTANCE = 16;

const ms = (value: number) => value / 1000;

type RevealProps = ComponentPropsWithoutRef<typeof m.section> & {
  /** Share of the element that must be visible to trigger, 0–1. */
  amount?: number;
};

/** Section that plays its children's reveal once it scrolls into view. */
export function Reveal({ amount = 0.2, ...props }: RevealProps) {
  return (
    <m.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...props}
    />
  );
}

type FadeOptions = {
  delay: number;
  distance: number;
  duration: number;
  from: 'below' | 'left';
  pulse?: boolean;
};

const PULSE_DURATION = 0.6;

// Fades in while moving `distance` px into place, rising from below or
// sliding in from the left. `distance` 0 gives a plain fade.
const fadeUp: Variants = {
  hidden: ({ distance, from }: FadeOptions) =>
    from === 'left'
      ? { opacity: 0, x: -distance }
      : { opacity: 0, y: distance },
  visible: ({ delay, duration, pulse }: FadeOptions) => ({
    opacity: 1,
    x: 0,
    y: 0,
    // Optional one-off soft pulse (1 → 1.02 → 1) right after it lands.
    ...(pulse ? { scale: [1, 1.02, 1] } : {}),
    transition: {
      duration: ms(duration),
      ease: 'easeOut',
      delay: ms(delay),
      ...(pulse
        ? {
            scale: {
              duration: PULSE_DURATION,
              ease: 'easeInOut',
              delay: ms(delay + duration),
            },
          }
        : {}),
    },
  }),
};

/** Rise in px: one value, or a separate one for phones and tablet-up. */
type Distance = number | { mobile: number; tabletUp: number };

type FadeProps = ComponentPropsWithoutRef<typeof m.div> & {
  /** Start delay, in ms. */
  delay?: number;
  /** Duration, in ms. */
  duration?: number;
  /** How far it moves, in px; 0 only fades. */
  distance?: Distance;
  /** Rise from below (default) or slide in from the left. */
  from?: FadeOptions['from'];
  /** Pulse once (1 → 1.02 → 1) after landing, to draw the eye. */
  pulse?: boolean;
};

/** Child of <Reveal> that fades and rises into place. */
export function RevealItem({
  delay = 0,
  duration = DURATION * 1000,
  distance = DISTANCE,
  from = 'below',
  pulse = false,
  ...props
}: FadeProps) {
  const isTabletUp = useIsTabletUp();
  const rise =
    typeof distance === 'number'
      ? distance
      : isTabletUp
        ? distance.tabletUp
        : distance.mobile;

  return (
    <m.div
      // The first render can't know the breakpoint (it matches the server),
      // so a responsive rise remounts once it does, to start from the
      // right offset.
      key={typeof distance === 'number' ? undefined : String(isTabletUp)}
      variants={fadeUp}
      custom={{ delay, distance: rise, duration, from, pulse }}
      {...props}
    />
  );
}

type RevealLineProps = ComponentPropsWithoutRef<typeof m.div> & {
  delay?: number;
};

type RevealBarProps = ComponentPropsWithoutRef<typeof m.span> & {
  /** Start delay, in ms. */
  delay?: number;
  /** Duration, in ms. */
  duration?: number;
  /** Grow left → right (default) or top → bottom. */
  direction?: 'horizontal' | 'vertical';
};

/**
 * Child of <Reveal>: a bar that grows from zero to full length, from the
 * left (or the top). Uses scale, so reduced-motion users just see the
 * full bar.
 */
export function RevealBar({
  delay = 0,
  duration = DURATION * 1000,
  direction = 'horizontal',
  style,
  ...props
}: RevealBarProps) {
  const vertical = direction === 'vertical';

  return (
    <m.span
      style={vertical ? { originY: 0, ...style } : { originX: 0, ...style }}
      variants={{
        hidden: vertical ? { scaleY: 0 } : { scaleX: 0 },
        visible: {
          ...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
          transition: {
            duration: ms(duration),
            ease: 'easeOut',
            delay: ms(delay),
          },
        },
      }}
      {...props}
    />
  );
}

type RevealClipProps = ComponentPropsWithoutRef<typeof m.div> & {
  /** Start delay, in ms. */
  delay?: number;
  /** Duration, in ms. */
  duration?: number;
  /** Wipe from the bottom up (default) or from the left. */
  from?: 'bottom' | 'left';
};

/**
 * Child of <Reveal> uncovered with a clip-path wipe, from the bottom up or
 * from the left.
 * Clip-path isn't a transform, so MotionConfig's reduced-motion setting
 * doesn't cover it; reduced-motion users get a plain fade instead.
 */
export function RevealClip({
  delay = 0,
  duration = 600,
  from = 'bottom',
  ...props
}: RevealClipProps) {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: ms(duration),
    ease: 'easeOut' as const,
    delay: ms(delay),
  };

  return (
    <m.div
      variants={
        reduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition },
            }
          : {
              hidden: {
                clipPath:
                  from === 'left'
                    ? 'inset(0% 100% 0% 0%)'
                    : 'inset(100% 0% 0% 0%)',
              },
              visible: { clipPath: 'inset(0% 0% 0% 0%)', transition },
            }
      }
      {...props}
    />
  );
}

type RevealScaleProps = ComponentPropsWithoutRef<typeof m.div> & {
  /** Start delay, in ms. */
  delay?: number;
  /** Duration, in ms. */
  duration?: number;
};

/**
 * Child of <Reveal> that fades in while growing from 96% to full size.
 * Reduced-motion users get the fade only (MotionConfig skips the scale).
 */
export function RevealScale({
  delay = 0,
  duration = 700,
  ...props
}: RevealScaleProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: ms(duration),
            ease: 'easeOut',
            delay: ms(delay),
          },
        },
      }}
      {...props}
    />
  );
}

/** Divider that draws from left to right. */
export function RevealLine({
  delay = 0,
  className,
  ...props
}: RevealLineProps) {
  return (
    <m.div
      aria-hidden
      className={className}
      style={{ originX: 0 }}
      variants={{
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: { duration: 0.8, ease: 'easeOut', delay: ms(delay) },
        },
      }}
      {...props}
    />
  );
}

type RevealWordsProps = {
  parts: RevealWordsPart[];
  delay?: number;
  /** Gap between consecutive words, in ms. */
  stagger?: number;
};

/**
 * Splits text into words that rise one after another. Use inside a heading;
 * each part can carry its own class (e.g. a highlight colour).
 */
export function RevealWords({
  parts,
  delay = 0,
  stagger: gap = WORD_STAGGER,
}: RevealWordsProps) {
  const words = splitWords(parts);

  return (
    <m.span
      data-word=""
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: stagger(ms(gap), { startDelay: ms(delay) }),
          },
        },
      }}
    >
      {words.map(({ word, className }, index) => (
        // Plain spaces between the inline-block words keep normal wrapping.
        <Fragment key={index}>
          <m.span
            data-word=""
            className={className}
            variants={{
              hidden: { opacity: 0, y: DISTANCE },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: DURATION, ease: 'easeOut' },
              },
            }}
          >
            {word}
          </m.span>{' '}
        </Fragment>
      ))}
    </m.span>
  );
}

/** Plays a fade-up as soon as it mounts (used for above-the-fold content). */
export function FadeUp({
  delay = 0,
  duration = DURATION * 1000,
  distance = DISTANCE,
  from = 'below',
  ...props
}: FadeProps & { distance?: number }) {
  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={{ delay, distance, duration, from }}
      {...props}
    />
  );
}

const tabletUp = '(min-width: 768px)';

function subscribe(onChange: () => void) {
  const media = window.matchMedia(tabletUp);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

/** True from 768 px up. Always false on the server and first render. */
export function useIsTabletUp() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(tabletUp).matches,
    () => false
  );
}

type ScrollRotateProps = {
  children: ReactNode;
  /** Rotation reached once the element has scrolled all the way through. */
  degrees?: number;
  className?: string;
};

/**
 * Rotates its children with scroll, from 0 as the element enters at the
 * bottom of the viewport to `degrees` as it leaves at the top.
 * Off on phones and for reduced-motion users.
 */
export function ScrollRotate({
  children,
  degrees = 45,
  className,
}: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const enabled = useIsTabletUp() && !reduceMotion;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees]);

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ rotate: enabled ? rotate : 0 }}
    >
      {children}
    </m.div>
  );
}

const finePointer = '(hover: hover) and (pointer: fine)';

function subscribePointer(onChange: () => void) {
  const media = window.matchMedia(finePointer);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

/** True on devices with a mouse-like pointer. False on the server. */
function useFinePointer() {
  return useSyncExternalStore(
    subscribePointer,
    () => window.matchMedia(finePointer).matches,
    () => false
  );
}

type MagneticProps = {
  children: ReactNode;
  /** Furthest the content may follow the pointer, in px. */
  max?: number;
  className?: string;
};

/**
 * Magnetic hover: while the pointer is over it, the content leans towards
 * the pointer (at most `max` px) and springs back when it leaves.
 * Mouse-like pointers only, and off for reduced-motion users.
 */
export function Magnetic({ children, max = 6, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const enabled = useFinePointer() && !reduceMotion;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 20, mass: 0.5 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = ref.current;

    if (!enabled || !element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    // -1 … 1 from the centre to each edge.
    const dx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    x.set(Math.max(-1, Math.min(1, dx)) * max);
    y.set(Math.max(-1, Math.min(1, dy)) * max);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={enabled ? { x: springX, y: springY } : undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </m.div>
  );
}
