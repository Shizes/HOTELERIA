import React from "react";
import Image from "next/image";
import styles from "./OffersGrid.module.css";

type Offer = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  car: string;
  type: string;
};

type OffersGridProps = {
  offers: Offer[];
  isLoading: boolean;
};

const OffersGrid: React.FC<OffersGridProps> = ({ offers, isLoading }) => {
  if (isLoading) return <p>Cargando ofertas...</p>;

  if (offers.length === 0) return <p>No hay ofertas disponibles</p>;

  return (
    <div className={styles["offers-grid"]}>
      {offers.map((offer) => (
        <div key={offer.id} className={styles["offer-card"]}>
          <Image src={offer.avatar} alt={offer.name} width={300} height={200} />
          <h3 className={styles["offer-title"]}>{offer.name}</h3>
          <p className={styles["offer-price"]}>${Number(offer.price).toFixed(2)}</p>
          <p className={styles["offer-availability"]}>Disponible</p>
          <button className={styles["add-to-cart"]}>
            Agregar
            <Image src={offer.car} alt="Carrito" width={24} height={24} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default OffersGrid;
