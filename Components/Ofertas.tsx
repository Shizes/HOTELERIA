import React from "react";
import "./Ofertas.css";

const offers = [
  {
    id: "1",
    name: "Habitación Simple",
    image: "/img/rooms_principal.jpg",
    oldPrice: 120,
    newPrice: 80,
    availability: "Disponible",
  },
  {
    id: "2",
    name: "Suites Ejecutivas",
    image: "/img/oferts_principal.jpg",
    oldPrice: 200,
    newPrice: 125,
    availability: "Agotado",
  },
];

const Ofertas = () => {
  return (
    <section className="offers-list">
      <h1 className="offers-title">Ofertas Especiales</h1>
      <p className="offers-subtitle">Mejores Ofertas del Mes</p>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-item" key={offer.id}>
            <img src={offer.image} alt={offer.name} className="offer-image" />
            <div className="offer-details">
              <h2 className="offer-name">{offer.name}</h2>
              <div className="offer-prices">
                <span className="old-price">${offer.oldPrice}</span>
                <span className="new-price">${offer.newPrice} / noche</span>
              </div>
              <div className="offer-footer">
                <span
                  className={`offer-availability ${
                    offer.availability === "Disponible" ? "available" : "unavailable"
                  }`}
                >
                  {offer.availability}
                </span>
                <button className="offer-button">
                  <img src="/assets/cart-icon.svg" alt="Agregar al carrito" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ofertas;
