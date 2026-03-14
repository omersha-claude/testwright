export function ProblemSection() {
  const pains = [
    { icon: '💔', title: 'Tests Break on Every UI Tweak', body: 'A renamed class or restructured DOM wipes out hours of test coverage. Your CI is red more than green.' },
    { icon: '🕰️', title: 'Manual Page Object Boilerplate', body: 'Writing POM classes by hand is tedious, inconsistent, and the first thing skipped under deadline pressure.' },
    { icon: '🔥', title: 'Tests as a Maintenance Tax', body: 'Instead of shipping features, developers firefight flaky tests. Morale drops, coverage drops, bugs ship.' },
  ];
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sound Familiar?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Every team that does E2E testing at scale hits the same three walls.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map(({ icon, title, body }) => (
            <div key={title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
