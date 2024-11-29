"use client";

import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js
import RoomCard from "./RoomCard";
import "./RoomSection.css";

interface RoomSectionProps {
  title: string;
  rooms: {
    image: string;
    name: string;
    price: string;
    discount?: string;
    quantity: number;
    car: string; // Este se mapea como `carIcon`
  }[];
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms }) => {
  const scrollContainer = React.useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="room-section">
      <div className="room-section-header">
        <h2 className="room-section-title">{title}</h2>
        {title === "Recomendados" && (
          <div className="room-section-buttons">
            <button className="nav-button" onClick={scrollLeft}>
              <Image src="/icons/Left arrow.svg" alt="Izquierda" width={20} height={20} />
            </button>
            <div style={{ width: "10px" }} /> {/* Espaciador entre las flechas */}
            <button className="nav-button" onClick={scrollRight}>
              <Image src="/icons/Right arrow.svg" alt="Derecha" width={20} height={20} />
            </button>
          </div>
        )}
      </div>
      <div
        ref={title === "Recomendados" ? scrollContainer : null}
        className={`room-section-grid ${title === "Recomendados" ? "room-section-scroll" : ""}`}
      >
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            name={room.name}
            price={room.price}
            discount={room.discount}
            isAvailable={room.quantity > 0} // Determina disponibilidad
            carIcon={room.car}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
