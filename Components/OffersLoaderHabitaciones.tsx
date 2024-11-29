"use client";

import React, { useEffect, useState } from "react";
import OffersGrid from "@/Components/OffersGrid"; // Reutilizamos el componente de ofertas
import { Offer } from "@/lib/types"; // Tipo de datos para las ofertas

// Define el tipo de los datos crudos que llegan desde la API
type RoomApiData = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  car: string;
  quantity: string; // Viene como string en la API
  discount?: string;
};

const OffersLoaderHabitaciones = () => {
  const [offers, setOffers] = useState<Offer[]>([]); // Estado para las ofertas
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Cargar las ofertas desde la API
    const fetchOffers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://6748c0115801f51535920c96.mockapi.io/Rooms/");
        const data: RoomApiData[] = await response.json(); // Tipar la respuesta como RoomApiData[]

        // Transformamos los datos para que coincidan con el modelo esperado
        const transformedOffers: Offer[] = data.map((item: RoomApiData) => ({
            id: item.id,
            createdAt: item.createdAt,
            name: item.name,
            avatar: item.avatar,
            price: item.price,
            car: item.car,
            quantity: Number(item.quantity),
            discount: item.discount,
            type: "room",
          }));

        setOffers(transformedOffers);
      } catch (error) {
        console.error("Error al cargar las habitaciones:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return <OffersGrid offers={offers} isLoading={isLoading} />;
};

export default OffersLoaderHabitaciones;
