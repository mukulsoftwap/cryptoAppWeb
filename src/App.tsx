import React from 'react';
import './App.css';
import CryptoList from './components/CryptoList';
import Favorites from './components/Favorites';
import PriceChart from './components/Chart';
import { useCrypto } from './context/CryptoContext';

const App: React.FC = () => {

  const { state, dispatch } = useCrypto();

  const toggleFavorite = (id: string) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  };

  const onCardClickHandler = (id: string) => {
    dispatch({ type: 'SET_SELECTED_CARD', payload: id });
  };

  const getCryptoData = (type: 'favorite' | 'crypto') =>
    state.cryptos.filter(cr =>
      type === 'favorite' ? state.favorites.includes(cr.id) : !state.favorites.includes(cr.id)
    );

  return (
    <div className="App">
      <h2 className="heading">Top 10 Cryptocurrencies</h2>
      <div className="chartContent">
        <div className="favorite">
          <Favorites
            favorites={getCryptoData('favorite')}
            toggleFavorite={toggleFavorite}
            onCardClick={onCardClickHandler}
          />
        </div>
        <div className="chartWrapper">
          <PriceChart coinId={state.selectedCard} />
        </div>
      </div>
      {state.error ? state.error : (
        <CryptoList
          cryptoData={getCryptoData('crypto')}
          toggleFavorite={toggleFavorite}
          onCardClick={onCardClickHandler}
        />
      )}
    </div>
  );
};

export default App;
