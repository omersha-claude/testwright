export function FeaturesSection() {
  const features = [
    { icon: '🏗️', title: 'Auto Page Object Generator', body: 'Point TestWright at any URL and it generates fully-typed POM classes with data-testid selectors automatically.' },
    { icon: '🎯', title: 'Resilient Selector Strategy', body: 'Prioritises data-testid, aria roles, and semantic selectors. CSS-fragile selectors become a thing of the past.' },
    { icon: '⚡', title: 'One-Command CI Setup', body: 'Generates a ready-to-use GitHub Actions / GitLab CI config with parallelisation, retries, and artifact uploads.' },
    { icon: '🔍', title: 'Test Health Dashboard', body: 'Track flakiness rates, coverage by page, and time-to-fix across sprints. Spot regressions before they compound.' },
    { icon: '🤝', title: 'Works With Your Stack', body: 'Native support for Playwright and Cypress, Vue and React, TypeScript out of the box.' },
    { icon: '📝', title: 'AI Test Description Writer', body: 'Describe user journeys in plain English; TestWright scaffolds the full typed test file, ready to run.' },
  ];
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything for Maintainable E2E Tests</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">A complete toolkit so you write tests once and trust them forever.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, body }) => (
            <div key={title} className="group bg-slate-900 border border-slate-800 hover:border-sky-700 transition rounded-2xl p-6">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
