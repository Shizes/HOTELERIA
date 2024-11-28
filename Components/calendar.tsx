"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selected, onSelect }) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      modifiersClassNames={{
        selected: "selected",
        today: "today",
      }}
    />
  );
};

export default Calendar;
