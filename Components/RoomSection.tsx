import React from 'react';
import RoomCard from './RoomCard';
import './RoomSection.css';

interface RoomSectionProps {
  title: string;
  rooms: { image: string; name: string; price: string }[];
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms }) => {
  return (
    <section className="room-section">
      <div className="room-section-header">
        <h2 className="room-section-title">{title}</h2>
        {title === "Recomendados" && (
          <div className="room-section-buttons">
            <button className="nav-button">
              <img src="/icons/Left arrow.svg" alt="Izquierda" />
            </button>
            <button className="nav-button">
              <img src="/icons/Right arrow.svg" alt="Derecha" />
            </button>
          </div>
        )}
      </div>
      <div className="room-section-grid">
        {rooms.map((room, index) => (
          <RoomCard key={index} image={room.image} name={room.name} price={room.price} />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
