import { createServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect('/login');

  const user = session.user;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-sky-400">✓</span> TestWright
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">{user.email}</span>
          <form action="/auth/signout" method="POST">
            <button className="text-sm text-slate-400 hover:text-white transition">Sign out</button>
          </form>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to TestWright 👋</h1>
          <p className="text-slate-400">Your maintainable E2E testing dashboard</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[['Projects Connected', '0', '📁'], ['Test Files Generated', '0', '📄'], ['Flaky Tests Found', '0', '🔍']].map(([label, val, icon]) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-2xl font-bold">{val}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-sky-800 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-xl font-bold mb-2">Connect Your First Project</h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">Link a GitHub or GitLab repository to start auto-generating Page Object Models and resilient test scaffolding.</p>
          <button className="bg-sky-500 hover:bg-sky-400 transition text-white font-semibold px-6 py-3 rounded-xl">
            + Connect Repository
          </button>
        </div>

        <div className="mt-8 bg-amber-500/10 border border-amber-700 rounded-2xl p-6">
          <h3 className="font-semibold text-amber-300 mb-1">⭐ Upgrade to Pro</h3>
          <p className="text-slate-400 text-sm mb-4">Unlimited projects, CI config generator, AI test descriptions, and the health dashboard.</p>
          <Link href={process.env.NEXT_PUBLIC_LEMON_CHECKOUT_URL || '#'}
            className="inline-block bg-amber-500 hover:bg-amber-400 transition text-white font-semibold px-5 py-2.5 rounded-lg text-sm">
            Upgrade to Pro →
          </Link>
        </div>
      </div>
    </main>
  );
}
