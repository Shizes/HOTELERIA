"use client";

import React, { useEffect, useState } from "react";
import OffersGrid from "@/Components/OffersGrid"; // Reutilizamos el componente de ofertas
import { Offer } from "@/lib/types"; // Tipo de datos para las ofertas

// Define el tipo de los datos crudos que llegan desde la API
type SuiteApiData = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  price: string;
  car: string;
  quantity: string; // Viene como string en la API
  discount?: string;
  state: string; // Para verificar si está habilitada
};

const OffersLoaderSuites = () => {
  const [offers, setOffers] = useState<Offer[]>([]); // Estado para las ofertas
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Cargar las ofertas desde la API
    const fetchOffers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://6748c0115801f51535920c96.mockapi.io/Suits");
        const data: SuiteApiData[] = await response.json(); // Tipar la respuesta como SuiteApiData[]

        // Filtrar y transformar los datos para que coincidan con el modelo esperado
        const transformedOffers: Offer[] = data
          .filter((item) => item.state === "Enabled") // Solo incluir suites habilitadas
          .map((item: SuiteApiData) => ({
            id: item.id,
            createdAt: item.createdAt,
            name: item.name,
            avatar: item.avatar,
            price: item.price,
            car: item.car,
            quantity: Number(item.quantity),
            discount: item.discount,
            type: "suit", // Identificar como tipo "suit"
          }));

        setOffers(transformedOffers);
      } catch (error) {
        console.error("Error al cargar las suites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return <OffersGrid offers={offers} isLoading={isLoading} />;
};

export default OffersLoaderSuites;
