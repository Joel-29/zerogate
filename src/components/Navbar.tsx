'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function Navbar() {
  const { ready, authenticated, login, logout } = usePrivy();

  return (
    <nav className="flex items-center justify-between p-6 border-b-4 border-black bg-white z-50 sticky top-0">
      <Link href="/" className="text-4xl font-black uppercase tracking-tighter hover:translate-x-1 hover:translate-y-1 transition-transform">
        UNBLUR
      </Link>
      
      <div className="flex items-center gap-4">
        {!ready ? (
          <div className="h-12 w-28 bg-gray-200 animate-pulse border-4 border-black" />
        ) : authenticated ? (
          <>
            <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-bold bg-[#FFF455] hidden sm:block">
              5.00 USDC
            </div>
            <button 
              onClick={logout}
              className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold transition-all duration-200 ease-out hover:bg-black hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#FF2E93] text-white px-6 py-2"
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={login}
            className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold transition-all duration-200 ease-out hover:bg-black hover:text-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-[#00FFFF] px-6 py-2"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
