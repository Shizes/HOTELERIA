import React from "react";
import Tabs from "@/Components/Tabs";
import SearchBar from "@/Components/SearchBar";
import OffersGrid from "@/Components/OffersGrid";
import { Offer } from "@/lib/types";

interface OffersViewProps {
  offers: Offer[];
  isLoading: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const OffersView: React.FC<OffersViewProps> = ({
  offers,
  isLoading,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <p>Cargando ofertas...</p>
      ) : (
        <OffersGrid offers={offers} isLoading={isLoading} />
      )}
    </div>
  );
};

export default OffersView;
