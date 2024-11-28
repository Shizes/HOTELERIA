"use client";

import React, { useEffect, useState, useRef } from "react";
import "./Ofertas.css";
import Image from "next/image";
import { getRoomsOffers, getSuitsOffers } from "@/lib/getOffers";
import { Offer } from "@/lib/types";
import Link from "next/link";

const Ofertas = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Combina las ofertas de habitaciones y suites
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const rooms = await getRoomsOffers();
        const suits = await getSuitsOffers();
        const combinedOffers = [...rooms, ...suits];
        setOffers(combinedOffers); // Combina ambas ofertas
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, []);

  // Configura la animación automática
  useEffect(() => {
    if (offers.length > 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
      }, 3000); // Cambia cada 3 segundos
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current); // Limpia el intervalo al desmontar
      }
    };
  }, [offers]);

  return (
    <section className="offers-list">
      <h1 className="offers-title">
  <Link href="/ofertas">Ofertas Especiales</Link>
</h1>
      <p className="offers-subtitle">Mejores Ofertas de Habitaciones y Suites</p>
      <div className="carousel-container">
        {offers.map((offer, index) => (
          <div
            key={`offer-${offer.id}-${index}`} // Clave única para cada tarjeta
            className={`carousel-item ${
              index === currentIndex ? "active" : "inactive"
            }`}
          >
            <Image
              src={offer.avatar}
              alt={offer.name}
              width={300}
              height={200}
              className="offer-image"
            />
            <h2 className="offer-title">{offer.name}</h2>
            <div className="price-container">
              <span className="offer-discount">
                {offer.discount ? `$${offer.discount}` : null}
              </span>
              <span className="offer-price">${offer.price} / noche</span>
            </div>
            <div className="availability-container">
              <span
                className={`offer-availability ${
                  offer.quantity > 0 ? "available" : "unavailable"
                }`}
              >
                {offer.quantity > 0 ? "Disponible" : "Agotado"}
              </span>
              <button
                className={`cart-icon ${
                  offer.quantity > 0 ? "" : "unavailable"
                }`}
                disabled={offer.quantity === 0}
              >
                <Image
                  src={offer.car}
                  alt="Agregar al carrito"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ofertas;
