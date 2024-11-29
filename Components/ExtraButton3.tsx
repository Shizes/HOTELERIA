"use client";

import React from "react";
import Link from "next/link"; // Para navegación

const ExtraButton3: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link href="/reservas">
        <button
          className="reserve-button"
          style={{
            backgroundColor: "#D5008F",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Reservar
        </button>
      </Link>
    </div>
  );
};

export default ExtraButton3;
