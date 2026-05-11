import { useState } from 'react';

const faqs = [
  {
    q: 'Do we have to leave Booking.com or Expedia?',
    a: 'No. OTAs are useful discovery surfaces. Our work shortens the path from "I saw your hotel" to "I booked direct," so OTAs shift from sales channel to billboard.',
  },
  {
    q: 'What about Mews, Cloudbeds, SiteMinder, or our existing PMS?',
    a: 'We integrate with the booking engine you already use. Our European portfolio runs on Mews. We\'re comfortable with SiteMinder, Cloudbeds, RoomRaccoon, Apaleo, and most modern systems. No PMS migration needed.',
  },
  {
    q: 'You’re based in Europe — can you really serve U.S. hotels?',
    a: 'Yes. The work is the same: design a property that looks like itself, ship a conversion-tuned booking flow, run search behind it. We work U.S. hours, write in U.S. English, and bring local paid-search and AI-visibility expertise.',
  },
  {
    q: 'How is this different from a “hotel marketing agency”?',
    a: 'We don\'t bill retainers for slide decks. Every engagement ships a redesigned site, a measurable funnel, and an operating cadence. You always know what we\'re doing and against which direct-revenue number.',
  },
  {
    q: 'What does it cost?',
    a: 'A typical engagement is a fixed-fee build (site + funnel + integration) with an optional monthly retainer. We model recoverable commission against fee before you sign anything — the free audit ends with a written proposal.',
  },
  {
    q: 'What is “AI visibility” really doing?',
    a: 'AI platforms like ChatGPT, Gemini, and Perplexity increasingly answer "best boutique hotel in…" questions directly. We structure your site, content, and reviews so those models read your property accurately — alongside traditional SEO and Google Business Profile work.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand-100/60 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
            Common questions
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
            Honest answers, before the call.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-sand-50 shadow-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const buttonId = `faq-button-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div
                key={f.q}
                className={[
                  'shadow-[var(--shadow-bottom-line)] last:shadow-none',
                  isOpen ? 'bg-sand-50' : '',
                ].join(' ')}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-lg font-medium text-ink-900 sm:text-xl">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className={[
                      'mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full shadow-[var(--shadow-inset-line)] transition-transform',
                      isOpen ? 'rotate-45 bg-ink-900 text-sand-50' : 'text-ink-800',
                    ].join(' ')}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1.5V10.5 M1.5 6H10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={[
                    'grid overflow-hidden px-6 transition-[grid-template-rows,opacity,padding-bottom] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-8',
                    isOpen
                      ? 'grid-rows-[1fr] pb-6 opacity-100 sm:pb-7'
                      : 'grid-rows-[0fr] pb-0 opacity-0',
                  ].join(' ')}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={[
                        'text-[15px] leading-relaxed text-ink-700 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                        isOpen ? 'translate-y-0' : '-translate-y-1.5',
                      ].join(' ')}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
