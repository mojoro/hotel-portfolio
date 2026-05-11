export default function Approach() {
  const points = [
    {
      title: 'A small team, on purpose.',
      body: 'No account managers translating between you and the people doing the work. You talk to the designer, operator, and engineer directly.',
    },
    {
      title: 'Hospitality first.',
      body: 'We write and design for hotels — not generic SaaS landing pages. Voice, room language, property details all feel specific to the hotel.',
    },
    {
      title: 'Honest about AI.',
      body: 'Guests increasingly ask ChatGPT, Gemini, and Perplexity for hotel recommendations. AI is becoming a real distribution channel. We treat it as plumbing, not magic.',
    },
    {
      title: 'Measured in direct revenue.',
      body: 'Every engagement reports against direct bookings, retained commission, and channel mix. No vanity dashboards.',
    },
  ];

  return (
    <section className="relative bg-sand-50 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
            How we think
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.5rem]">
            Built like a hotel team, not an agency.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-700">
            Quiet, opinionated, careful about the guest experience, relentless
            about the numbers underneath. Run like a good GM runs a property.
          </p>

          <figure className="mt-10 rounded-3xl bg-ink-900 p-7 text-sand-50 shadow-[var(--shadow-card-dark-hover)]">
            <svg
              aria-hidden
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              className="text-brass-500"
            >
              <path
                d="M3 11C3 6 6 3 10 3V6C8 6 7 7.5 7 9.5H10V18H3V11ZM14 11C14 6 17 3 21 3V6C19 6 18 7.5 18 9.5H21V18H14V11Z"
                fill="currentColor"
              />
            </svg>
            <p className="mt-5 font-display text-xl leading-snug">
              “If a guest never lands on the OTA, you never paid commission. The
              entire job is making sure the path to your front door is shorter
              than the path to Booking.com.”
            </p>
            <figcaption className="mt-5 flex items-center gap-3 text-sm text-sand-200">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sand-50/10 font-display text-sm">
                JM
              </span>
              <span>
                <span className="block font-medium text-sand-50">
                  Founder’s note
                </span>
                <span className="block text-xs text-sand-300">
                  Hotel Online Marketing
                </span>
              </span>
            </figcaption>
          </figure>
        </div>

        <ul className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-3xl bg-sand-50 p-7 shadow-card"
            >
              <h3 className="font-display text-xl font-medium text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
