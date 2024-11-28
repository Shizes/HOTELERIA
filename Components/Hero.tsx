import React from "react";
import "./Hero.css";
import Image from "next/image";
import Fotito from "../../public/img/habitacion_simple.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-header">
        <h1 className="hero-title">Hotel Calacoto</h1>
        <p className="hero-description">
          "Un hotel para cada momento, lleno de emociones inolvidables."
        </p>
        <p className="hero-subtext">
          Cada momento se siente como la primera vez.
        </p>
      </div>
      <Image
        className="hero-action"
        src="/img/portada_principal.jpg"
        alt="Habitación Simple"
        width={375} // Ancho deseado
        height={200} // Alto deseado
      />
    </section>
  );
};

export default Hero;
