"use client";

import React, { useState } from "react";
import "./ProfileForm.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    birthday: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del perfil actualizados:", formData);
  };

  return (
    <div className="profile-container">
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Tu Nombre Completo</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Usuario"
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthday">Cumpleaños</label>
          <input
            type="date"
            id="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Número Celular</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número Celular"
          />
        </div>
        <button type="submit" className="submit-button">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
