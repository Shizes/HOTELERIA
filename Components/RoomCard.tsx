"use client";

import React from "react";
import Image from "next/image";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  image: string;
  name: string;
  price: string;
  discount?: string;
  isAvailable: boolean;
  carIcon: string;
  capacity: string; // Incluimos capacidad
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  name,
  price,
  discount,
  isAvailable,
  carIcon,
  capacity,
}) => {
  return (
    <div className={styles["room-card"]}>
      <Image src={image} alt={name} width={300} height={200} />
      <h3 className={styles["room-card-title"]}>{name}</h3>
      <h4 className={styles["room-card-capacity"]}>Capacidad: {capacity} personas</h4>
      <div className={styles["price-container"]}>
        {discount && <span className={styles["room-card-discount"]}>${Number(discount).toFixed(2)}</span>}
        <span
          className={`${styles["room-card-price"]} ${
            !isAvailable ? styles["unavailable-price"] : ""
          }`}
        >
          ${Number(price).toFixed(2)} / noche
        </span>
      </div>
      <div className={styles["availability-container"]}>
        <span
          className={`${styles["room-card-availability"]} ${
            isAvailable ? styles["available"] : styles["unavailable"]
          }`}
        >
          {isAvailable ? "Disponible" : "Agotado"}
        </span>
        <button
          className={styles["cart-button"]}
          disabled={!isAvailable}
          style={{ filter: isAvailable ? "none" : "grayscale(100%)" }}
        >
          <Image src={carIcon} alt="Carrito" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
