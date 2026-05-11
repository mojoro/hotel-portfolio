export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sand-50">
      <BackgroundDecor />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-sand-50/60 px-3 py-1.5 text-xs font-medium tracking-wide text-ink-700 shadow-[var(--shadow-hairline-soft)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              7-hotel European portfolio · Now serving U.S. independents
            </div>

            <h1 className="mt-6 text-pretty font-display text-[2.5rem] font-medium leading-[1.04] text-ink-900 sm:text-[3.25rem] lg:text-[4rem]">
              Stop renting your{' '}
              <span className="relative inline-block">
                guests
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-brass-500/40 -z-0" />
              </span>{' '}
              from Booking.com.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-700 sm:text-xl">
              We build direct-booking websites for independent U.S. hotels.
              AI-optimized, conversion-tuned, backed by a team running a
              7-property European portfolio.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#audit"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-medium text-sand-50 shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-[var(--shadow-cta-hover)]"
              >
                Get my free hotel audit
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-6 py-3.5 shadow-[var(--shadow-button-light)] text-[15px] font-medium text-ink-900 transition-colors hover:bg-sand-100"
              >
                See how we work
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 pt-6 shadow-[var(--shadow-top-line)]">
              <Stat
                value="7"
                label="Properties in our European portfolio"
              />
              <Stat value="14 days" label="Typical direct-booking sprint" />
              <Stat value="0%" label="Commission on every direct booking" />
            </dl>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-medium text-ink-900">
        {value}
      </dt>
      <dd className="mt-1 text-xs leading-snug text-ink-600">{label}</dd>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,theme(colors.brass-500/0.18),transparent)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,theme(colors.ink-700/0.12),transparent)] blur-2xl"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0H0V56"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-ink-900"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Browser-style card showing a hotel direct booking confirmation */}
      <div className="relative rounded-3xl bg-ink-900 p-2 shadow-[var(--shadow-card-dark-hover)]">
        <div className="overflow-hidden rounded-[20px] bg-sand-50">
          <div className="flex items-center gap-2 bg-sand-100 shadow-[var(--shadow-bottom-line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
            <div className="ml-3 flex items-center gap-1.5 rounded-md bg-sand-50 px-2.5 py-1 text-[11px] text-ink-600">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2.5 4.5V3.5C2.5 2.4 3.4 1.5 5 1.5C6.6 1.5 7.5 2.4 7.5 3.5V4.5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect
                  x="1.75"
                  y="4.5"
                  width="6.5"
                  height="4"
                  rx="0.75"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              your-hotel.com
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-ink-500">
                  Reservation confirmed
                </p>
                <p className="mt-1 font-display text-lg font-medium text-ink-900">
                  Suite Carmel · Ocean view
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-600/10 px-2.5 py-1 text-[11px] font-medium text-leaf-600">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-600" />
                Direct
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Row label="Check-in" value="Fri, Jul 18" />
              <Row label="Check-out" value="Mon, Jul 21" />
              <Row label="Guests" value="2 adults" />
              <Row label="Nightly rate" value="$ 412" />
            </div>

            <div className="mt-5 rounded-xl bg-sand-100 p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-ink-600">OTA channel cost</span>
                <span className="text-xs text-ink-400 line-through">
                  $ 197.76
                </span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-sm font-medium text-ink-900">
                  Kept by the hotel
                </span>
                <span className="font-display text-xl font-medium text-ink-900">
                  $ 1,236.00
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
                <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-brass-600 to-brass-500" />
              </div>
              <p className="mt-2 text-[11px] text-ink-600">
                84% retained vs. a typical OTA booking at this rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <div className="animate-float-slow absolute -left-4 -bottom-6 hidden rounded-2xl bg-sand-50 p-3 shadow-card-hover sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-sand-50">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7L5.5 10.5L12 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="pr-1.5">
            <p className="text-[11px] uppercase tracking-wider text-ink-500">
              Structured for
            </p>
            <p className="text-sm font-medium text-ink-900">
              ChatGPT · Perplexity · Gemini
            </p>
          </div>
        </div>
      </div>

      {/* Floating mews-style chip */}
      <div className="absolute -top-4 right-1 hidden rounded-2xl bg-ink-900 px-3.5 py-2.5 text-sand-50 shadow-[var(--shadow-card-dark-hover)] sm:block lg:-right-2">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sand-50/10 text-brass-500">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1.5V10.5 M1.5 6H10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <p className="text-[10.5px] uppercase tracking-wider text-sand-200">
              Booking engine
            </p>
            <p className="text-xs font-medium">Mews · SiteMinder · Cloudbeds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-sand-100/60 px-3 py-2">
      <p className="text-[11px] uppercase tracking-wider text-ink-500">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium text-ink-900">{value}</p>
    </div>
  );
}
