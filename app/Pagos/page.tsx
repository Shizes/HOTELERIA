"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Pagos = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");

  if (!price) {
    return <p>No se seleccionó ninguna habitación.</p>;
  }

  return (
    <div>
      <h1>Página de Pago</h1>
      <p>El monto a pagar por esta habitación es:</p>
      <h2>${price}</h2>
    </div>
  );
};

export default Pagos;
