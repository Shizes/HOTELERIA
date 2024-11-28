"use client";

import React from "react";
import "./Hero.css";
import Image from "next/image";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    }
  };

  return (
    <section className="hero">
      <div className="hero-header">
        <h1 className="hero-title">Hotel Calacoto</h1>
        <p className="hero-description">
          &quot;Un hotel para cada momento, lleno de emociones inolvidables.&quot;
        </p>
        <p className="hero-subtext">
          Cada momento se siente como la primera vez.
        </p>
      </div>
      <Image
        className="hero-action"
        src="/img/portada_principal.jpg"
        alt="Habitación Simple"
        width={375}
        height={200}
      />
      <button className="hero-button" onClick={scrollToServices}>
        <Image
          className="hero-button-icon"
          src="/icons/flecha_hacia_abajo.svg"
          alt="Flecha hacia abajo"
          width={50}
          height={50}
        />
      </button>
    </section>
  );
};

export default Hero;
