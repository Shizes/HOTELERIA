import React from "react";

type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "Todos" ? "active" : ""}`}
        onClick={() => setActiveTab("Todos")}
      >
        Todos
      </button>
      <button
        className={`tab ${activeTab === "Habitaciones" ? "active" : ""}`}
        onClick={() => setActiveTab("Habitaciones")}
      >
        Habitaciones
      </button>
      <button
        className={`tab ${activeTab === "Suits" ? "active" : ""}`}
        onClick={() => setActiveTab("Suits")}
      >
        Suits
      </button>
    </div>
  );
};

export default Tabs;
