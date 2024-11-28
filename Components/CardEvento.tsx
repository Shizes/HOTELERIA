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
    <section className={`eventos-card ${isOpen ? "open" : ""}`}>
      <img src={cardEvent.avatar} alt="" />
      <div className="text">
        <div className="title">
          <h3>{cardEvent.name}</h3>
        </div>
        <div className="botones">
          <button className="det" onClick={() => setIsOpen(!isOpen)}>
            <Image src="/img/plus.png" height={20} width={20} alt="" />{" "}
            <p>{isOpen ? "OCULTAR" : "DESCRIPCIÓN"}</p>
          </button>
          <a href="../armados/page.tsx">
            {" "}
            <button className="reser">Reservar</button>
          </a>
        </div>
        <div
          className={`deplegable ${isOpen ? "show" : ""}`}
          style={{
            maxHeight: isOpen ? "500px" : "0px", // Cambia dinámicamente la altura
            overflow: "hidden", // Oculta contenido extra
            transition: "max-height 0.3s ease-in-out", // Transición suave
          }}
        >
          <p className="description">{cardEvent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardEvento;
