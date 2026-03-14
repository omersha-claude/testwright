import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <span className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-sky-400 border border-sky-800 rounded-full bg-sky-950/50">
          E2E Testing Re-Imagined
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-balance mb-6">
          Stop Babysitting<br />
          <span className="text-sky-400">Brittle E2E Tests</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 text-balance">
          TestWright auto-scaffolds Page Object Models, resilient data-testid selectors, and CI pipelines
          so your team ships features—not test fixes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 transition text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-sky-500/20">
            Start for Free →
          </Link>
          <Link href="#how-it-works" className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition font-medium px-8 py-4 rounded-xl text-lg">
            See How It Works
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500">No credit card required · Works with Playwright & Cypress · Vue & React</p>
      </div>
    </section>
  );
}
