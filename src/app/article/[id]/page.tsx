'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { Loader2 } from 'lucide-react';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { authenticated, login } = usePrivy();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    // Force user to login if they attempt to pay while unauthenticated
    if (!authenticated) {
      login();
      return;
    }
    
    setIsPaying(true);

    // ==========================================
    // 🔗 VIEM BLOCKCHAIN INTEGRATION (TODO)
    // ==========================================
    // 1. Get the user's embedded wallet provider via Privy:
    //    const provider = await user.wallet.getEthereumProvider();
    // 
    // 2. Initialize a viem wallet client:
    //    const walletClient = createWalletClient({
    //      account: user.wallet.address,
    //      chain: arcL1Testnet,
    //      transport: custom(provider)
    //    });
    // 
    // 3. Define the USDC token address and author address:
    //    const usdcAddress = '0x...'; 
    //    const authorAddress = '0xAuthorEthAddress...';
    // 
    // 4. Send the ERC-20 transaction:
    //    const hash = await walletClient.writeContract({
    //      address: usdcAddress,
    //      abi: erc20Abi,
    //      functionName: 'transfer',
    //      args: [authorAddress, parseUnits('0.10', 6)],
    //    });
    // 
    // 5. Wait for the transaction receipt via publicClient
    // ==========================================

    // SIMULATION FOR HACKATHON DEMO
    setTimeout(() => {
      setIsUnlocked(true);
      setIsPaying(false);
    }, 2500);
  };

  return (
    <main className="max-w-4xl mx-auto p-8 py-16 space-y-12">
      {/* Success Banner */}
      {isUnlocked && (
        <div className="neo-card bg-[#00FF41] p-6 text-2xl font-black uppercase flex items-center justify-center gap-4 mb-8 transition-all animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="text-4xl">✅</span> 
          Payment Successful! 0.10 USDC sent to author.eth
        </div>
      )}

      {/* Article Header */}
      <header className="space-y-8">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tighter">
          The Secret Architecture of the Next Internet
        </h1>
        <div className="flex items-center gap-4 text-2xl font-bold text-gray-700 border-t-4 border-b-4 border-black py-4">
          <div className="w-14 h-14 bg-[#FFF455] neo-border flex items-center justify-center text-3xl">
            ✍️
          </div>
          <p>By Satoshi Nakamoto</p>
        </div>
      </header>

      {/* Article Content */}
      <article className="text-2xl md:text-3xl leading-relaxed space-y-8 relative group font-medium">
        <p>
          The transition from Web2 to Web3 is not just a technological shift; it represents a fundamental rewiring of how value flows across the global network. For decades, centralized platforms have extracted the majority of value created by their users, leaving creators with fractions of pennies on the dollar. But what happens when the very infrastructure of the web allows value to move as freely as information?
        </p>

        <div className="relative">
          {/* Gated Text Container */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              !isUnlocked ? 'filter blur-[8px] select-none text-gray-400 opacity-60' : 'filter-none opacity-100'
            }`}
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

          {/* Paywall Overlay */}
          {!isUnlocked && (
            <div className={`absolute inset-0 z-10 flex items-center justify-center bg-white/10 transition-opacity duration-300 backdrop-blur-sm ${isPaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <button
                onClick={handlePayment}
                disabled={isPaying}
                className="neo-button bg-[#FF2E93] text-white px-10 py-8 text-2xl md:text-4xl flex items-center gap-4 disabled:opacity-90 disabled:cursor-not-allowed"
                style={isPaying ? { transform: 'translate(4px, 4px)', boxShadow: 'none' } : {}}
              >
                {isPaying ? (
                  <>
                    <Loader2 className="w-10 h-10 animate-spin" />
                    Negotiating with Blockchain...
                  </>
                ) : (
                  <>🔓 Pay 0.10 USDC to Unlock</>
                )}
              </button>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
