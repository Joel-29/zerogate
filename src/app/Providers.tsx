'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode } from 'react';

const arcTestnet = {
  id: 999999,
  name: 'Arc L1 Testnet',
  network: 'arc-l1-testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: { 
    default: { http: ['https://rpc.arc-l1-testnet.com'] },
    public: { http: ['https://rpc.arc-l1-testnet.com'] } 
  },
} as any;

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId="cmtyog73i041p0ci9is4edkr5"
      config={{
        loginMethods: ['email'],
        appearance: {
          theme: 'light',
          accentColor: '#FF2E93',
          logo: 'https://your-logo-url.com/logo.png', 
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: arcTestnet,
        supportedChains: [arcTestnet],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
