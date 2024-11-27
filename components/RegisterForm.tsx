"use client";

import React, { useState } from "react";
import { registerUser } from "@/lib/api"; 
import "./RegisterForm.css";

const RegisterForm = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "", // Clave correcta para el nombre
    email: "",
    password: "",
  });

  // Estado para manejar errores y mensajes de éxito
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento por defecto
    try {
      await registerUser(formData); // Envía los datos a la API
      setSuccess("Usuario registrado exitosamente");
      setError(""); // Limpia errores previos
      setFormData({ name: "", email: "", password: "" }); // Limpia el formulario
    } catch (error) {
      setError("Hubo un problema al registrar el usuario");
      setSuccess(""); // Limpia mensajes de éxito previos
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          id="name" // Cambiado de "nombre" a "name" para que coincida con el estado
          placeholder="Escribe tu nombre completo"
          value={formData.name} // Sincroniza con el estado
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo o Celular</label>
        <input
          type="email"
          id="email" // ID correcto
          placeholder="Escribe tu correo/celular"
          value={formData.email} // Sincroniza con el estado
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password" // ID correcto
          placeholder="Escribe tu contraseña"
          value={formData.password} // Sincroniza con el estado
          onChange={handleChange}
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
      {error && <p className="error-text">{error}</p>} {/* Mensaje de error */}
      {success && <p className="success-text">{success}</p>} {/* Mensaje de éxito */}
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
