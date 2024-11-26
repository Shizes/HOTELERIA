"use client";

import React, { useState } from "react";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import RoomSection from "@/Components/RoomSection";
import PersonSelector from "@/Components/PersonSelector";
import DateSelector from "@/Components/DateSelector";

const habitaciones = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  const openPersonSelector = () => setIsPersonSelectorOpen(true);
  const closePersonSelector = () => setIsPersonSelectorOpen(false);

  const openDateSelector = () => setIsDateSelectorOpen(true);
  const closeDateSelector = () => setIsDateSelectorOpen(false);

  return (
    <div>
      <Navbar />
      <main>
        <div className="reservation-controls">
          <div className="control" onClick={openPersonSelector}>
            <span>Personas: </span>01
          </div>
          <div className="control" onClick={openDateSelector}>
            <span>Fechas: </span>09 oct 2024 - 13 oct 2024
          </div>
          <button>Reservas</button>
        </div>

        <RoomSection title="Recomendados" rooms={[]} />
        <RoomSection title="Todos los Paquetes" rooms={[]} />

        <PersonSelector isOpen={isPersonSelectorOpen} onClose={closePersonSelector} />
        <DateSelector isOpen={isDateSelectorOpen} onClose={closeDateSelector} />
      </main>
      <Footer />
    </div>
  );
};

export default habitaciones;

