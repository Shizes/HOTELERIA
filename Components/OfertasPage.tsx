"use client";
import React from "react";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import OffersLoader from "./OffersLoader"; // Nuevo componente

const OfertasPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">Oferta de habitaciones</h1>
        <OffersLoader /> {/* Componente que carga y muestra las ofertas */}
      </div>
      <Footer />
    </div>
  );
};

export default OfertasPage;
