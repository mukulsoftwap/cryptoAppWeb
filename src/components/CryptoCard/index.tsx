import React from 'react';
import { Crypto } from '../../types/crypto';
import './style.css'

interface Props {
  coin: Crypto;
  isFavorite?: boolean;
  toggleFavorite: (id: string) => void;
  onCardClick: (id: string) => void;
  selected: boolean;
}

const CryptoCard: React.FC<Props> = ({ coin, isFavorite, toggleFavorite, onCardClick, selected }) => {

  const onCardClickHandler = ()=>{
    onCardClick(coin.id);
  }

  const onFavoriteClick = (e:any)=>{
    e.stopPropagation();
    toggleFavorite(coin.id);
  }

  return (
    <div className={`${selected && 'selected'} crypto-card`} onClick={onCardClickHandler}>
      <img src={coin.image} alt={coin.name} width={30} />
      <div>
        <strong>{coin.name} ({coin.symbol.toUpperCase()})</strong>
        <p>${coin.current_price.toLocaleString()}</p>
      </div>
      <button onClick={onFavoriteClick}>
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default CryptoCard;
