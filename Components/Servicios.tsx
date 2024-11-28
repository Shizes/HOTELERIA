import React from "react";
import "./Servicios.css";

const services = [
  { title: "Caja Fuerte", icon: "/icons/caja_fuerte.svg" },
  { title: "Wifi", icon: "/icons/wifi.svg" },
  { title: "Restaurante", icon: "/icons/dinner.svg" },
  { title: "Minibar", icon: "/icons/minibar.svg" },
  { title: "Tv Cable", icon: "/icons/TV.svg" },
  { title: "24/7 Luz", icon: "/icons/luz.svg" },
  { title: "Lavandería", icon: "/icons/pool.svg" },
  { title: "Espacio de Parqueo", icon: "/icons/parking.svg" },
];

const Servicios = () => {
  return (
    <section className="services-list">
      <h1 className="services-title">Servicios</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-item" key={service.title}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
