'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

const ARTICLES = [
  { id: '1', title: 'The Future of Web3', color: 'bg-[#FF2E93]' },
  { id: '2', title: 'AI takes over the world', color: 'bg-[#00FFFF]' },
  { id: '3', title: 'Neobrutalism UI Trends', color: 'bg-[#FFF455]' },
];

export default function Home() {
  const { ready, authenticated, user, login } = usePrivy();

  if (!ready) {
    return (
      <main className="flex min-h-[calc(100vh-88px)] items-center justify-center p-8">
        <div className="text-4xl font-black animate-pulse">Loading...</div>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="flex min-h-[calc(100vh-88px)] flex-col items-center justify-center p-8 text-center">
        <div className="max-w-5xl w-full">
          <h1 className="text-6xl md:text-[6rem] font-black mb-8 uppercase leading-[1.1] tracking-tight">
            The Zero-Click<br/>Web3 Paywall.
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-12">
            Say goodbye to subscriptions.
          </p>
          <button 
            onClick={login}
            className="neo-button bg-[#00FFFF] px-12 py-6 text-3xl uppercase tracking-wider"
          >
            Start Reading
          </button>
        </div>
      </main>
    );
  }

  const walletAddress = user?.wallet?.address || '0x0000000000000000000000000000000000000000';
  const truncatedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  return (
    <main className="p-8 max-w-6xl mx-auto space-y-16 py-12">
      {/* Top Card: Your Wallet */}
      <section>
        <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Your Dashboard</h2>
        <div className="neo-card bg-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-bold text-gray-500 uppercase tracking-widest mb-2">Wallet Balance</p>
            <p className="text-6xl font-black">5.00 USDC</p>
          </div>
          <div className="md:text-right">
            <p className="font-bold text-gray-500 uppercase tracking-widest mb-2">Connected Address</p>
            <p className="text-xl md:text-2xl font-bold bg-gray-100 px-4 py-2 neo-border inline-block break-all">
              {truncatedAddress}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section: Articles */}
      <section>
        <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Premium Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div key={article.id} className="neo-card flex flex-col overflow-hidden bg-white">
              {/* Image Placeholder */}
              <div className={`h-48 ${article.color} border-b-4 border-black w-full flex items-center justify-center`}>
                <span className="text-6xl">📰</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <h3 className="text-3xl font-black leading-tight">
                  {article.title}
                </h3>
                <Link 
                  href={`/article/${article.id}`}
                  className="neo-button bg-white text-center py-4 w-full block mt-auto text-xl"
                >
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
