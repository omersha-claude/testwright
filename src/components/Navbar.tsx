'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-sky-400">✓</span>
          <span>TestWright</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <Link href="#problem" className="hover:text-white transition">Problem</Link>
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition">How It Works</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-300 hover:text-white transition px-3 py-1.5">Log in</Link>
          <Link href="/signup" className="text-sm bg-sky-500 hover:bg-sky-400 transition text-white font-medium px-4 py-2 rounded-lg">Get Started Free</Link>
        </div>
        <button className="md:hidden text-slate-300" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 flex flex-col gap-4 text-sm">
          <Link href="#problem" onClick={() => setOpen(false)}>Problem</Link>
          <Link href="#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/signup" className="bg-sky-500 text-white text-center py-2 rounded-lg font-medium">Get Started Free</Link>
        </div>
      )}
    </nav>
  );
}
