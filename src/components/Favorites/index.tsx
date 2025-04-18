import React from 'react';
import { Crypto } from '../../types/crypto';
import CryptoCard from '../CryptoCard';
import './style.css'
import { useCrypto } from '../../context/CryptoContext';

interface Props {
  favorites: Crypto[];
  toggleFavorite: (id: string) => void;
  onCardClick: (id: string) => void;
}

const Favorites: React.FC<Props> = ({ favorites, toggleFavorite, onCardClick }) => {
  const { state } = useCrypto();

  if (state.error) return <p>{state.error}</p>;

  if (!favorites.length) return <h2 className='noItem'>No Favorite yet <br/> Click on '☆' to add as Favorite</h2>

  return (
    <>
      <h2>Your Favorites</h2>
      <div className='wrapper'>
        {favorites?.map((coin) => (
          <CryptoCard
            key={coin.id}
            coin={coin}
            isFavorite={true}
            toggleFavorite={toggleFavorite}
            onCardClick={onCardClick}
            selected={coin.id === state.selectedCard}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
