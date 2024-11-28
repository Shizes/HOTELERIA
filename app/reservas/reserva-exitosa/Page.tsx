"use client";
import React from "react";

const ReservationSuccessPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>✅</h1>
      <h2>Su reserva fue realizada con éxito.</h2>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default ReservationSuccessPage;
