"use client";

import React from "react";
import styles from "./añadir-tarjeta.module.css";

const AddCardPage = () => {
  return (
    <div className={styles.container}>
      <h1>Mi Cartera</h1>
      <h2>✅ Añade tu tarjeta</h2>
      <form>
        <label>
          Número de la Tarjeta
          <input
            type="text"
            placeholder="Introduzca el número de tarjeta"
            maxLength={16}
          />
        </label>
        <label>
          Dueño de la Tarjeta
          <input
            type="text"
            placeholder="Introduzca el nombre en la tarjeta"
          />
        </label>
        <label>
          Fecha de Expiración
          <div>
            <input type="text" placeholder="MM" maxLength={2} />
            <span>/</span>
            <input type="text" placeholder="AA" maxLength={2} />
          </div>
          <input
            type="text"
            placeholder="CVV2"
            style={{ marginLeft: "10px", maxWidth: "50px" }}
          />
        </label>
        <label>
          <input type="checkbox" />
          Establecer como predeterminado
        </label>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};