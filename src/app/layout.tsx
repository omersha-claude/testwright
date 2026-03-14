import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PostHogProvider } from '@/components/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TestWright — Maintainable E2E Testing Framework',
  description: 'Stop writing brittle E2E tests. TestWright auto-generates Page Object Models, resilient selectors, and CI-ready test suites for Vue and React apps.',
  keywords: ['E2E testing', 'test automation', 'Page Object Model', 'Playwright', 'Cypress', 'QA automation'],
  openGraph: {
    title: 'TestWright — Maintainable E2E Testing',
    description: 'Stop wasting hours on brittle E2E tests. Ship maintainable test suites in minutes.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
