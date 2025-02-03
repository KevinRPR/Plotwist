import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(""); // Término de búsqueda
  const [filteredBooks, setFilteredBooks] = useState([]); // Resultados filtrados

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filteredBooks,
        setFilteredBooks,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
