'use client';
import React, { useState, createContext, useContext } from 'react';

interface BankContextType {
  balance: number;
  decreaseBalance: (amount: number) => boolean;
  increaseBalance: (amount: number) => void;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export function BankProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState<number>(100);

  const decreaseBalance = (amount: number): boolean => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      return true;
    }
    return false;
  };

  const increaseBalance = (amount: number) => {
    setBalance(prev => prev + amount);
  };

  return (
    <BankContext.Provider value={{ balance, decreaseBalance, increaseBalance }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error;
  }
  return context;
}