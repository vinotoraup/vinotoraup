// Plain helpers for motion timing. Kept out of the 'use client' module so
// server components can call them.

export type RevealWordsPart = { text: string; className?: string };

export const WORD_STAGGER = 40;

export function splitWords(parts: RevealWordsPart[]) {
  return parts.flatMap(({ text, className }) =>
    text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className }))
  );
}

/** Time for a RevealWords run to start its last word, in ms. */
export function wordsDuration(parts: RevealWordsPart[], gap = WORD_STAGGER) {
  return Math.max(0, splitWords(parts).length - 1) * gap;
}
