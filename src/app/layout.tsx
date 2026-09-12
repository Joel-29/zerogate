import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import { BalanceProvider } from '@/context/BalanceContext';

export const metadata: Metadata = {
  title: 'UNBLUR - The Zero-Click Paywall',
  description: 'Read premium internet content without subscriptions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#FF2E93] selection:text-white bg-white text-black">
        <Providers>
          <BalanceProvider>
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
          </BalanceProvider>
        </Providers>
      </body>
    </html>
  );
}
