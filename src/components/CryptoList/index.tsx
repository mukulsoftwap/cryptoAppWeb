import React from 'react';
import { Crypto } from '../../types/crypto';
import CryptoCard from '../CryptoCard';
import './style.css'
import { useCrypto } from '../../context/CryptoContext';

interface Props {
  cryptoData: Crypto[];
  toggleFavorite: (id: string) => void;
  onCardClick: (id: string) => void;
}

const CryptoList: React.FC<Props> = ({ cryptoData, toggleFavorite, onCardClick }) => {

  const { state } = useCrypto();

  if (state.error) return <p>{state.error}</p>;

  return (
    <>
      <div className='coinsWrapper'>
        {
          cryptoData.map((coin) => (
            <CryptoCard
              key={coin.id}
              coin={coin}
              toggleFavorite={toggleFavorite}
              onCardClick={onCardClick}
              selected={coin.id === state.selectedCard}
            />
          ))
        }
      </div>
      
  </>
  );
};

export default CryptoList;
