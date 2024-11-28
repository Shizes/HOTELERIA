import "./CardSalones.css";
import React, { useState } from "react";
import Image from "next/image";

interface SalonProps {
  salon: {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
  };
}

const CardSalon = ({ salon }: SalonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={'card ${isOpen ? "open" : ""}'}>
      <div className="image-container">
        <img src={salon.image} alt={salon.name} />
        <button className="cart-button">
          <Image src="/img/compra.png" width={10} height={10} alt="" />
        </button>
      </div>

      <div className="descript">
        <p>{salon.name}</p>
        <button className="arrow" onClick={() => setIsOpen(!isOpen)}>
          <Image src={isOpen ?    "/img/image 27.png":"/img/desplegable.png"} width={10} height={10} alt="" />
        </button>
      </div>
      <div
        className={`deplegable ${isOpen ? "show" : ""}`}
        style={{
          maxHeight: isOpen ? "500px" : "0px", // Cambia dinámicamente la altura
          overflow: "hidden", // Oculta contenido extra
          transition: "max-height 0.3s ease-in-out", // Transición suave
        }}
      >
        <img src={salon.description} alt={salon.name} />
      </div>
    </div>
  );
};

export default CardSalon;
