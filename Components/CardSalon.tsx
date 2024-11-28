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
      <img src={salon.image} alt={salon.name} />
      <div className="descript">
        <p>{salon.name}</p>
        <button>
          <Image src="/img/desplegable.png" width={10} height={10} alt="" />
        </button>
      </div>
      <div className="descripcion">
        <img src={salon.description} alt={salon.name} />
      </div>
    </div>
  );
};

export default CardSalon;
