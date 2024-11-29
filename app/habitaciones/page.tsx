"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import PersonSelector from "@/Components/PersonSelector";
import Calendar from "@/Components/calendar";
import RoomSection from "@/Components/RoomSection";
import ExtraButton from "@/Components/ExtraButton";
import OffersLoaderHabitaciones from "@/Components/OffersLoaderHabitaciones";
import Image from "next/image"; // Importa Image
import "./page.css";
import { RoomApiData } from "@/lib/types";

const Habitaciones = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isStartDateSelectorOpen, setIsStartDateSelectorOpen] = useState(false);
  const [isEndDateSelectorOpen, setIsEndDateSelectorOpen] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [recommendedRooms, setRecommendedRooms] = useState<RoomApiData[]>([]);

  // Fetch de las habitaciones con lógica de ofertas
  useEffect(() => {
    const fetchRecommendedRooms = async () => {
      try {
        const response = await fetch("https://6748c0115801f51535920c96.mockapi.io/Rooms/");
        const data: RoomApiData[] = await response.json();

        // Filtrar habitaciones con ofertas (precio diferente al descuento)
        const roomsWithDiscount = data.filter((room) => room.price !== room.discount);

        setRecommendedRooms(roomsWithDiscount);
      } catch (error) {
        console.error("Error fetching recommended rooms:", error);
      }
    };

    fetchRecommendedRooms();
  }, []);

  // Filtrar habitaciones por capacidad
  const filteredRooms = recommendedRooms.filter(
    (room) => Number(room.capacity) >= personCount
  );

  return (
    <div>
      <Navbar />

      <main>
        {/* Controles de reserva */}
        <div className="reservation-controls">
          <div className="control" onClick={() => setIsPersonSelectorOpen(true)}>
            <Image
              src="/icons/user.svg"
              alt="Personas"
              width={24}
              height={24}
              className="control-icon"
            />
            <span>Personas:</span> {personCount}
          </div>
          <div className="control" onClick={() => setIsStartDateSelectorOpen(true)}>
            <Image
              src="/icons/calendar.svg"
              alt="Inicio"
              width={24}
              height={24}
              className="control-icon"
            />
            <span>Inicio:</span> {startDate ? startDate.toLocaleDateString() : "Seleccionar"}
          </div>
          <div className="control" onClick={() => setIsEndDateSelectorOpen(true)}>
            <Image
              src="/icons/calendar.svg"
              alt="Salida"
              width={24}
              height={24}
              className="control-icon"
            />
            <span>Salida:</span> {endDate ? endDate.toLocaleDateString() : "Seleccionar"}
          </div>
          <Link href="/reservas">
            <button className="reserve-button">Reservar</button>
          </Link>
        </div>

        {/* Sección de habitaciones recomendadas con ofertas */}
        <RoomSection
          title="Recomendados"
          rooms={filteredRooms.map((room) => ({
            image: room.avatar,
            name: room.name,
            price: room.price,
            discount:
              room.price !== room.discount ? room.discount : undefined, // Mostrar descuento solo si es diferente al precio
            quantity: Number(room.quantity),
            car: room.car,
            capacity: room.capacity, // Asegurarse de pasar capacidad
          }))}
        />

        {/* Sección de todos los paquetes */}
        <section>
          <h2 className="habitaciones-title">Todos los Paquetes</h2>
          <OffersLoaderHabitaciones personCount={personCount} /> {/* Pasamos personCount */}
        </section>

        {/* Modales */}
        <PersonSelector
          isOpen={isPersonSelectorOpen}
          onClose={() => setIsPersonSelectorOpen(false)}
          count={personCount}
          setCount={setPersonCount}
        />
        {isStartDateSelectorOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={() => setIsStartDateSelectorOpen(false)}
              >
                X
              </button>
              <h3>Seleccionar fecha de llegada</h3>
              <Calendar
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  if (endDate && date && date > endDate) {
                    setEndDate(undefined);
                  }
                  setIsStartDateSelectorOpen(false);
                }}
                fromDate={new Date()}
              />
              <button
                className="confirm-button"
                onClick={() => setIsStartDateSelectorOpen(false)}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
        {isEndDateSelectorOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={() => setIsEndDateSelectorOpen(false)}
              >
                X
              </button>
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
                fromDate={startDate || new Date()}
              />
              <button
                className="confirm-button"
                onClick={() => setIsEndDateSelectorOpen(false)}
              >
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
