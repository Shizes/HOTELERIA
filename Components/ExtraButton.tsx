import React from "react";
import Link from "next/link";
import "./ExtraButton.css";

const ExtraButton = () => {
  return (
    <div className="extra-button-container">
      <Link href="/SuiteEjecutivas">
      <button className="reserve-button">Suites Ejecutivas</button>
      </Link>
    </div>
  );
};

export default ExtraButton;
