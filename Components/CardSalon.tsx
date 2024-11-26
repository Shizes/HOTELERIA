import salones from '@/app/salones/page';
import React from 'react'

interface SalonProps {
  Salon: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const CardSalon = () => {
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