import "./CardEvento.css";
import React from "react";
import Image from "next/image";

interface CardEventProps {
  cardEvent: {
    id: string;
    name: string;
    avatar: string;
    description: string;
    isOpen: boolean;
  };
}

const CardEvento = ({ cardEvent }: CardEventProps) => {
  return (
    <section className="eventos-card">
      <div className="image-container">
        <img src={cardEvent.avatar} alt="" />
        <button className="cart-button">
          <Image src="/img/compra.png" height={20} width={20} alt="" />
    </button>
      </div>
      <div className="text">
        <div className="title">
          <h3>{cardEvent.name}</h3>
        </div>
        <div className="botones">
          <button className="det">
            <Image src="/img/plus.png" height={20} width={20} alt="" />{" "}
            <p>DESCRIPCIÓN</p>
          </button>
          <a href="../armados/page.tsx">
            {" "}
            <button className="reser">Reservar</button>
          </a>
        </div>
        <div className="deplegable">
          <p className="description">{cardEvent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardEvento;
