import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'AutoPay - Web3 Paywall',
  description: 'Pay $0.10 in USDC to unlock premium articles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#FF2E93] selection:text-white">
        <Providers>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
