'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function Navbar() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  const walletAddress = user?.wallet?.address || '';
  const truncatedAddress = walletAddress 
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '';

  return (
    <nav className="flex items-center justify-between p-6 border-b-4 border-black bg-white z-10 sticky top-0">
      <Link href="/" className="text-3xl font-black uppercase tracking-tighter hover:scale-105 transition-transform">
        AutoPay
      </Link>
      
      <div className="flex items-center gap-4">
        {!ready ? (
          <div className="h-12 w-28 bg-gray-200 animate-pulse neo-border" />
        ) : authenticated ? (
          <>
            <span className="neo-card px-4 py-2 font-bold bg-[#00FFFF] hidden sm:block">
              {truncatedAddress}
            </span>
            <button 
              onClick={logout}
              className="neo-button bg-[#FF2E93] text-white px-6 py-2"
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={login}
            className="neo-button bg-[#FFF455] px-6 py-2"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
