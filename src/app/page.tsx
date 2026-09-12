'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

const ARTICLES = [
  { id: '1', title: 'The Arc L1 Architecture Explained', color: 'bg-[#FF2E93]' },
  { id: '2', title: 'Why Subscriptions are Dead', color: 'bg-[#00FFFF]' },
  { id: '3', title: 'Building Premium Neobrutalism', color: 'bg-[#FFF455]' },
];

export default function Dashboard() {
  const { ready, authenticated, login } = usePrivy();

  if (!ready) {
    return (
      <main className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-white p-8">
        <div className="text-4xl font-black animate-pulse uppercase tracking-widest">Loading...</div>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center bg-white p-8 text-center">
        <div className="max-w-5xl w-full">
          <h1 className="text-6xl md:text-[7rem] font-black mb-8 uppercase leading-[1.05] tracking-tighter">
            The Zero-Click<br/>Paywall.
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
            Read premium internet content without subscriptions. Pay 10 cents via Arc USDC.
          </p>
          <button 
            onClick={login}
            className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#FF2E93] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none bg-[#FF2E93] text-white px-12 py-6 text-3xl md:text-4xl uppercase tracking-wider"
          >
            Get Started
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-96px)] bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <header>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter border-b-8 border-black pb-6 inline-block">
            Premium Feed
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article) => (
            <div key={article.id} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col bg-white transition-transform hover:-translate-y-2 duration-200">
              <div className={`h-64 ${article.color} border-b-4 border-black w-full flex items-center justify-center p-8 relative overflow-hidden`}>
                 {/* Abstract geometric shapes */}
                 <div className="absolute w-32 h-32 bg-black rounded-full mix-blend-overlay opacity-20 -top-10 -right-10" />
                 <div className="absolute w-40 h-40 bg-white mix-blend-overlay opacity-30 bottom-0 left-0" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />
                 <span className="text-8xl relative z-10">✦</span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between gap-8">
                <h3 className="text-3xl font-black leading-tight uppercase tracking-tight">
                  {article.title}
                </h3>
                <Link 
                  href={`/article/${article.id}`}
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold transition-all duration-200 ease-out hover:bg-black hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-white text-black text-center py-4 w-full block mt-auto text-xl uppercase"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
