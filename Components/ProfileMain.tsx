"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./ProfileMain.css";

const ProfileMain = ({ user }: { user: { name: string; username: string } }) => {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/perfil/editar"); // Cambia esto según la ruta del formulario de edición
  };

  return (
    <div className="profile-main-container">
      <button onClick={() => router.back()} className="back-button">Volver</button>
      <h1>{user.name}</h1>
      <p>@{user.username}</p>
      <button onClick={handleEditProfile} className="edit-button">
        Editar
      </button>
      <div className="profile-options">
        <button>Mi cuenta</button>
        <button>Notificaciones</button>
        <button>Reservas</button>
        <button>Cartera</button>
        <button>Asistente</button>
      </div>
    </div>
  );
};

export default ProfileMain;
