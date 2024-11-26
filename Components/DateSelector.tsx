"use client";

import React from 'react';
import './DateSelector.css';

interface DateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Seleccione las fechas</h3>
        <p>**Aquí iría el componente de calendario**</p>
        <button className="confirm-button" onClick={onClose}>
          Hecho
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
