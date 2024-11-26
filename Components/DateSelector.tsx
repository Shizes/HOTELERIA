"use client";

import React, { useState } from "react";
import Calendar from "@/Components/calendar"; // Ruta ajustada según tu estructura
import "./DateSelector.css";

interface DateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("Fecha seleccionada:", selectedDate);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Seleccione una fecha</h3>
        <Calendar
          selected={selectedDate}
          onSelect={(date) => setSelectedDate(date as Date)}
        />
        <button className="confirm-button" onClick={handleSubmit}>
          Hecho
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
