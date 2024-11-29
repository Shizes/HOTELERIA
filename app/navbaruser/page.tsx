"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import "./NavbarUser.css";

const NavbarUser = () => {
  const router = useRouter(); // Instancia del hook useRouter

  const handleBack = () => {
    router.back(); // Vuelve a la página anterior en el historial
  };

  return (
    <div className="navbar-container">
      {/* Encabezado con botón "Volver" */}
      <div className="navbar-header">
        <button onClick={handleBack} className="back-button">
          <img src="/icons/sing-down.svg" alt="Volver" className="back-icon" />
          <span className="back-text">Volver</span>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="content-wrapper">
        {/* Logo del hotel */}
        <div className="logo-section">
          <img
            src="/img/logo_hotel_calacoto.jpg"
            alt="Calacoto Hotel"
            className="hotel-logo"
          />
        </div>

        {/* Botones */}
        <div className="buttons-section">
          <a href="/iniciosesion" className="btn btn-login">Iniciar Sesión</a>
          <div className="divider">o</div>
          <a href="/registro" className="btn btn-register">Registrarse</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
