"use client";

import React from "react";
import Portada from "@/components/portada"; // Reutilizando portada
import RegisterForm from "@/components/RegisterForm"; // Nuevo componente
import QuickAccess from "@/components/QuickAccess"; // Reutilizando opciones rápidas

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
