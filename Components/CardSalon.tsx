import "./CardSalones.css";
import React from "react";
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
  return (
    <div className="card">
      <div className="image-container">
        <img src={salon.image} alt={salon.name} />
      </div>

      <div className="descript">
        <p>{salon.name}</p>
      </div>
      <div className="descripcion">
        <img src={salon.description} alt={salon.name} />
      </div>
    </div>
  );
};

export default CardSalon;
