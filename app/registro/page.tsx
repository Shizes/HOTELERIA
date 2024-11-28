"use client";

import React from "react";
import Portada from "@/Components/portada"; // Reutilizando portada
import RegisterForm from "@/Components/RegisterForm"; // Nuevo componente
import QuickAccess from "@/Components/QuickAccess"; // Reutilizando opciones rápidas

const Registro = () => {
  return (
    <div>
      <Portada />
      <main className="registro-main">
        <RegisterForm />
        <p className="alternative-text">Otra forma rápida de crear cuenta</p>
        <QuickAccess />
        <p className="login-link">
          ¿Ya tienes una cuenta?{" "}
          <a href="/iniciosesion" className="link">
            Inicia Sesión
          </a>
        </p>
      </main>
    </div>
  );
};

export default Registro;
