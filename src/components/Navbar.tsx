'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import Image from 'next/image';
import { useBalance } from '@/context/BalanceContext';

export default function Navbar() {
  const { ready, authenticated, login, logout } = usePrivy();
  const { balance } = useBalance();

  return (
    <nav className="flex items-center justify-between p-6 border-b-8 border-black bg-white z-50 sticky top-0">
      <Link href="/" className="text-5xl font-black uppercase tracking-tighter hover:translate-x-1 hover:translate-y-1 transition-transform">
        <Image
          src="/zerogate-logo.png"
          alt="ZeroGate"
          width={144}
          height={56}
          className="h-14 w-36 border-4 border-black object-cover object-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </Link>
      
      <div className="flex items-center gap-4">
        {!ready ? (
          <div className="h-12 w-28 bg-gray-200 animate-pulse border-4 border-black" />
        ) : authenticated ? (
          <>
            <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 py-2 text-xl font-black bg-[#FFF455] hidden sm:block">
              {balance.toFixed(2)} USDC
            </div>
            <button 
              onClick={logout}
              className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xl font-bold transition-all duration-200 ease-out hover:bg-black hover:text-[#FF2E93] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#FF2E93] text-white px-8 py-3"
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={login}
            className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xl font-bold transition-all duration-200 ease-out hover:bg-black hover:text-[#00FFFF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#00FFFF] px-10 py-3"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
