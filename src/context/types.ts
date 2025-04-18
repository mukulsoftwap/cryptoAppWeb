// src/context/types.ts

import { Crypto } from '../types/crypto';

export interface State {
  cryptos: Crypto[];
  favorites: string[];
  selectedCard: string;
  error: string | null;
}

export type Action =
  | { type: 'SET_CRYPTOS'; payload: Crypto[] }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'SET_SELECTED_CARD'; payload: string }
  | { type: 'SET_ERROR'; payload: string | null };
