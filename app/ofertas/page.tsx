"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import OffersGrid from "@/Components/OffersGrid";
import SearchBar from "@/Components/SearchBar";
import Tabs from "@/Components/Tabs";
import { getRoomsOffers, getSuitsOffers } from "@/lib/getOffers";
import { Offer } from "@/lib/types";
import "./page.css";

const OfertasPage = () => {
  const [offers, setOffers] = useState<Offer[]>([]); // Ofertas originales
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]); // Ofertas filtradas
  const [activeTab, setActiveTab] = useState("Todos"); // Controla la pestaña activa
  const [isLoading, setIsLoading] = useState(true); // Maneja el estado de carga
  const [searchQuery, setSearchQuery] = useState(""); // Término de búsqueda

  // Cargar datos según la pestaña activa
  useEffect(() => {
    const fetchOffers = async () => {
      setIsLoading(true);
      try {
        let fetchedOffers: Offer[] = [];

        if (activeTab === "Todos") {
          const roomOffers = await getRoomsOffers(); // Llama a la función sin argumentos
          const suitOffers = await getSuitsOffers(); // Llama a la función sin argumentos

          fetchedOffers = [
            ...roomOffers.map((offer) => ({
              ...offer,
              id: `room-${offer.id}`,
              type: "room" as const,
            })),
            ...suitOffers.map((offer) => ({
              ...offer,
              id: `suit-${offer.id}`,
              type: "suit" as const,
            })),
          ];
        } else if (activeTab === "Habitaciones") {
          const roomOffers = await getRoomsOffers(); // Sin argumentos
          fetchedOffers = roomOffers.map((offer) => ({
            ...offer,
            id: `room-${offer.id}`,
            type: "room" as const,
          }));
        } else if (activeTab === "Suits") {
          const suitOffers = await getSuitsOffers(); // Sin argumentos
          fetchedOffers = suitOffers.map((offer) => ({
            ...offer,
            id: `suit-${offer.id}`,
            type: "suit" as const,
          }));
        }

        setOffers(fetchedOffers);
        setFilteredOffers(fetchedOffers); // Inicializa las ofertas filtradas con las ofertas obtenidas
      } catch (error) {
        console.error("Error al cargar las ofertas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, [activeTab]);

  // Actualizar las ofertas filtradas cuando cambia el término de búsqueda o las ofertas originales
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredOffers(offers); // Si no hay término de búsqueda, muestra todas las ofertas
    } else {
      const filtered = offers.filter((offer) =>
        offer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredOffers(filtered);
    }
  }, [searchQuery, offers]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">Oferta de habitaciones</h1>
        {/* Solo renderiza el contenido cuando los datos estén listos */}
        {isLoading ? (
          <p>Cargando ofertas...</p>
        ) : (
          <>
            {/* Tabs */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Barra de búsqueda */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {/* Grid de Ofertas */}
            <OffersGrid offers={filteredOffers} isLoading={isLoading} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OfertasPage;
