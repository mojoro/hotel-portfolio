type Property = {
  name: string;
  blurb: string;
  url: string;
  location: string;
  screenshot: string;
};

const properties: Property[] = [
  {
    name: 'Michel Hotels',
    blurb: 'Group umbrella site for a multi-property hotel collection.',
    url: 'https://michel-hotels.de',
    location: 'Germany · Group',
    screenshot: '/portfolio/michel-hotels.webp',
  },
  {
    name: 'Michel Hotel Hodenhagen',
    blurb: 'Family stays near the Heide-Park region.',
    url: 'https://michelhotelhodenhagen.com',
    location: 'Hodenhagen, DE',
    screenshot: '/portfolio/michel-hotel-hodenhagen.webp',
  },
  {
    name: 'Michel Hotel Wetzlar',
    blurb: 'City hotel for business and weekend travel.',
    url: 'https://michelhotelwetzlar.com',
    location: 'Wetzlar, DE',
    screenshot: '/portfolio/michel-hotel-wetzlar.webp',
  },
  {
    name: 'Michel Hotel Landshut',
    blurb: 'Historic Bavarian setting with conference capacity.',
    url: 'https://michelhotellandshut.com',
    location: 'Landshut, DE',
    screenshot: '/portfolio/michel-hotel-landshut.webp',
  },
  {
    name: 'Michel Hotel Lohr',
    blurb: 'Mainfranken hotel for leisure and meetings.',
    url: 'https://michelhotellohr.com',
    location: 'Lohr am Main, DE',
    screenshot: '/portfolio/michel-hotel-lohr.webp',
  },
  {
    name: 'Hotel am Bad Park',
    blurb: 'Wellness-led stay in the Bavarian Forest.',
    url: 'https://hotelambadeparkwaldkirchen.com',
    location: 'Waldkirchen, DE',
    screenshot: '/portfolio/hotel-am-bad-park.webp',
  },
  {
    name: 'Franziskushöhe',
    blurb: 'Retreat hotel and seminar house above the Main valley.',
    url: 'https://franziskushoehe.com',
    location: 'Lohr, DE',
    screenshot: '/portfolio/franziskushoehe.webp',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
              Selected work
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
              A live European hotel portfolio behind every recommendation.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-ink-700">
            Public hotel sites we run in production today. Open the booking flow
            and judge them as a guest.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-sand-50 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-sand-100 shadow-[var(--shadow-bottom-line)]">
                <img
                  src={p.screenshot}
                  alt={`${p.name} website homepage screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/10 via-transparent to-white/10" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium leading-tight text-ink-900">
                    {p.name}
                  </h3>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand-50 shadow-[var(--shadow-inset-line)] text-ink-800 transition-transform group-hover:rotate-[-45deg]"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 9L9 3 M5 3H9V7"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {p.blurb}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-9 shadow-[var(--shadow-top-line)] text-xs text-ink-500">
                  <span className="font-medium uppercase tracking-wider">
                    {p.location}
                  </span>
                  <span className="text-right font-mono text-[11px]">
                    {p.url.replace(/^https?:\/\//, '')}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 max-w-3xl rounded-3xl bg-sand-100/70 p-7 text-sm leading-relaxed text-ink-700 shadow-[var(--shadow-hairline-soft)]">
          We don't publish guest names, revenue figures, or property-specific
          results. These hotels trust us with their direct channel. We extend
          the same discretion to every U.S. client.
        </div>
      </div>
    </section>
  );
}

