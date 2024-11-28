import React from 'react';
import './portada.css';

const Portada = () => {
  return (
    <div className="portada">
      <img src="img/portada_inicio_sesion.jpg" alt="Hotel" className="portada-image" />
      <div className="portada-overlay">
        <h1 className="portada-title">Bienvenido/a</h1>
        <p className="portada-subtitle">Querido/a huésped</p>
      </div>
    </div>
  );
};

export default Portada;
