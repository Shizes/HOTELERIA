import React from "react";
import Image from "next/image";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar oferta"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="filter-button">
        <Image src="/icons/filterl.svg" alt="Filter" width={24} height={24} />
      </button>
    </div>
  );
};

export default SearchBar;
