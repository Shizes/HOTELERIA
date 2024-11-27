import './CardSalones.css';
import React from 'react';

interface SalonProps {
  salon: {
    id: string;
    name: string;
    image: string;
  };
}

const CardSalon = ({ salon }: SalonProps) => {
  return (
    <section>
      <div className='mosaico'>
        <div className='card'>
          <img src={salon.image} alt={salon.name} />
          <div className='descript'>
            <p>{salon.name}</p> 
            <button><img src="/icon/botnondesplegable.svg" alt="" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSalon