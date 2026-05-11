const steps = [
  {
    day: 'Day 1–2',
    title: 'Audit & alignment',
    body: 'A 30-minute call, then we go deep on your site, booking engine, OTA mix, and AI visibility. You get a written audit with a commission-recovery model.',
  },
  {
    day: 'Day 3–5',
    title: 'Strategy & content map',
    body: 'We agree on rooms, packages, and property facts that carry direct revenue. Plus a writing direction in your hotel\'s voice and the structured data AI needs.',
  },
  {
    day: 'Day 6–10',
    title: 'Build & integrate',
    body: 'A conversion-tuned site built around your booking engine. No rate parity issues, no channel disruption.',
  },
  {
    day: 'Day 11–13',
    title: 'Launch & funnel switch-on',
    body: 'We migrate, set up tracking, connect the booking handoff, and switch on AI reception if in scope. Your direct-booking path runs with measurable events from day one.',
  },
  {
    day: 'Day 14+',
    title: 'Operate & compound',
    body: 'Monthly cadence: site improvements, AI visibility, AI reception tuning, reporting against direct-booking actions and recovered commission.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-sand-100/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
              How we work
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
              From kickoff to a scoped direct-booking sprint in two weeks.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-700">
              Short, accountable cycles. Independent hotels get a senior team
              without agency overhead.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-sand-50 px-4 py-2.5 text-sm text-ink-800 shadow-[var(--shadow-inset-line)]">
              <span className="h-2 w-2 rounded-full bg-leaf-600" />
              We take on a small number of hotels per quarter
            </div>
          </div>

          <ol className="relative lg:col-span-8">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`relative grid grid-cols-[44px_1fr] gap-5 ${i < steps.length - 1 ? 'pb-8' : ''} sm:grid-cols-[52px_1fr] sm:gap-6`}
              >
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-[19px] top-10 bottom-0 w-px bg-ink-900/10 sm:left-[23px] sm:top-12"
                  />
                )}
                <div className="flex justify-center">
                  <span className="z-10 grid h-10 w-10 place-items-center rounded-full bg-sand-50 font-display text-sm text-ink-900 shadow-[var(--shadow-inset-line)] sm:h-12 sm:w-12 sm:text-base">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brass-700">
                    {s.day}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-medium text-ink-900 sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-700">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
