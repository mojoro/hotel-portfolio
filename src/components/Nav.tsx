import { useEffect, useRef, useState } from 'react';
import Wordmark from './Wordmark';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={[
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-sand-50/80 shadow-[var(--shadow-bottom-line)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:py-4 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Hotel Online Marketing — home"
        >
          <Wordmark />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#audit"
            className="group hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-sand-50 shadow-[var(--shadow-cta)] transition-all hover:bg-ink-800 hover:shadow-[var(--shadow-cta-hover)] md:inline-flex"
          >
            Free hotel audit
            <span aria-hidden className="ml-1.5 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink-900 shadow-[var(--shadow-inset-line)] md:hidden"
          >
            <svg width={open ? 14 : 18} height={open ? 14 : 14} viewBox={open ? '0 0 14 14' : '0 0 18 14'} fill="none">
              <path
                d={open ? 'M3 3L11 11 M11 3L3 11' : 'M2 2H16 M2 7H16 M2 12H16'}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={[
          'overflow-hidden bg-sand-50/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:hidden',
          open ? 'max-h-[420px] opacity-100 shadow-[var(--shadow-top-line)]' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav
          aria-label="Mobile"
          className={[
            'mx-auto flex w-full max-w-7xl flex-col items-start gap-0.5 px-6 py-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
            open ? 'translate-y-0' : '-translate-y-2',
          ].join(' ')}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="-mx-2 rounded-lg px-2 py-1.5 text-base font-medium text-ink-800 transition-colors hover:bg-sand-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#audit"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-4 py-2.5 text-sm font-medium text-sand-50 shadow-[var(--shadow-cta)]"
          >
            Free hotel audit
          </a>
        </nav>
      </div>
    </header>
  );
}
