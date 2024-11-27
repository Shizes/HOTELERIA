"use client";

import React, { useState } from "react";
import { loginUser } from "@/lib/api"; // Importa la función de la API
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para errores
  const [success, setSuccess] = useState(""); // Estado para mensajes de éxito

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página
    try {
      const user = await loginUser(email, password); // Envía las credenciales a la API
      setSuccess(`Bienvenido, ${user.name}`); // Mensaje de éxito
      setError(""); // Limpia errores previos
    } catch (error) {
      setError("Usuario o contraseña incorrectos"); // Muestra el error
      setSuccess(""); // Limpia mensajes de éxito previos
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email">Correo/Celular</label>
        <input
          type="text"
          id="email"
          placeholder="Escribe tu correo/celular"
          className="input-field"
          value={email} // Sincroniza con el estado
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escribe tu contraseña"
          className="input-field"
          value={password} // Sincroniza con el estado
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
          required
        />
        <a href="#" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      {error && <p className="error-text">{error}</p>} {/* Mensaje de error */}
      {success && <p className="success-text">{success}</p>} {/* Mensaje de éxito */}
      <button type="submit" className="submit-button">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
