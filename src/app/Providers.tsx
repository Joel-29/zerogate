'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId="your-dummy-app-id-here"
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
        defaultChain: {
          id: 999999,
          name: 'Arc L1 Testnet',
          network: 'arc-l1-testnet',
          nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
          rpcUrls: { default: { http: ['https://rpc.arc-l1-testnet.com'] } },
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}
