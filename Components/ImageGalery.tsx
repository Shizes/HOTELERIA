"use client";

import React, { useState } from "react";
import "./ImageGalery.css";

const images = [
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
  "/Principal/kenti.png",
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
