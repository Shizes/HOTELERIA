import React from 'react';
import './RoomCard.css';

interface RoomCardProps {
  image: string;
  name: string;
  price: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ image, name, price }) => {
  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-card-image" />
      <h3 className="room-card-name">{name}</h3>
      <p className="room-card-price">{price} / noche</p>
      <button className="room-card-button">🛒</button>
    </div>
  );
};

export default RoomCard;
