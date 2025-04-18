// src/context/cryptoReducer.ts

import { Action, State } from './types';

export const cryptoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_CRYPTOS':
      return { ...state, cryptos: action.payload };
    case 'TOGGLE_FAVORITE':
      const updated = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { ...state, favorites: updated };
    case 'SET_SELECTED_CARD':
      return { ...state, selectedCard: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
