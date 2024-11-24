import React from 'react';

const CardEvent = ({ eventos }) => {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      <div>
        {eventos.map((evento) => (
          <div key={evento.id}>
            <h3>{evento.nombre}</h3>
            <p>{evento.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardEvent;