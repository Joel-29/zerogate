'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import { useBalance } from '@/context/BalanceContext';
import { useState } from 'react';

const ARTICLES = [
  { id: '1', title: 'The Arc L1 Architecture Explained', color: 'bg-[#FF2E93]', tag: 'Tech', time: '4 min read' },
  { id: '2', title: 'Why Subscriptions are Dead', color: 'bg-[#00FFFF]', tag: 'Crypto', time: '6 min read' },
  { id: '3', title: 'Building Premium Neobrutalism', color: 'bg-[#FFF455]', tag: 'UI/UX', time: '3 min read' },
];

export default function Dashboard() {
  const { ready, authenticated, login } = usePrivy();
  const { balance } = useBalance();
  const [activeTab, setActiveTab] = useState('All');

  if (!ready) {
    return (
      <main className="flex min-h-[calc(100vh-104px)] items-center justify-center bg-white p-8">
        <div className="text-4xl font-black animate-pulse uppercase tracking-widest">Loading...</div>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="flex flex-col bg-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center bg-[#FFF455] border-b-8 border-black">
          <div className="max-w-6xl w-full space-y-12">
            <h1 className="text-7xl md:text-[9rem] font-black uppercase leading-[0.95] tracking-tighter drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
              The Internet,<br/>Unlocked.
            </h1>
            <p className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-8 inline-block transform -rotate-1">
              Experience seamless Arc USDC micro-payments.
            </p>
            <div className="pt-8">
              <button 
                onClick={login}
                className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#00FFFF] active:translate-x-[8px] active:translate-y-[8px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FF2E93] text-white px-16 py-8 text-4xl md:text-5xl uppercase tracking-wider"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Marquee Banner */}
        <div className="bg-[#00FFFF] border-b-8 border-black py-6 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee font-black text-4xl uppercase tracking-widest flex items-center space-x-16">
            <span>NO SUBSCRIPTIONS</span>
            <span>•</span>
            <span>ZERO CLICKS</span>
            <span>•</span>
            <span>NATIVE USDC</span>
            <span>•</span>
            <span>INSTANT SETTLEMENT</span>
            <span>•</span>
            <span>NO SUBSCRIPTIONS</span>
            <span>•</span>
            <span>ZERO CLICKS</span>
            <span>•</span>
            <span>NATIVE USDC</span>
            <span>•</span>
            <span>INSTANT SETTLEMENT</span>
            <span>•</span>
          </div>
        </div>

        {/* How it Works */}
        <section className="p-8 md:p-24 bg-white relative">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 bg-[#FF2E93] text-white transform hover:-translate-y-2 transition-transform duration-200">
              <h3 className="text-6xl font-black mb-6">1.</h3>
              <h4 className="text-4xl font-bold mb-6 uppercase tracking-tight">Login with Email</h4>
              <p className="text-2xl font-medium leading-relaxed">No seed phrases. We automatically provision a secure embedded wallet for you via Privy.</p>
            </div>
            <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 bg-[#00FFFF] text-black transform hover:-translate-y-2 transition-transform duration-200">
              <h3 className="text-6xl font-black mb-6">2.</h3>
              <h4 className="text-4xl font-bold mb-6 uppercase tracking-tight">Load USDC</h4>
              <p className="text-2xl font-medium leading-relaxed">Fund your wallet on the Arc Testnet. (We've given you 5.00 mock USDC to start!)</p>
            </div>
            <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 bg-[#FFF455] text-black transform hover:-translate-y-2 transition-transform duration-200">
              <h3 className="text-6xl font-black mb-6">3.</h3>
              <h4 className="text-4xl font-bold mb-6 uppercase tracking-tight">Read Instantly</h4>
              <p className="text-2xl font-medium leading-relaxed">Pay micro-cents to unlock premium articles. No subscriptions ever again.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const filteredArticles = activeTab === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === activeTab);

  return (
    <main className="min-h-[calc(100vh-104px)] bg-[#f4f4f5] p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#00FFFF] p-8 transform hover:-translate-y-1 transition-transform">
            <p className="text-xl font-bold uppercase tracking-widest mb-3">Remaining Balance</p>
            <p className="text-6xl font-black">{balance.toFixed(2)} USDC</p>
          </div>
          <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#FFF455] p-8 transform hover:-translate-y-1 transition-transform">
            <p className="text-xl font-bold uppercase tracking-widest mb-3">Articles Unlocked</p>
            <p className="text-6xl font-black">12</p>
          </div>
          <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-8 transform hover:-translate-y-1 transition-transform">
            <p className="text-xl font-bold uppercase tracking-widest mb-3">Network</p>
            <p className="text-5xl font-black mt-2">Arc Testnet</p>
          </div>
        </div>

        {/* Filtering */}
        <div className="flex flex-wrap gap-4 border-b-8 border-black pb-8 pt-8">
          {['All', 'Tech', 'Crypto', 'UI/UX'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-4 border-black px-8 py-3 text-2xl font-black uppercase transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]' 
                  : 'bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredArticles.map((article) => (
            <div key={article.id} className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col bg-white transition-transform hover:-translate-y-2 duration-200 group">
              <div className={`h-64 ${article.color} border-b-4 border-black w-full relative overflow-hidden`}>
                <div className="absolute top-4 right-4 bg-white border-4 border-black px-4 py-2 font-bold text-lg uppercase z-20">
                  {article.time}
                </div>
                 {/* Abstract geometric shapes */}
                 <div className="absolute w-40 h-40 bg-black rounded-full mix-blend-overlay opacity-20 -top-10 -right-10 z-10" />
                 <div className="absolute w-48 h-48 bg-white mix-blend-overlay opacity-30 bottom-0 left-0 z-10" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#FFF455] border-4 border-black flex items-center justify-center text-2xl overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,1)]">
                      👽
                    </div>
                    <span className="font-bold text-gray-500 uppercase tracking-widest">0xArchitect</span>
                  </div>
                  <h3 className="text-3xl font-black leading-tight uppercase tracking-tight">
                    {article.title}
                  </h3>
                </div>
                <Link 
                  href={`/article/${article.id}`}
                  className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#00FFFF] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#00FFFF] text-black text-center py-5 w-full block mt-auto text-2xl uppercase tracking-wider"
                >
                  Read for $0.10
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
