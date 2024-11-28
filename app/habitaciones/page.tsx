"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import PersonSelector from "@/Components/PersonSelector";
import DateSelector from "@/Components/DateSelector";
import RoomSection from "@/Components/RoomSection";
import ExtraButton from "@/Components/ExtraButton";
import "./page.css";

const Habitaciones = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  // Datos de ejemplo para habitaciones
  const recommendedRooms = [
    { image: "/img/departamento_simple.jpg", name: "Departamento Simple", price: "$80" },
    {image: "/img/habitacion_doble.jpg", name: "Habitación Doble/Matrimonial", price: "$120" },
    { image: "/img/habitacion_triple.jpg", name: "Habitación Triple", price: "$110" },
    { image: "/img/departamento_familiar.jpg", name: "Departamento Familiar", price: "$125" },
    { image: "/img/departamento_doble.jpg", name: "Departamento Doble", price: "$120" },
  ];

  const allRooms = [
    { image: "/img/habitacion_simple.jpg", name: "Habitación Simple", price: "$80" },
    { image: "/img/habitacion_doble.jpg", name: "Habitación Doble/Matrimonial", price: "$120" },
    { image: "/img/habitacion_triple.jpg", name: "Habitación Triple", price: "$110" },
    { image: "/img/departamento_familiar.jpg", name: "Departamento Familiar", price: "$125" },
    { image: "/img/departamento_simple.jpg", name: "Departamento Simple", price: "$110" },
    { image: "/img/departamento_doble.jpg", name: "Departamento Doble", price: "$120" },
  ];

  // Manejo de apertura y cierre de los modales
  const openPersonSelector = () => setIsPersonSelectorOpen(true);
  const closePersonSelector = () => setIsPersonSelectorOpen(false);
  const openDateSelector = () => setIsDateSelectorOpen(true);
  const closeDateSelector = () => setIsDateSelectorOpen(false);

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      <main>
        {/* Controles de reserva */}
        <div className="reservation-controls">
          <div className="control" onClick={openPersonSelector}>
            <img
              src="/icons/user.svg"
              alt="Personas"
              className="control-icon"
            />
            <span>Personas:</span> 01
          </div>
          <div className="control" onClick={openDateSelector}>
            <img
              src="/icons/calendar.svg"
              alt="Fechas"
              className="control-icon"
            />
            <span>Inicio:</span> 09 oct 2024
          </div>
          <div className="control">
            <img
              src="/icons/calendar.svg"
              alt="Fechas"
              className="control-icon"
            />
            <span>Salida:</span> 13 oct 2024
          </div>
          <Link href="/reservas">
            <button className="reserve-button">Reservas</button>
          </Link>
        </div>

        {/* Secciones de habitaciones */}
        <RoomSection title="Recomendados" rooms={recommendedRooms} />
        <RoomSection title="Todos los Paquetes" rooms={allRooms} />

        {/* Modales */}
        <PersonSelector
          isOpen={isPersonSelectorOpen}
          onClose={closePersonSelector}
        />
        <DateSelector
          isOpen={isDateSelectorOpen}
          onClose={closeDateSelector}
        />
      </main>
      <ExtraButton />

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Habitaciones;
