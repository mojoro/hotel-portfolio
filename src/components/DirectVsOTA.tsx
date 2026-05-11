export default function DirectVsOTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-sand-50 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(60% 80% at 80% 0%, rgba(200,155,90,0.18), transparent), radial-gradient(80% 80% at 10% 100%, rgba(46,107,79,0.14), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-500">
            The difference is structural
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] sm:text-[2.6rem]">
            Two channels. Two completely different businesses.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-sand-200 sm:text-lg">
            OTAs are useful billboards. They are not your sales team. Every
            booking that lands on your site changes who owns the guest — and
            where the margin lives.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Column
            tone="muted"
            badge="OTA channel"
            title="You rent your guests."
            rows={[
              ['Commission per stay', '15–25%'],
              ['Guest data', 'Owned by the OTA'],
              ['Direct relationship', 'Limited or blocked'],
              ['Rate parity pressure', 'Constant'],
              ['Upsell opportunity', 'Largely lost'],
              ['Brand experience', 'OTA-shaped'],
            ]}
          />
          <Column
            tone="bright"
            badge="Direct channel"
            title="You own the relationship."
            rows={[
              ['Commission per stay', '0%'],
              ['Guest data', 'Owned by the hotel'],
              ['Direct relationship', 'CRM, email, loyalty'],
              ['Rate parity pressure', 'Packages, perks, first-party offers'],
              ['Upsell opportunity', 'F&B, spa, packages'],
              ['Brand experience', 'Your hotel, not a marketplace'],
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Column({
  tone,
  badge,
  title,
  rows,
}: {
  tone: 'muted' | 'bright';
  badge: string;
  title: string;
  rows: Array<[string, string]>;
}) {
  const isBright = tone === 'bright';
  return (
    <div
      className={[
        'relative overflow-hidden rounded-3xl p-7 sm:p-9',
        isBright
          ? 'bg-sand-50 text-ink-900 shadow-card-hover'
          : 'bg-brass-700/35 text-sand-200 shadow-card-dark',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span
          className={[
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider',
            isBright
              ? 'bg-ink-900 text-sand-50'
              : 'bg-brass-500/16 text-sand-50',
          ].join(' ')}
        >
          <span
            className={[
              'h-1.5 w-1.5 rounded-full',
              isBright ? 'bg-brass-500' : 'bg-brass-500',
            ].join(' ')}
          />
          {badge}
        </span>
        {isBright && (
          <span className="rounded-full bg-leaf-600/10 px-3 py-1 text-[11px] font-medium text-leaf-600">
            Our focus
          </span>
        )}
      </div>

      <h3
        className={[
          'mt-6 font-display text-2xl font-medium leading-tight sm:text-3xl',
          isBright ? 'text-ink-900' : 'text-sand-50',
        ].join(' ')}
      >
        {title}
      </h3>

      <dl className="mt-7 grid gap-3">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className={[
              'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl px-4 py-3',
              isBright ? 'bg-sand-100' : 'bg-brass-500/15',
            ].join(' ')}
          >
            <dt
              className={[
                'text-[13px]',
                isBright ? 'text-ink-700' : 'text-sand-100',
              ].join(' ')}
            >
              {k}
            </dt>
            <dd
              className={[
                'font-display text-[15px] font-medium',
                isBright ? 'text-ink-900' : 'text-sand-50',
              ].join(' ')}
            >
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
