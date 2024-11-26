import React from 'react';
import "./CardSalon.css";

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
            <h3>{salon.name}</h3> 
            <button><img src="/icon/botnondesplegable.svg" alt="" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSalon