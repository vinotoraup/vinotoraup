'use client';

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from 'react';
import { cn } from 'cn';

type AccordionContextValue = {
  openId: string | null;
  toggle: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type AccordionItemProps = {
  question: ReactNode;
  answer: ReactNode;
};

/**
 * One FAQ row. Closed: Background fill, plus icon on a white tile.
 * Open: White fill, minus icon on a Prime tile, answer 16 px below the
 * question.
 *
 * Motion: height grows over 350 ms ease-in-out (grid-template-rows
 * 0fr → 1fr, so no measuring), the answer fades in over 200 ms after a
 * 100 ms delay, and the icon turns 180° as the plus folds into a minus.
 * Reduced motion keeps only the fades.
 */
export function AccordionItem({ question, answer }: AccordionItemProps) {
  const context = useContext(AccordionContext);
  const id = useId();
  const [ownOpen, setOwnOpen] = useState(false);

  // Inside <Accordion> only one item is open at a time; on its own an
  // item keeps its own state.
  const open = context ? context.openId === id : ownOpen;
  const toggle = () =>
    context ? context.toggle(id) : setOwnOpen((value) => !value);

  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={cn(
        'rounded-2xl border border-prime/15 p-5 md:px-8 md:py-7 transition-colors duration-350 ease-in-out',
        open ? 'bg-white' : 'bg-background'
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
        >
          {/* Body L: 18/120% on phones, 24/110% from tablet up. */}
          <span className="text-lg leading-[120%] tracking-[-0.2px] text-prime md:text-2xl md:leading-[110%] md:tracking-[-0.5px]">
            {question}
          </span>

          <span
            aria-hidden
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-xl p-2 transition-colors duration-350 ease-in-out',
              open ? 'bg-prime' : 'bg-white'
            )}
          >
            {/* Plus → minus: the icon turns 180° while the vertical bar
                folds away. */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={cn(
                'transition-[rotate] duration-350 ease-in-out motion-reduce:transition-none',
                open ? 'rotate-180' : 'rotate-0'
              )}
            >
              <rect
                x="4"
                y="11.2"
                width="16"
                height="1.6"
                className={cn(
                  'transition-colors duration-350',
                  open ? 'fill-background' : 'fill-prime'
                )}
              />
              <rect
                x="11.2"
                y="4"
                width="1.6"
                height="16"
                className={cn(
                  'origin-center fill-prime transition-transform duration-350 ease-in-out [transform-box:fill-box] motion-reduce:transition-none',
                  open ? 'scale-y-0' : 'scale-y-100'
                )}
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-[grid-template-rows] duration-350 ease-in-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        {/* `inert` keeps links in a closed answer out of the tab order. */}
        <div className="overflow-hidden" inert={!open}>
          <div
            className={cn(
              'pt-4 text-base leading-6 text-neutral transition-opacity duration-200',
              open ? 'opacity-100 delay-100' : 'opacity-0'
            )}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

/** Stack of AccordionItems; opening one closes the others. */
export default function Accordion({ children, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{
        openId,
        toggle: (id) => setOpenId((current) => (current === id ? null : id)),
      }}
    >
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}
