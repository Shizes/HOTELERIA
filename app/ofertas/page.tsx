"use client";
import React from "react";
import Navbar from "@/Components/ui/Navbar";
import Footer from "@/Components/ui/Footer";
import OffersLoader from "@/Components/OffersLoader"; // Componente modularizado
import ExtraButton3 from "@/Components/ExtraButton3"; // Importar el botón modularizado

const Page = () => {
  return (
    <div>
      {/* Navegación */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="container">
        <h1 className="title">Oferta de habitaciones</h1>
        <OffersLoader /> {/* Encargado de cargar y mostrar ofertas */}
        
        {/* Botón modularizado */}
        <ExtraButton3 />
      </main>
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Page;
