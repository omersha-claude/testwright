import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-sky-400">✓</span>
          <span>TestWright</span>
        </div>
        <nav className="flex gap-6 text-sm text-slate-400">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/signup" className="hover:text-white transition">Sign Up</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
        </nav>
        <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} TestWright. All rights reserved.</p>
      </div>
    </footer>
  );
}
