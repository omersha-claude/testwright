import Link from 'next/link';

export function PricingSection() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LEMON_CHECKOUT_URL || '#';

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for solo devs exploring TestWright.',
      cta: 'Get Started Free',
      href: '/signup',
      highlight: false,
      features: [
        '1 connected project',
        'Auto POM generation (up to 10 pages)',
        'Playwright & Cypress support',
        '5 AI test descriptions / month',
        'Community support',
      ],
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'For teams that ship fast and break nothing.',
      cta: 'Start Pro →',
      href: checkoutUrl,
      highlight: true,
      features: [
        'Unlimited projects',
        'Unlimited POM generation',
        'CI config generator (GitHub Actions + GitLab CI)',
        'Unlimited AI test descriptions',
        'Test health dashboard & flakiness tracking',
        'Priority email support',
        'Slack integration',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organisations needing SSO, SLAs, and on-prem.',
      cta: 'Contact Us',
      href: 'mailto:hello@testwright.dev',
      highlight: false,
      features: [
        'Everything in Pro',
        'SSO / SAML',
        'On-prem deployment option',
        'Dedicated success engineer',
        'Custom SLA',
        'Volume licensing',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Start free. Upgrade when your team is ready to scale.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                plan.highlight
                  ? 'bg-sky-500/10 border-sky-500 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && <span className="text-slate-400 mb-1">/{plan.period}</span>}
              </div>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-2 text-sm mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">✓</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition ${
                  plan.highlight
                    ? 'bg-sky-500 hover:bg-sky-400 text-white'
                    : 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
