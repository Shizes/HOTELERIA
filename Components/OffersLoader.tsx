import React, { useState, useEffect } from "react";
import OffersView from "./Offersview"; // Asegúrate de que la ruta sea correcta
import { getRoomsOffers, getSuitsOffers } from "@/lib/getOffers"; // Funciones para obtener las ofertas
import { Offer } from "@/lib/types"; // Tipo de datos de la oferta

const OffersLoader = () => {
  // Estados
  const [offers, setOffers] = useState<Offer[]>([]); // Todas las ofertas
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]); // Ofertas filtradas
  const [activeTab, setActiveTab] = useState("Todos"); // Pestaña activa
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [searchQuery, setSearchQuery] = useState(""); // Término de búsqueda

  // Cargar ofertas al inicio
  useEffect(() => {
    const fetchOffers = async () => {
      setIsLoading(true); // Inicia la carga
      try {
        const roomOffers = await getRoomsOffers(); // Obtiene las ofertas de habitaciones
        const suitOffers = await getSuitsOffers(); // Obtiene las ofertas de suits
        const allOffers = [
            ...roomOffers.map((offer) => ({
              ...offer,
              id: `room-${offer.id}`,
              type: "room" as const, // Asegura que se use el literal "room"
            })),
            ...suitOffers.map((offer) => ({
              ...offer,
              id: `suit-${offer.id}`,
              type: "suit" as const, // Asegura que se use el literal "suit"
            })),
          ];
        setOffers(allOffers); // Guarda todas las ofertas en el estado
      } catch (error) {
        console.error("Error al cargar las ofertas:", error);
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    fetchOffers(); // Llama a la función para cargar las ofertas
  }, []);

  // Filtrar ofertas según la pestaña activa y el término de búsqueda
  useEffect(() => {
    let filtered = offers;

    // Filtra según la pestaña activa
    if (activeTab === "Habitaciones") {
      filtered = offers.filter((offer) => offer.type === "room");
    } else if (activeTab === "Suits") {
      filtered = offers.filter((offer) => offer.type === "suit");
    }

    // Filtra según el término de búsqueda
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((offer) =>
        offer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredOffers(filtered); // Actualiza las ofertas filtradas
  }, [activeTab, searchQuery, offers]);

  return (
    <OffersView
      offers={filteredOffers} // Ofertas filtradas
      isLoading={isLoading} // Estado de carga
      activeTab={activeTab} // Pestaña activa
      setActiveTab={setActiveTab} // Cambiar pestaña activa
      searchQuery={searchQuery} // Término de búsqueda
      setSearchQuery={setSearchQuery} // Cambiar término de búsqueda
    />
  );
};

export default OffersLoader;
