import React from 'react';
import RoomCard from './RoomCard';
import './RoomSection.css'; // Archivo para estilos de esta sección

interface RoomSectionProps {
  title: string;
  rooms: { image: string; name: string; price: string }[];
}

const RoomSection: React.FC<RoomSectionProps> = ({ title, rooms }) => {
  return (
    <section className="room-section">
      <h2 className="room-section-title">{title}</h2>
      <div className="room-section-grid">
        {rooms.map((room, index) => (
          <RoomCard key={index} image={room.image} name={room.name} price={room.price} />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
