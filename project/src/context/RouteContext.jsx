
import React, { createContext, useContext, useState, useEffect } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState(() => {
    const stored = localStorage.getItem('selectedSection');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedSection', JSON.stringify(selectedSection));
  }, [selectedSection]);

  const AddSection = (sectionName) => {
    setSelectedSection((prev) =>
      prev.includes(sectionName) ? prev : [...prev, sectionName]
    );
  };

  const clearRoute = () => {
    setSelectedSection([]);
  };

  const removeLatestSection = () => {
    setSelectedSection((prev) => {
      const updated = prev.slice(0, -1);
      return updated;
    });
  };


  return (
    <RouteContext.Provider value={{
      selectedSection,
      AddSection,
      clearRoute,
      removeLatestSection
    }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
