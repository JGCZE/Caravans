"use client"
import { createContext, useContext, useEffect, useReducer } from 'react';
import data from "../data.json"

const FilterContext = createContext(null)

const filterDispatchContex = createContext(null)

const CaravanProvider = ({ children }) => {
  const [allCaravans, dispatch] = useReducer(caravanReducer, data.items)

  return (
    <FilterContext.Provider value={allCaravans}>
      {children}
    </FilterContext.Provider>
  )
};

export default CaravanProvider;

export const useFilter = () => {
  return useContext(FilterContext)
}

const caravanReducer = () => {
  
}