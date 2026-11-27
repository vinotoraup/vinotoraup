'use client';

import { useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import {
  HEXAGON_LAYERS as layers,
  HEXAGON_STROKE,
  HEXAGON_STROKE_WIDTH,
} from '@/components/Hexagon/paths';

const STAGGER = 0.08;
const DURATION = 0.5;

type HexagonProps = {
  /** Start delay, in ms. */
  delay?: number;
  className?: string;
};

/**
 * The hexagon illustration, drawn layer by layer (stroke-dashoffset via
 * Motion's pathLength), inner ring first, outer ring last, 80 ms apart.
 * Plays with the surrounding <Reveal>. pathLength isn't a transform, so
 * reduced-motion users get a plain fade instead of the drawing.
 */
export default function Hexagon({ delay = 0, className }: HexagonProps) {
  const reduceMotion = useReducedMotion();
  const start = delay / 1000;

  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden
      className={className}
    >
      {layers.map((d, index) => {
        // Inner ring goes first.
        const order = layers.length - 1 - index;
        const transition = {
          duration: DURATION,
          ease: 'easeOut' as const,
          delay: start + order * STAGGER,
        };

        return (
          <m.path
            key={index}
            d={d}
            stroke={HEXAGON_STROKE}
            strokeWidth={HEXAGON_STROKE_WIDTH}
            strokeMiterlimit={10}
            variants={
              reduceMotion
                ? {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition },
                  }
                : {
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: {
                        ...transition,
                        opacity: { duration: 0.01, delay: transition.delay },
                      },
                    },
                  }
            }
          />
        );
      })}
    </svg>
  );
}
