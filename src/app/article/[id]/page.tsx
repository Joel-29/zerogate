'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import { useBalance } from '@/context/BalanceContext';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { authenticated, login } = usePrivy();
  const { balance, deductBalance } = useBalance();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handlePayment = () => {
    if (!authenticated) {
      login();
      return;
    }
    
    if (balance < 0.10) {
      alert("Insufficient USDC. You need at least 0.10 USDC to unlock this article.");
      return;
    }
    
    setIsPaying(true);

    // ==========================================
    // 🔗 HACKATHON: VIEM BLOCKCHAIN INTEGRATION
    // ==========================================
    // const provider = await user.wallet.getEthereumProvider();
    // const walletClient = createWalletClient({ ... });
    // const hash = await walletClient.writeContract({ ... });
    // await publicClient.waitForTransactionReceipt({ hash });
    // ==========================================

    setTimeout(() => {
      deductBalance(0.10);
      setIsUnlocked(true);
      setIsPaying(false);
    }, 2500);
  };

  const currentDate = new Date().toLocaleString();

  return (
    <main className="min-h-[calc(100vh-104px)] bg-[#f4f4f5] p-6 md:p-16 relative">
      {/* RECEIPT MODAL */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative max-w-2xl w-full animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowReceipt(false)}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FF2E93] text-white font-black text-2xl hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              X
            </button>

            <div className="text-center mb-10">
              <span className="text-6xl mb-4 block drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">🧾</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-[#00FF41] tracking-tight">Payment Confirmed</h2>
            </div>

            <div className="space-y-6 font-bold text-xl md:text-2xl mb-12">
              <div className="flex justify-between border-b-4 border-black pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Network</span>
                <span className="text-black">Arc L1 Testnet</span>
              </div>
              <div className="flex justify-between border-b-4 border-black pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Amount Paid</span>
                <span className="text-black bg-[#FFF455] px-2 border-2 border-black">0.10 USDC</span>
              </div>
              <div className="flex justify-between border-b-4 border-black pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Gas Fee</span>
                <span className="text-black">0.0001 USDC <span className="text-sm bg-[#00FF41] border-2 border-black px-2 ml-2">(Covered)</span></span>
              </div>
              <div className="flex justify-between border-b-4 border-black pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Recipient</span>
                <span className="text-black font-black">author.eth</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center border-b-4 border-black pb-4 gap-2">
                <span className="text-gray-500 uppercase tracking-widest">Tx Hash</span>
                <span className="text-black bg-gray-100 border-2 border-black px-2 truncate">0x8F7a...9c3B (Mocked)</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center border-b-4 border-black pb-4 gap-2">
                <span className="text-gray-500 uppercase tracking-widest">Timestamp</span>
                <span className="text-black text-lg md:text-xl">{currentDate}</span>
              </div>
            </div>

            <button 
              onClick={() => alert("Downloading PDF... (Mock)")}
              className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#00FFFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#00FFFF] text-black px-8 py-4 text-center text-2xl uppercase w-full block"
            >
              ↓ Download PDF
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold transition-all duration-200 ease-out hover:bg-black hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-white text-black px-8 py-4 text-xl uppercase tracking-wider"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {isUnlocked && (
          <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-10 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-6 border-b-8 border-black pb-6">
              <span className="text-6xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">✅</span> 
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#00FF41]">Payment Successful</h2>
            </div>
            <div className="space-y-4 font-bold text-2xl">
              <p className="flex justify-between border-b-4 border-dashed border-gray-300 pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Amount</span>
                <span className="text-black font-black">0.10 USDC</span>
              </p>
              <p className="flex justify-between border-b-4 border-dashed border-gray-300 pb-4">
                <span className="text-gray-500 uppercase tracking-widest">Status</span>
                <span className="text-black bg-[#FFF455] px-4 border-4 border-black ml-4">CONFIRMED</span>
              </p>
            </div>
            <button 
              onClick={() => setShowReceipt(true)}
              className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#FFF455] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#FF2E93] text-white px-8 py-5 text-center text-2xl uppercase mt-4 block"
            >
              🧾 View Smart Receipt
            </button>
          </div>
        )}

        <header className="space-y-10 border-b-8 border-black pb-12">
          <h1 className="text-6xl md:text-[6rem] font-black uppercase leading-[0.95] tracking-tighter drop-shadow-[6px_6px_0_rgba(0,0,0,1)]">
            The Arc L1 Architecture
          </h1>
          <div className="flex items-center gap-6 text-3xl font-bold text-black pt-4">
            <div className="w-20 h-20 bg-[#00FFFF] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-5xl">
              👽
            </div>
            <p className="uppercase tracking-widest bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_rgba(0,0,0,1)]">By 0xArchitect</p>
          </div>
        </header>

        <article className="text-2xl md:text-4xl leading-relaxed space-y-12 font-medium bg-white p-10 md:p-16 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#FF2E93] border-b-4 border-black" />
          
          <p className="pt-4">
            The transition from Web2 to Web3 is not just a technological shift; it represents a fundamental rewiring of how value flows across the global network. For decades, centralized platforms have extracted the majority of value created by their users. But what happens when the very infrastructure of the web allows value to move as freely as information?
          </p>

          <div className="relative group mt-12">
            <div 
              className={`space-y-12 transition-all duration-1000 ${
                !isUnlocked 
                  ? 'blur-[10px] select-none text-transparent opacity-70' 
                  : 'filter-none opacity-100'
              }`}
              style={!isUnlocked ? { textShadow: '0 0 16px rgba(0,0,0,0.8)' } : {}}
            >
              <p>
                Imagine a world where the concept of a "subscription" is entirely obsolete. Instead of paying $15 a month for a dozen different services you barely use, you pay imperceptible micro-transactions—fractions of a cent—only for the exact content you consume. This is the promise of embedded wallets and instantaneous Layer-2 blockchains like Arc.
              </p>
              
              <p>
                The architecture relies heavily on zero-knowledge proofs to maintain user privacy while ensuring cryptographic verification of funds. When a user clicks to read an article, a smart contract is triggered seamlessly in the background. There are no seed phrases, no gas estimation pop-ups, and no friction. It is, for all intents and purposes, invisible Web3.
              </p>
              
              <p>
                As we look toward the next decade, platforms that fail to adopt these natively embedded monetization models will find themselves outpaced by decentralized protocols. The creators are moving to where the money flows directly to them, and the users are moving to where they aren't the product. The revolution isn't coming; it's already here, buried beneath the surface of the web.
              </p>
            </div>

            {!isUnlocked && (
              <div className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${isPaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <button
                  onClick={handlePayment}
                  disabled={isPaying}
                  className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#FFF455] active:translate-x-[8px] active:translate-y-[8px] active:shadow-[4px_4px_0_rgba(0,0,0,1)] bg-[#FF2E93] text-white px-16 py-10 text-4xl md:text-5xl flex items-center gap-8 disabled:opacity-100 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:hover:text-black disabled:cursor-wait uppercase tracking-tighter"
                  style={isPaying ? { transform: 'translate(8px, 8px)', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' } : {}}
                >
                  {isPaying ? (
                    <>
                      <div className="w-10 h-10 border-8 border-black border-t-transparent rounded-full animate-spin" />
                      Authorizing via Arc...
                    </>
                  ) : (
                    <>🔓 Unlock for 0.10 USDC</>
                  )}
                </button>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
