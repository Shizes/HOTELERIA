"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`app-container ${menuOpen ? "menu-open" : ""}`}>
      {/* Navbar principal */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/principal">
            <Image
              src="/img/logo_hotel_calacoto.jpg" // Asegúrate de que este archivo exista en /public/img
              alt="Hotel Calacoto"
              width={80}
              height={64}
            />
          </Link>
        </div>
        <div className="navbar-icons">
          <button className="navbar-button">
            <Link href="/navbaruser">
            <Image
              src="/icons/user.svg" // Asegúrate de que este archivo exista en /public/icons
              alt="Usuario"
              width={32}
              height={32}
            />
            </Link>
          </button>
          <button
            className="navbar-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src="/icons/navbar.svg" // Asegúrate de que este archivo exista en /public/icons
              alt="Menú"
              width={32}
              height={32}
            />
          </button>
        </div>
      </nav>

      {/* Menú lateral */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/icons/volveruwu.svg" // Asegúrate de que este archivo exista en /public/icons
            alt="Volver"
            width={12}
            height={12}
          />
          <span className="volveruwu">Volver</span>
        </button>
        <div className="sidebar-header">
          <Link href="/principal">
            <Image
              src="/img/logo_hotel_calacoto.jpg" // Asegúrate de que este archivo exista en /public/img
              alt="Hotel Calacoto"
              width={80}
              height={64}
            />
          </Link>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link href="/principal">Principal</Link>
          </li>
          <li>
            <Link href="/ofertas">Ofertas</Link>
          </li>
          <li>
            <Link href="/habitaciones">Habitaciones</Link>
          </li>
          <li>
            <Link href="/eventos">Eventos</Link>
          </li>
          <li>
            <Link href="/salones">Salones</Link>
          </li>
          <li>
            <Link href="/galeria">Galería</Link>
          </li>
          <li>
            <Link href="/terminos">Términos y Condiciones</Link>
          </li>
          <li>
            <Link href="/contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
