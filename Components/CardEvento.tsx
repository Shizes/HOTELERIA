import "./CardEvento.css";
import React from 'react'

interface CardEventProps {
  cardEvent: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const CardEvento = ({ cardEvent }: CardEventProps) => {
  return (
    <section className="eventos">
      <div className="eventos-card">
        <img src={cardEvent.image} alt="" />
        <div className="text">
          <div className="title">
            <h3>{cardEvent.name}</h3>
          </div>
          <div>
            <button>Reservar</button>
            <button>
              <img src="/icon/plus_mas.png" alt="mas" /> Descripcion
            </button>
          </div>
          <div className="deplegable"><p>{cardEvent.description}</p></div>
        </div>
      </div>
    </section>
  );
};

export default CardEvento;