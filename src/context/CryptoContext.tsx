// src/context/CryptoContext.tsx

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { cryptoReducer } from './cryptoReducer';
import { State, Action } from './types';
import { CRYPTO_BASE_URL } from '../config/constants';
import { Crypto } from '../types/crypto';

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const CryptoContext = createContext<ContextProps | undefined>(undefined);

const initialState: State = {
  cryptos: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  selectedCard: 'bitcoin',
  error: null,
};

export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cryptoReducer, initialState);

  const fetchCryptos = async () => {
    try {
      const res = await fetch(`${CRYPTO_BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1`);
      if (!res.ok) {
        dispatch({ type: 'SET_ERROR', payload: res.status === 429 ? 'Too Many Requests, Try later' : 'API error' });
        return;
      }
      const data: Crypto[] = await res.json();
      dispatch({ type: 'SET_CRYPTOS', payload: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: (err as Error).message });
    }
  };

  useEffect(() => {
    fetchCryptos();
    const interval = setInterval(fetchCryptos, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <CryptoContext.Provider value={{ state, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = (): ContextProps => {
  const context = useContext(CryptoContext);
  if (!context) throw new Error('useCrypto must be used within CryptoProvider');
  return context;
};
