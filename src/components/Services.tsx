const services = [
  {
    title: 'AI-readable hotel websites',
    pitch:
      'Sites built for humans and AI alike. Schema-rich, fast, structured so ChatGPT, Gemini, and Perplexity understand your property when guests ask "best boutique hotel in…"',
    bullets: [
      'Conversion-tuned booking flow',
      'Property schema + structured content',
      'Built for U.S. accessibility & speed',
    ],
    icon: IconBrowser,
  },
  {
    title: 'AI search & local visibility',
    pitch:
      'We structure your hotel so AI platforms and search engines read it accurately. Then we layer in traditional local SEO and Google Business Profile work.',
    bullets: [
      'Structured for AI assistants to read accurately',
      'Local pack & map presence',
      'Reputation surface management',
    ],
    icon: IconSearch,
  },
  {
    title: 'Direct-booking website flow',
    pitch:
      'A clean path from discovery to confirmed direct stay. Clear room pages, stronger direct-booking prompts, tracking, and booking-engine handoff that works.',
    bullets: [
      'Direct-booking CTAs and offer structure',
      'Booking-engine handoff review',
      'Analytics for direct-booking actions',
    ],
    icon: IconFunnel,
  },
  {
    title: 'AI reception',
    pitch:
      '24/7 website chat for guest questions, multilingual FAQ answering, human handoff when the answer shouldn\'t be automated. Same practical offer we run on the existing site.',
    bullets: [
      'Website chat support',
      'Multilingual FAQ answers',
      'Human escalation by design',
    ],
    icon: IconConcierge,
  },
  {
    title: 'Free hotel audit',
    pitch:
      'A 30-minute audit that maps your direct-booking gap: site experience, AI visibility, booking engine friction, OTA dependency. You keep the deck.',
    bullets: [
      'Live site & booking flow review',
      'AI visibility scan',
      'Commission-recovery model',
    ],
    icon: IconClipboard,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
              What we do
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
              A direct-booking system, not a marketing menu.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-ink-700">
            The offer that already converts hotel clients: AI-optimized
            websites, AI reception, and a practical visibility audit — packaged
            for U.S. independents.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl bg-sand-50 p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 text-sand-50">
                  <s.icon />
                </span>
                <h3 className="font-display text-xl font-medium leading-tight text-ink-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
                {s.pitch}
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <span className="mt-1.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-brass-500/15 text-brass-700">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4L3 5.5L6.5 2"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconBrowser() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="2.5"
        y="3.5"
        width="15"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M2.5 7H17.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="5.25" r="0.6" fill="currentColor" />
      <circle cx="7" cy="5.25" r="0.6" fill="currentColor" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M13 13L16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconFunnel() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 4H17L12 10.5V16L8 14V10.5L3 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconConcierge() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 16C4 12 6.5 9.5 10 9.5C13.5 9.5 16 12 16 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function IconClipboard() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="5"
        y="4"
        width="10"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 3.5H12V5.5H8V3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.5H12.5 M7.5 12H11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

