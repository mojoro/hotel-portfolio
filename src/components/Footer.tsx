import Wordmark from './Wordmark';

const EMAIL = 'hello@hotel-online-marketing.com';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark tone="sand" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-sand-300">
              A boutique freelance team building direct-booking systems for
              independent U.S. hotels. Operating under{' '}
              <a
                href="https://hotel-online-marketing.com"
                className="text-sand-50 underline decoration-brass-500/60 decoration-2 underline-offset-4 hover:decoration-brass-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                hotel-online-marketing.com
              </a>{' '}
              and serving European hospitality clients since 2021.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/hotelonlinemarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 shadow-[var(--shadow-inset-line-dark)] text-xs text-sand-200 transition-colors hover:bg-sand-50/8"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect
                    x="1.5"
                    y="1.5"
                    width="9"
                    height="9"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
                  <circle cx="8.5" cy="3.5" r="0.5" fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 shadow-[var(--shadow-inset-line-dark)] text-xs text-sand-200 transition-colors hover:bg-sand-50/8"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <FooterCol
            title="Sections"
            links={[
              { href: '#services', label: 'Services' },
              { href: '#process', label: 'Process' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#faq', label: 'FAQ' },
              { href: '#audit', label: 'Free audit' },
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              { href: '#audit', label: 'Schedule a call' },
              { href: '#privacy', label: 'Privacy' },
              { href: '#legal', label: 'Legal' },
              {
                href: 'https://hotel-online-marketing.com',
                label: 'Parent site',
                external: true,
              },
            ]}
          />
        </div>

        <div className="mt-14 hairline h-px" />

        <LegalPanel />

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-sand-300 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Hotel Online Marketing. Built for U.S.
            independent hotels.
          </p>
          <p className="text-sand-400">
            Estimates on this page are illustrative and use industry-typical OTA
            commission ranges. No specific client results are implied.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-sand-300">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-sand-50/85 transition-colors hover:text-sand-50"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LegalPanel() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      <section
        id="privacy"
        aria-labelledby="privacy-heading"
        className="rounded-2xl bg-sand-50/[0.03] p-6 shadow-[var(--shadow-inset-line-dark)]"
      >
        <h2
          id="privacy-heading"
          className="font-display text-lg font-medium text-sand-50"
        >
          Privacy
        </h2>
        <dl className="mt-4 space-y-3 text-xs leading-relaxed text-sand-300">
          <Item label="What we collect">
            Only what you submit in the audit form (name, hotel, work email,
            room count, message) plus standard server access logs (IP, user
            agent, timestamp) handled by our hosting provider.
          </Item>
          <Item label="How we use it">
            To respond to your inquiry, prepare your free audit, and follow up
            about the engagement you asked about. We never sell or rent your
            details, and we do not run drip-marketing automations on inbound
            leads.
          </Item>
          <Item label="Retention">
            Lead messages are retained only as long as the conversation is
            active or while we are engaged. You can request deletion at any
            time by emailing{' '}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </Item>
          <Item label="Third-party caveat">
            When the form opens your email client, the message is delivered by
            your own provider. When a form endpoint is configured, the message
            is delivered through that endpoint and our email host. We do not
            embed third-party trackers, advertising pixels, or analytics
            cookies on this page.
          </Item>
        </dl>
      </section>

      <section
        id="legal"
        aria-labelledby="legal-heading"
        className="rounded-2xl bg-sand-50/[0.03] p-6 shadow-[var(--shadow-inset-line-dark)]"
      >
        <h2
          id="legal-heading"
          className="font-display text-lg font-medium text-sand-50"
        >
          Legal
        </h2>
        <dl className="mt-4 space-y-3 text-xs leading-relaxed text-sand-300">
          <Item label="No guarantee of outcomes">
            Numbers shown on this page (commission estimates, modeled recovery
            scenarios, timelines) are illustrative. We do not promise specific
            booking volumes, revenue, or commission savings. Engagements are
            governed by a separate written agreement.
          </Item>
          <Item label="Trademarks & references">
            Booking.com, Expedia, Mews, SiteMinder, Cloudbeds, ChatGPT, Gemini,
            Perplexity, and any other named platforms are trademarks of their
            respective owners. Mentions are descriptive and imply no
            affiliation or endorsement.
          </Item>
          <Item label="Portfolio">
            Linked European properties are public hotel websites operated by
            their owners. We do not publish guest names, booking volume, or
            internal revenue figures for any client.
          </Item>
          <Item label="Contact">
            Hotel Online Marketing ·{' '}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </Item>
        </dl>
      </section>
    </div>
  );
}

function Item({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-sand-200">
        {label}
      </dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}
