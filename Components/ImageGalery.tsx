"use client";

import React, { useState } from "react";
import "./ImageGalery.css";

const images = [
  "/img/events_principal.jpg",
  "/img/achalay.jpg",
  "/img/corporativos.jpg",
  "/img/tsui.jpg",
  "/img/nutsuwara.jpg",
  "/img/munacuy.jpg",
  "/img/fonditohabitaciones.jpg",
  "/img/g1.jpg",
  "/img/g9.jpg",
  "/img/g2.jpg",
  "/img/g3.jpg",
  "/img/g4.jpg",
  "/img/g7.jpg",
  "/img/g8.jpg",
  "/img/personal.jpg",
  "/img/restaurants_principal.jpg",
  "/img/gg1.jpg",
  "/img/gg2.jpg",
  "/img/gg3.jpg",
  "/img/gg4.jpg",
  "/img/gg5.jpg",
  "/img/gg6.jpg",
  "/img/gg7.jpg",
  "/img/gg8.jpg"
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src); // Configura la imagen seleccionada.
  };

  const handleOverlayClick = () => {
    setSelectedImage(null); // Cierra el zoom.
  };

  return (
    <div>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(src)} // Maneja clics en imágenes.
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img src={selectedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
