import React from "react";
import Image from "next/image";
import styles from "./StandardCard.module.css";

type Offer = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  car: string; // Ícono del carrito proporcionado en la API
  quantity: number;
  discount?: string;
};

type CardProps = {
  offer: Offer;
};

const StandardCard: React.FC<CardProps> = ({ offer }) => {
  const isAvailable = offer.quantity > 0;

  return (
    <div className={styles["standard-card"]}>
      <Image
        src={offer.avatar}
        alt={offer.name}
        width={300}
        height={200}
        className={styles["standard-card-image"]}
      />
      <h3 className={styles["standard-card-title"]}>{offer.name}</h3>
      <div className={styles["price-container"]}>
        {offer.discount && offer.price !== offer.discount && (
          <span className={styles["discount"]}>${offer.discount}</span>
        )}
        <span className={styles["price"]}>${Number(offer.price).toFixed(2)} / noche</span>
      </div>
      <div className={styles["availability-container"]}>
        <span
          className={isAvailable ? styles["available"] : styles["unavailable"]}
        >
          {isAvailable ? "Disponible" : "Agotado"}
        </span>
        <button className={styles["cart-icon"]} disabled={!isAvailable}>
          <Image
            src={offer.car}
            alt="Carrito"
            width={32}
            height={32}
            style={{
              filter: isAvailable ? "none" : "grayscale(100%)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default StandardCard;
