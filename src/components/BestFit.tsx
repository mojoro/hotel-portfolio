const fit = [
  'Independent U.S. hotels and boutique groups (roughly 15–250 keys)',
  'Properties where 30%+ of bookings currently route through OTAs',
  'Owners or GMs ready to invest in the direct channel for 12 months',
  'Hotels on Mews, SiteMinder, Cloudbeds, Apaleo, or similar modern PMS',
  'Teams comfortable being shown the numbers behind every decision',
];

const notFit = [
  'Big-box branded chains with corporate-mandated marketing stacks',
  'Properties looking for a one-off site refresh with no operating cadence',
  'Hotels expecting guaranteed bookings or a fixed ROAS contract',
  'Pure-OTA inventory operators with no interest in a brand or CRM',
  'Last-minute rescue projects with a deadline shorter than two weeks',
];

export default function BestFit() {
  return (
    <section className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
            Honest qualification
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
            Who this is — and isn’t — built for.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-700">
            We take on a handful of U.S. hotels each quarter. Telling you up
            front whether we're a fit saves us both a call.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Column
            tone="yes"
            title="A good fit if…"
            items={fit}
          />
          <Column
            tone="no"
            title="Probably not a fit if…"
            items={notFit}
          />
        </div>
      </div>
    </section>
  );
}

function Column({
  tone,
  title,
  items,
}: {
  tone: 'yes' | 'no';
  title: string;
  items: string[];
}) {
  const isYes = tone === 'yes';
  return (
    <div
      className={[
        'rounded-3xl p-7 sm:p-9',
        isYes
          ? 'bg-sand-50 shadow-card'
          : 'bg-sand-100/70 shadow-[var(--shadow-hairline-soft)]',
      ].join(' ')}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={[
            'grid h-9 w-9 place-items-center rounded-full text-sand-50',
            isYes ? 'bg-leaf-600' : 'bg-ink-700',
          ].join(' ')}
        >
          {isYes ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7L6 10L11 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M4 4L10 10 M10 4L4 10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        <h3 className="font-display text-2xl font-medium text-ink-900">
          {title}
        </h3>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-800"
          >
            <span
              aria-hidden
              className={[
                'mt-2 h-1.5 w-1.5 shrink-0 rounded-full',
                isYes ? 'bg-leaf-600' : 'bg-ink-400',
              ].join(' ')}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
