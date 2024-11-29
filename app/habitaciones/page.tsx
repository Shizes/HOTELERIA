"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import PersonSelector from "@/Components/PersonSelector";
import Calendar from "@/Components/calendar";
import RoomSection from "@/Components/RoomSection";
import ExtraButton from "@/Components/ExtraButton";
import OffersLoaderSuites from "@/Components/OffersLoaderSuites"; // Componente para cargar las suites dinámicamente
import "./page.css";
import { RoomApiData } from "@/lib/types";

const SuitesEjecutivas = () => {
  const [isPersonSelectorOpen, setIsPersonSelectorOpen] = useState(false);
  const [isStartDateSelectorOpen, setIsStartDateSelectorOpen] = useState(false);
  const [isEndDateSelectorOpen, setIsEndDateSelectorOpen] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [recommendedSuites, setRecommendedSuites] = useState<
    { image: string; name: string; price: string; discount?: string; quantity: number; car: string }[]
  >([]);

  // Fetch de las suites ejecutivas
  useEffect(() => {
    const fetchSuites = async () => {
      try {
        const response = await fetch("https://6748c0115801f51535920c96.mockapi.io/Suits");
        const data: RoomApiData[] = await response.json();

        // Filtrar suites con descuento (donde el precio y el descuento no son iguales)
        const suitesWithDiscount = data.filter(
          (suite) => suite.discount && suite.price !== suite.discount
        );

        // Formatear suites para `RoomSection`
        setRecommendedSuites(
          suitesWithDiscount.map((suite) => ({
            image: suite.avatar,
            name: suite.name,
            price: suite.price,
            discount: suite.discount,
            quantity: Number(suite.quantity),
            car: suite.car,
          }))
        );
      } catch (error) {
        console.error("Error fetching suites:", error);
      }
    };

    fetchSuites();
  }, []);

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

        {/* Sección de Recomendados */}
        <RoomSection title="Recomendados" rooms={recommendedSuites} />

        {/* Sección de Todas las Suites Disponibles */}
        <section>
          <h2 className="habitaciones-title">Todas las Suites Disponibles</h2>
          <OffersLoaderSuites /> {/* Carga las suites directamente desde la API */}
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
              <button className="modal-close" onClick={() => setIsStartDateSelectorOpen(false)}>X</button>
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
            </div>
          </div>
        )}
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
                fromDate={startDate || new Date()}
              />
            </div>
          </div>
        )}
      </main>
      <ExtraButton />

      <Footer />
    </div>
  );
};

export default SuitesEjecutivas;
