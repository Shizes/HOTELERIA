"use client";
import React from "react";

const WalletPage = () => {
  const cards = [
    {
      id: 1,
      name: "CARDHOLDER NAME",
      number: "5282 3456 7890 1289",
      expiry: "09/25",
      cvv: "123",
    },
    // Agrega más tarjetas si es necesario
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi Cartera</h1>
      <div style={{ marginBottom: "20px" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <h2>{card.name}</h2>
            <p>{card.number}</p>
            <p>Vence: {card.expiry}</p>
            <p>CVV: {card.cvv}</p>
          </div>
        ))}
      </div>
      <button>+ Añadir una Tarjeta</button>
    </div>
  );
};

export default WalletPage;
