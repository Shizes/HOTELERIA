"use client";

import React, { useEffect, useState } from "react";
import OffersGrid from "@/Components/OffersGrid";
import { Offer } from "@/lib/types";

type RoomApiData = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  car: string;
  quantity: string;
  discount?: string;
  capacity: string; // Agregado el campo capacity
};

type OffersLoaderHabitacionesProps = {
  personCount: number; // Nuevo prop para filtrar por cantidad de personas
};

const OffersLoaderHabitaciones: React.FC<OffersLoaderHabitacionesProps> = ({ personCount }) => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://6748c0115801f51535920c96.mockapi.io/Rooms/");
        const data: RoomApiData[] = await response.json();

        // Mapeo y filtrado de datos
        const filteredOffers = data
          .filter((item) => Number(item.capacity) >= personCount) // Filtrar por capacidad
          .map((item) => ({
            id: item.id,
            name: item.name,
            avatar: item.avatar,
            price: item.price,
            discount: item.discount !== item.price ? item.discount : undefined, // Validar el descuento
            quantity: Number(item.quantity),
            car: item.car,
            capacity: item.capacity, // Incluir capacidad
            createdAt: item.createdAt, // Incluir createdAt
            type: "room" as const, // Especificar tipo como constante
          }));

        setOffers(filteredOffers);
      } catch (error) {
        console.error("Error al cargar las habitaciones:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, [personCount]); // Reactualizar cada vez que cambie `personCount`

  return <OffersGrid offers={offers} isLoading={isLoading} />;
};

export default OffersLoaderHabitaciones;
