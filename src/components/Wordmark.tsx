export default function Wordmark({ tone = 'ink' }: { tone?: 'ink' | 'sand' }) {
  const color = tone === 'sand' ? 'text-sand-50' : 'text-ink-900';
  const sub = tone === 'sand' ? 'text-sand-200' : 'text-ink-500';
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className={[
          'grid h-8 w-8 place-items-center rounded-full',
          tone === 'sand'
            ? 'bg-sand-50 text-ink-900'
            : 'bg-ink-900 text-sand-50',
        ].join(' ')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1.5 12.5V3.5L7 1L12.5 3.5V12.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path d="M1.5 12.5H12.5" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M5.5 12.5V8.5H8.5V12.5"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={[
            'font-display text-[15px] font-medium tracking-tight',
            color,
          ].join(' ')}
        >
          Hotel Online Marketing
        </span>
        <span className={['text-[10.5px] tracking-wider uppercase', sub].join(' ')}>
          Direct bookings · U.S.
        </span>
      </span>
    </span>
  );
}
