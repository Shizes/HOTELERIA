"use client";
import React from "react";
import CardSalon from "./CardSalon";
import { getSalones } from "@/lib/getSalones";
import { useEffect, useState } from "react";
interface SalonesType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}


const Armados = () => {
  const [salon, setSalon] = useState<SalonesType[]>([]);

  useEffect(() => {
    async function fetchSalon() {
      try {
        const response = await getSalones(
          "https://673e808e0118dbfe860b76dd.mockapi.io/armados"
        );
        setSalon(response);
      } catch (error) {
        console.error("Error al obtener salon", error);
      }
    }
    fetchSalon();
  }, []);
  return <div>
    <div>
      {
        salon.map((salon) => (
          <CardSalon key={salon.id} salon={salon} />
        ))}
    </div>
  </div>;
};

export default Armados;

