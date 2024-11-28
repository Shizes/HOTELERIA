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
  quantity: number; // Cantidad disponible
  discount?: string; // Precio con descuento (opcional)
};

type OffersGridProps = {
  offers: Offer[];
  isLoading: boolean;
};

const OffersGrid: React.FC<OffersGridProps> = ({ offers, isLoading }) => {
  if (isLoading) return <p>Cargando ofertas...</p>;

  if (!offers || offers.length === 0) return <p>No hay ofertas disponibles</p>;

  return (
    <div className={styles["offers-grid"]}>
      {offers.map((offer) => {
        const isAvailable = offer.quantity > 0;
        return (
          <div key={offer.id} className={styles["offer-card"]}>
            <Image src={offer.avatar} alt={offer.name} width={300} height={200} />
            <h3 className={styles["offer-title"]}>{offer.name}</h3>
            <div className={styles["price-container"]}>
              {offer.discount && (
                <span className={styles["offer-discount"]} style={{ color: "#9E9E9E" }}>
                  ${offer.discount}
                </span>
              )}
              <span
                className={styles["offer-price"]}
                style={{
                  color: isAvailable ? "#333" : "#9E9E9E",
                }}
              >
                ${Number(offer.price).toFixed(2)} / noche
              </span>
            </div>
            <div className={styles["availability-container"]}>
              <span
                className={`${styles["offer-availability"]} ${
                  isAvailable ? styles["available"] : styles["unavailable"]
                }`}
              >
                {isAvailable ? "Disponible" : "Agotado"}
              </span>
              <button
                className={`${styles["cart-icon"]} ${
                  isAvailable ? "" : styles["unavailable"]
                }`}
                disabled={!isAvailable}
              >
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
      })}
    </div>
  );
};

export default OffersGrid;
