'use client';

import React, { createContext, useContext, useState } from 'react';

type BalanceContextType = {
  balance: number;
  deductBalance: (amount: number) => void;
};

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export function BalanceProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(5.00);

  const deductBalance = (amount: number) => {
    setBalance((prev) => Math.max(0, prev - amount));
  };

  return (
    <BalanceContext.Provider value={{ balance, deductBalance }}>
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const context = useContext(BalanceContext);
  if (context === undefined) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
}
