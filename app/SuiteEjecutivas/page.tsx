"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import PersonSelector from "@/Components/PersonSelector";
import DateSelector from "@/Components/DateSelector";
import RoomSection from "@/Components/RoomSection";
import ExtraButton2 from "@/Components/ExtraButton2";
import "./page.css";
const suitesejecutivas = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  // Datos de ejemplo para habitaciones
  const recommendedRooms = [
    {image: "/img/suite_ejecutiva_estandar.jpg", name: "Suite Ejecutiva Estandar", price: "$120" },
    {image: "/img/suite_ejecutiva_premium.jpg", name: "Suite Ejecutiva Premium", price: "$180" },
  ];
  const popularRooms = [
    {image: "/img/suite_ejecutiva_deluxe.jpg", name: "Suite Ejecutiva Deluxe", price: "$96" },
    {image: "/img/suite_ejecutiva_business.jpg", name: "Suite Ejecutiva Business", price: "$120"},

  ]

  const allRooms = [
    {image: "/img/suite_ejecutiva_estandar.jpg", name: "Suite Ejecutiva Estandar", price: "$120" },
    {image: "/img/suite_ejecutiva_premium.jpg", name: "Suite Ejecutiva Premium", price: "$180" },
    { image: "/img/suite_ejecutiva_deluxe.jpg", name: "Suite Ejecutiva Deluxe", price: "$96" },
    { image: "/img/suite_ejecutiva_business.jpg", name: "Suite Ejecutiva Business", price: "$120"},
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
      <RoomSection title="Populares" rooms={popularRooms}/>
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
    <ExtraButton2/>

    {/* Pie de página */}
    <Footer />
  </div>
  )
}

export default suitesejecutivas