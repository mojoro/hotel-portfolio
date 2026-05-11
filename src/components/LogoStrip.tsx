export default function LogoStrip() {
  const properties = [
    'Michel Hotels',
    'Hodenhagen',
    'Wetzlar',
    'Landshut',
    'Lohr',
    'Bad Park · Waldkirchen',
    'Franziskushöhe',
  ];

  return (
    <section className="bg-sand-100/60 shadow-[var(--shadow-y-line)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
          Built for a live European hotel portfolio
        </p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {properties.map((p) => (
            <span
              key={p}
              className="font-display text-base text-ink-700 opacity-80 transition-opacity hover:opacity-100"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
