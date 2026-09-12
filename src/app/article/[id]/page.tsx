'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { authenticated, login } = usePrivy();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    if (!authenticated) {
      login();
      return;
    }
    
    setIsPaying(true);

    // ==========================================
    // 🔗 HACKATHON: VIEM BLOCKCHAIN INTEGRATION
    // ==========================================
    // const provider = await user.wallet.getEthereumProvider();
    // const walletClient = createWalletClient({
    //   account: user.wallet.address,
    //   chain: arcL1Testnet,
    //   transport: custom(provider)
    // });
    // const hash = await walletClient.writeContract({
    //   address: USDC_ADDRESS,
    //   abi: erc20Abi,
    //   functionName: 'transfer',
    //   args: [AUTHOR_ADDRESS, parseUnits('0.10', 6)],
    // });
    // await publicClient.waitForTransactionReceipt({ hash });
    // ==========================================

    setTimeout(() => {
      setIsUnlocked(true);
      setIsPaying(false);
    }, 2500);
  };

  return (
    <main className="min-h-[calc(100vh-96px)] bg-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold transition-all duration-200 ease-out hover:bg-black hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-white text-black px-6 py-3 text-lg uppercase tracking-wider"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {isUnlocked && (
          <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#00FF41] p-6 text-2xl font-black uppercase flex items-center justify-center gap-4 transition-all animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="text-4xl">✅</span> 
            Unlocked! 0.10 USDC transferred via Arc.
          </div>
        )}

        <header className="space-y-8 border-b-8 border-black pb-12">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[1.05] tracking-tighter">
            The Arc L1 Architecture
          </h1>
          <div className="flex items-center gap-4 text-2xl font-bold text-black">
            <div className="w-16 h-16 bg-[#00FFFF] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-4xl">
              👾
            </div>
            <p className="uppercase tracking-widest">By 0xArchitect</p>
          </div>
        </header>

        <article className="text-2xl md:text-3xl leading-relaxed space-y-10 font-medium">
          <p>
            The transition from Web2 to Web3 is not just a technological shift; it represents a fundamental rewiring of how value flows across the global network. For decades, centralized platforms have extracted the majority of value created by their users. But what happens when the very infrastructure of the web allows value to move as freely as information?
          </p>

          <div className="relative group">
            <div 
              className={`space-y-10 transition-all duration-1000 ${
                !isUnlocked 
                  ? 'blur-[8px] select-none text-transparent opacity-80' 
                  : 'filter-none opacity-100'
              }`}
              style={!isUnlocked ? { textShadow: '0 0 12px rgba(0,0,0,0.8)' } : {}}
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
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black transition-all duration-200 ease-out hover:bg-black hover:text-[#FFF455] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none bg-[#FFF455] text-black px-12 py-8 text-3xl md:text-5xl flex items-center gap-6 disabled:opacity-100 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:hover:text-black uppercase tracking-tighter"
                  style={isPaying ? { transform: 'translate(6px, 6px)', boxShadow: 'none' } : {}}
                >
                  {isPaying ? (
                    <>
                      <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
                      Authorizing...
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
