import React from 'react';
import Link from "next/link";
import "./ExtraButton.css";

const ExtraButton2 = () => {
  return (
    <div className="extra-button-container">
      <Link href="/habitaciones">
        <button className="extra-button">Habitaciones</button>
      </Link>
    </div>
  )
}

export default ExtraButton2;