"use client";

import React from 'react';
import RoomCard from './RoomCard';
import './RoomSection.css';

interface RoomSectionProps {
  title: string;
  rooms: { image: string; name: string; price: string }[];
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms }) => {
  const scrollContainer = React.useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="room-section">
      <div className="room-section-header">
        <h2 className="room-section-title">{title}</h2>
        {/* Mostrar los botones de scroll solo si es la sección "Recomendados" */}
        {title === "Recomendados" && (
          <div className="room-section-buttons">
            <button className="nav-button" onClick={scrollLeft}>
              <img src="/icons/Left arrow.svg" alt="Izquierda" />
            </button>
            <button className="nav-button" onClick={scrollRight}>
              <img src="/icons/Right arrow.svg" alt="Derecha" />
            </button>
          </div>
        )}
      </div>
      {/* Aplicar scroll horizontal solo en la sección "Recomendados" */}
      <div
        ref={title === "Recomendados" ? scrollContainer : null}
        className={`room-section-grid ${
          title === "Recomendados" ? "room-section-scroll" : ""
        }`}
      >
        {rooms.map((room, index) => (
          <RoomCard key={index} image={room.image} name={room.name} price={room.price} />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
