"use client";
import React from "react";

const ReservationCancelPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>❌</h1>
      <h2>Su reserva ha sido cancelada exitosamente.</h2>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#FF0000",
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

export default ReservationCancelPage;
