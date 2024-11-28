"use client";

import React from "react";
import "./PersonSelector.css";

interface PersonSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  count: number;
  setCount: (value: number) => void;
}

const PersonSelector: React.FC<PersonSelectorProps> = ({
  isOpen,
  onClose,
  count,
  setCount,
}) => {
  if (!isOpen) return null;

  const increment = () => setCount(Math.min(count + 1, 10));
  const decrement = () => setCount(Math.max(count - 1, 1));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Habitación 1</h3>
        <div className="person-controls">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <p>Solo 10 personas</p>
        <button className="confirm-button" onClick={onClose}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default PersonSelector;
