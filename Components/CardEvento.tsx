import "./CardEvento.css";
import React from "react";
import Image from "next/image";
import { useState } from "react";

interface CardEventProps {
  cardEvent: {
    id: string;
    name: string;
    avatar: string;
    description: string;
  };
}

const CardEvento = ({ cardEvent }: CardEventProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="eventos-card">
      <img src={cardEvent.avatar} alt="" />
      <div className="text">
        <div className="title">
          <h3>{cardEvent.name}</h3>
        </div>
        <div className="botones">
          <button className="det"  onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Ocultar" : "Descripción"} <Image src="/img/plus.png" height={20} width={20} alt="" /> <p>DESCRIPCIÓN</p>
          </button>
          <button className="reser">Reservar</button>
        </div>
        <div className={'deplegable ${isOpen ? "show":""}'} >
          <p className="description">{cardEvent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardEvento;
