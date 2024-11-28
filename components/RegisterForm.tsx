"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el router
import { registerUser } from "@/lib/api";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // Instancia del router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setSuccess("Usuario registrado exitosamente");
      setError("");
      setFormData({ name: "", email: "", password: "" });
      router.push("/perfil"); // Redirige a la página de perfil
    } catch (error) {
      setError("Hubo un problema al registrar el usuario");
      setSuccess("");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          id="name"
          placeholder="Escribe tu nombre completo"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo o Celular</label>
        <input
          type="email"
          id="email"
          placeholder="Escribe tu correo/celular"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Escribe tu contraseña"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
