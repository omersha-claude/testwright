export function HowItWorksSection() {
  const steps = [
    { step: '01', title: 'Sign Up & Connect Your Repo', body: 'Link your GitHub/GitLab project in 30 seconds. TestWright inspects your component tree and route structure.' },
    { step: '02', title: 'Auto-Generate POM Scaffolding', body: 'TestWright crawls your app, identifies interactive elements, and generates typed POM classes with resilient selectors.' },
    { step: '03', title: 'Write Tests in Plain English', body: 'Describe a user journey; the AI scaffolds the test. Review, tweak, commit. Done in minutes not hours.' },
    { step: '04', title: 'CI Runs, Dashboard Reports', body: 'Your generated CI config runs tests on every PR. The dashboard tracks health, flakiness, and coverage over time.' },
  ];
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">From Zero to Stable Tests in Minutes</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Four steps to a test suite your whole team can trust.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map(({ step, title, body }) => (
            <div key={step} className="flex gap-4 bg-slate-800/50 border border-slate-800 rounded-2xl p-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-800 flex items-center justify-center font-bold text-sky-400">{step}</div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
