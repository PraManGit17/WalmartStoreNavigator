import React from 'react'
import { createContext, useContext, useState } from 'react'


const RouteContext = createContext();

export const RouteProvider = ({ children }) => {

  const [selectedSection, setSelectedSection] = useState([]);

  const AddSection = (sectionName) => {
    setSelectedSection((prev) =>
      prev.includes(sectionName) ? prev : [...prev, sectionName]
    );
  };

  const clearRoute = () => {
    alert('Working');
    setSelectedSection([]);
  };

  
  return (
    <RouteContext.Provider value={{
      selectedSection,
      AddSection,
      clearRoute
    }}>
      {children}
    </RouteContext.Provider>
  )
}


export const useRoute = () => useContext(RouteContext);