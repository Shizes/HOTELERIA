import React from "react";
import "./Footer.css"; // Asegúrate de tener este archivo en la misma carpeta
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección del mapa y dirección */}
        <div className="footer-section">
          <h3>Hotel Calacoto</h3>
          <p>Mapa</p>
          <Image
            src="/icons/mapa.svg"
            alt="Mapa de Hotel Calacoto"
            width={300} // Ajusta según lo necesites
            height={200} // Ajusta según lo necesites
            className="footer-map"
          />
          <p>Calacoto Calle 13 esquina Sanchez Bustamante 8009</p>
          <p>(Zona Sur) La Paz - Bolivia</p>
        </div>

        {/* Sección de enlaces del hotel */}
        <div className="footer-section">
          <h3>Hotel</h3>
          <ul>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Términos y Condiciones</li>
            <li>Contactar</li>
          </ul>
        </div>

        {/* Sección de enlaces generales */}
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>Página Principal</li>
            <li>Paquete de Habitaciones</li>
            <li>Paquete de Eventos</li>
            <li>Paquete de Salones</li>
            <li>Paquete de Ofertas</li>
          </ul>
        </div>

        {/* Sección de contactos */}
        <div className="footer-section">
          <h3>Otros Contactos</h3>
          <p>info@hotelcalacoto.com</p>
          <p>reservas@hotelcalacoto.com</p>
          <p>+591 69412010</p>
          <div className="footer-icons">
            <Image
              src="/icons/Whatsapp.svg"
              alt="WhatsApp"
              width={30} // Ajusta según lo necesites
              height={30} // Ajusta según lo necesites
              className="footer-icon"
            />
            <Image
              src="/icons/Twitter.svg"
              alt="Twitter"
              width={30} // Ajusta según lo necesites
              height={30} // Ajusta según lo necesites
              className="footer-icon"
            />
            <Image
              src="/icons/Facebookfooter.svg"
              alt="Facebook"
              width={30} // Ajusta según lo necesites
              height={30} // Ajusta según lo necesites
              className="footer-icon"
            />
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="footer-bottom">
        <p>Hotel Calacoto desde 1993</p>
        <Image
          src="/icons/world.svg"
          alt="Español"
          width={20} // Ajusta según lo necesites
          height={20} // Ajusta según lo necesites
          className="footer-world"
        />
        <p>Español</p>
      </div>
    </footer>
  );
};

export default Footer;
