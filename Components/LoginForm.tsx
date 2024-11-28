"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el router
import { loginUser } from "@/lib/api";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // Instancia del router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      setSuccess(`Bienvenido, ${user.name}`);
      setError("");
      router.push("/principal"); // Redirige a la página principal
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
      setSuccess("");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
      <button type="submit" className="submit-button">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
