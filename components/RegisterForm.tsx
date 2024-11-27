"use client";

import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="input-group">
        <label htmlFor="nombre">Nombre Completo</label>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre completo"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo o Celular</label>
        <input
          type="email"
          id="email"
          placeholder="Escribe tu correo/celular"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escribe tu contraseña"
          required
        />
        <p className="helper-text">Debe tener más de 8 caracteres</p>
      </div>
      <div className="terms">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">
          Al crear una cuenta, aceptas los{" "}
          <a href="/terminos" className="link">
            Términos y Condiciones
          </a>{" "}
          y nuestra{" "}
          <a href="/privacidad" className="link">
            Política de Privacidad
          </a>.
        </label>
      </div>
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
