"use client";

import React from "react";
import "./QuickAccess.css";
import { signIn } from "next-auth/react";

const QuickAccess = () => {
  return (
    <div className="quick-access">
      <p>Acceso rápido con</p>
      <div className="buttons">
        {/* Botón para Apple */}
        <button
          onClick={() => signIn("apple")}
          aria-label="Iniciar sesión con Apple"
          className="icon-button"
        >
          <img src="/icons/apple.svg" alt="Apple" />
        </button>

        {/* Botón para Google */}
        <button
          onClick={() => signIn("google")}
          aria-label="Iniciar sesión con Google"
          className="icon-button"
        >
          <img src="/icons/google.svg" alt="Google" />
        </button>

        {/* Botón para Facebook */}
        <button
          onClick={() => signIn("facebook")}
          aria-label="Iniciar sesión con Facebook"
          className="icon-button"
        >
          <img src="/icons/facebook.svg" alt="Facebook" />
        </button>
      </div>
    </div>
  );
};

export default QuickAccess;
