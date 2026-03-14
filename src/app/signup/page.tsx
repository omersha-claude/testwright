'use client';
import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) { setError(error.message); setLoading(false); }
    else setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-white">
            <span className="text-sky-400">✓</span> TestWright
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">Create your account</h1>
          <p className="text-slate-400 mt-1">Free forever, no credit card required</p>
        </div>
        {success ? (
          <div className="bg-slate-900 border border-green-700 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-lg font-semibold text-white mb-2">Check your email</h2>
            <p className="text-slate-400 text-sm">We sent a confirmation link to <strong className="text-white">{email}</strong>. Click it to activate your account.</p>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">
            {error && <div className="bg-red-500/10 border border-red-700 text-red-400 text-sm rounded-lg px-4 py-3">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input type="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Min. 8 characters" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition">
              {loading ? 'Creating account…' : 'Create Free Account'}
            </button>
            <p className="text-center text-sm text-slate-400">
              Already have an account? <Link href="/login" className="text-sky-400 hover:text-sky-300 transition">Sign in</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
