"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar.css"; // Asegúrate de importar el CSS

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  fromDate?: Date; // Restringir fechas anteriores
  toDate?: Date; // Restringir fechas futuras
}

const calendar: React.FC<CalendarProps> = ({ selected, onSelect, fromDate, toDate }) => {
  return (
    <div className="calendar-wrapper"> {/* Asegura un contenedor centrado */}
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        fromDate={fromDate}
        toDate={toDate}
        modifiersClassNames={{
          selected: "react-day-picker__day--selected",
        }}
      />
    </div>
  );
};

export default calendar;
