import Nav from './components/Nav';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50 text-ink-900">
      <a
        href="#main"
        className="sr-only fixed left-4 top-4 z-50 focus:not-sr-only focus:inline-flex focus:items-center focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-sand-50 focus:shadow-[var(--shadow-cta)]"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <LogoStrip />
      </main>
    </div>
  );
}
