"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import PersonSelector from "@/Components/PersonSelector";
import Calendar from "@/Components/calendar";
import RoomSection from "@/Components/RoomSection";
import ExtraButton from "@/Components/ExtraButton";
import "./page.css";

const Habitaciones = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isStartDateSelectorOpen, setIsStartDateSelectorOpen] = useState(false);
  const [isEndDateSelectorOpen, setIsEndDateSelectorOpen] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const recommendedRooms = [
    { image: "/img/departamento_simple.jpg", name: "Departamento Simple", price: "$80" },
    { image: "/img/habitacion_doble.jpg", name: "Habitación Doble/Matrimonial", price: "$120" },
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

  return (
    <div>
      <Navbar />

      <main>
        {/* Controles de reserva */}
        <div className="reservation-controls">
          <div className="control" onClick={() => setIsPersonSelectorOpen(true)}>
            <img src="/icons/user.svg" alt="Personas" className="control-icon" />
            <span>Personas:</span> {personCount}
          </div>
          <div className="control" onClick={() => setIsStartDateSelectorOpen(true)}>
            <img src="/icons/calendar.svg" alt="Inicio" className="control-icon" />
            <span>Inicio:</span> {startDate ? startDate.toLocaleDateString() : "Seleccionar"}
          </div>
          <div className="control" onClick={() => setIsEndDateSelectorOpen(true)}>
            <img src="/icons/calendar.svg" alt="Salida" className="control-icon" />
            <span>Salida:</span> {endDate ? endDate.toLocaleDateString() : "Seleccionar"}
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
          onClose={() => setIsPersonSelectorOpen(false)}
          count={personCount}
          setCount={setPersonCount}
        />

        {/* Modal para la fecha de llegada */}
        {isStartDateSelectorOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={() => setIsStartDateSelectorOpen(false)}>X</button>
              <h3>Seleccionar fecha de llegada</h3>
              <Calendar
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  if (endDate && date && date > endDate) {
                    setEndDate(undefined); // Resetea la fecha de salida si es inválida
                  }
                  setIsStartDateSelectorOpen(false);
                }}
                fromDate={new Date()} // Restringe fechas anteriores al día actual
              />
              <button className="confirm-button" onClick={() => setIsStartDateSelectorOpen(false)}>
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* Modal para la fecha de salida */}
        {isEndDateSelectorOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={() => setIsEndDateSelectorOpen(false)}>X</button>
              <h3>Seleccionar fecha de salida</h3>
              <Calendar
                selected={endDate}
                onSelect={(date) => {
                  if (date && startDate && date < startDate) {
                    alert("La fecha de salida debe ser posterior a la de llegada.");
                    return;
                  }
                  setEndDate(date);
                  setIsEndDateSelectorOpen(false);
                }}
                fromDate={startDate || new Date()} // Fecha mínima es la de llegada
              />
              <button className="confirm-button" onClick={() => setIsEndDateSelectorOpen(false)}>
                Confirmar
              </button>
            </div>
          </div>
        )}
      </main>
      <ExtraButton />
      <Footer />
    </div>
  );
};

export default Habitaciones;
