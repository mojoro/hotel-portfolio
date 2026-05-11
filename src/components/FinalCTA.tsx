import { useState, type FormEvent } from 'react';

const EMAIL = 'hello@hotel-online-marketing.com';

/**
 * Optional form endpoint. When set at build time (e.g. via
 *   VITE_FORM_ENDPOINT=https://your-endpoint
 * the form will POST to it as JSON. When unset (the default for static
 * hosting), the form falls back to opening the user's email client with a
 * pre-populated message. No secrets are required for the mailto fallback.
 */
const FORM_ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '';

type CopyState = 'idle' | 'copied' | 'error';
type MailState = 'idle' | 'opened';
type PostState = 'idle' | 'submitting' | 'sent' | 'error';

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [hotel, setHotel] = useState('');
  const [email, setEmail] = useState('');
  const [rooms, setRooms] = useState('');
  const [message, setMessage] = useState('');

  const [copyState, setCopyState] = useState<CopyState>('idle');
  const [mailState, setMailState] = useState<MailState>('idle');
  const [postState, setPostState] = useState<PostState>('idle');

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Free hotel audit — ${hotel || name || 'New inquiry'}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Hotel: ${hotel}`,
        `Email: ${email}`,
        `Rooms: ${rooms}`,
        '',
        message,
      ].join('\n'),
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('error');
      setTimeout(() => setCopyState('idle'), 2500);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (FORM_ENDPOINT) {
      setPostState('submitting');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, hotel, email, rooms, message }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setPostState('sent');
      } catch {
        setPostState('error');
      }
      return;
    }

    // Static-hosting fallback: open the user's email client.
    // We can only confirm that the link was triggered, not that the
    // message was sent.
    setMailState('opened');
    window.location.href = buildMailto();
  };

  const usingEndpoint = Boolean(FORM_ENDPOINT);

  return (
    <section id="audit" className="relative overflow-hidden bg-sand-50 py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M48 0H0V48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-ink-900"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-700">
              Free hotel audit
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] text-ink-900 sm:text-[2.6rem]">
              Find out what your hotel actually pays in commission this year.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-700">
              ~30 minutes on the phone, a few hours on your property. You walk
              away with a written audit, an AI-visibility scan, and a
              commission-recovery model — yours to keep.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Senior, in-house team — no junior account handoff',
                'Sign nothing on the call. The audit comes with a proposal.',
                'Discreet about your numbers and your portfolio',
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[15px] text-ink-800"
                >
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink-900 text-sand-50">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-sand-50 p-5 shadow-[var(--shadow-inset-line)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                Prefer email?
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent('Free hotel audit')}`}
                  className="font-display text-lg text-ink-900 underline decoration-brass-500/60 decoration-2 underline-offset-4 hover:decoration-brass-500"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-3 py-1.5 shadow-[var(--shadow-inset-line)] text-xs font-medium text-ink-800 transition-colors hover:bg-sand-100"
                >
                  {copyState === 'copied'
                    ? 'Email copied'
                    : copyState === 'error'
                      ? 'Copy failed — select and copy manually'
                      : 'Copy email address'}
                </button>
              </div>
              <p
                role="status"
                aria-live="polite"
                className="sr-only"
              >
                {copyState === 'copied'
                  ? 'Email address copied to clipboard.'
                  : copyState === 'error'
                    ? 'Could not copy automatically. Please select and copy the address manually.'
                    : ''}
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-sand-50 p-7 shadow-card lg:col-span-7 sm:p-9"
            aria-labelledby="audit-heading"
            aria-describedby="audit-help"
          >
            <h3
              id="audit-heading"
              className="font-display text-2xl font-medium text-ink-900"
            >
              Schedule a call.
            </h3>
            <p id="audit-help" className="mt-1.5 text-sm text-ink-600">
              {usingEndpoint
                ? 'Submit the form and we will respond within one business day. No drip campaigns.'
                : 'Submitting opens your email client with a pre-filled message — review it and hit send.'}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                value={name}
                onChange={setName}
                placeholder="Maria Alvarez"
                autoComplete="name"
                required
              />
              <Field
                label="Hotel"
                value={hotel}
                onChange={setHotel}
                placeholder="Hotel Carmel"
                autoComplete="organization"
                required
              />
              <Field
                label="Work email"
                value={email}
                onChange={setEmail}
                placeholder="maria@hotelcarmel.com"
                type="email"
                autoComplete="email"
                required
              />
              <Field
                label="Rooms"
                value={rooms}
                onChange={setRooms}
                placeholder="48"
                type="number"
                inputMode="numeric"
              />
            </div>

            <Field
              label="What would you like to fix first?"
              value={message}
              onChange={setMessage}
              placeholder="OTA share is climbing, direct site converts poorly, etc."
              textarea
            />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-md text-[11px] leading-relaxed text-ink-500">
                <span className="text-brass-700" aria-hidden>
                  *
                </span>{' '}
                Required.{' '}
                {usingEndpoint
                  ? 'Your details are sent to our intake endpoint and reviewed by the team — never added to any list.'
                  : 'Submitting opens your email client; your details only leave your device when you send the email.'}
              </p>
              <button
                type="submit"
                disabled={postState === 'submitting'}
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-medium text-sand-50 shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-[var(--shadow-cta-hover)] disabled:opacity-60"
              >
                {usingEndpoint
                  ? postState === 'submitting'
                    ? 'Sending…'
                    : postState === 'sent'
                      ? 'Request received'
                      : postState === 'error'
                        ? 'Try again'
                        : 'Request my audit'
                  : mailState === 'opened'
                    ? 'Email client opened'
                    : 'Review email draft'}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </button>
            </div>

            <div
              role="status"
              aria-live="polite"
              className="mt-4 min-h-[1.25rem] text-sm"
            >
              {usingEndpoint && postState === 'sent' && (
                <span className="text-leaf-600">
                  Thanks — we’ll be in touch within one business day.
                </span>
              )}
              {usingEndpoint && postState === 'error' && (
                <span className="text-brass-700">
                  Something went wrong sending the form. Please email{' '}
                  <a className="underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>{' '}
                  instead.
                </span>
              )}
              {!usingEndpoint && mailState === 'opened' && (
                <span className="text-ink-700">
                  We opened your email client. Review the draft and send it from
                  there — we’ll reply within one business day.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: 'text' | 'numeric' | 'email';
  autoComplete?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
  required,
  textarea,
}: FieldProps) {
  const baseClasses =
    'mt-1.5 block w-full rounded-xl bg-sand-50 px-3.5 py-3 shadow-[var(--shadow-inset-line)] text-[15px] text-ink-900 placeholder:text-ink-400 focus:ring-2 focus:ring-ink-900/20 focus:outline-none';
  return (
    <label className={textarea ? 'mt-4 block' : 'block'}>
      <span className="text-[12px] font-medium uppercase tracking-wider text-ink-600">
        {label}
        {required && (
          <>
            <span aria-hidden className="ml-1 text-brass-700">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          aria-required={required}
          required={required}
          className={baseClasses}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          aria-required={required}
          required={required}
          className={baseClasses}
        />
      )}
    </label>
  );
}
