"use client"
import { createContext, useContext, useEffect, useReducer } from 'react';
import caravanReducer from './reducers';
import data from "../data.json"

const FilterContext = createContext(null)
const filterDispatchContex = createContext(null)
const initialCaravans = data.items

const CaravanProvider = ({ children }) => {
  const [allCaravans, dispatch] = useReducer(caravanReducer, initialCaravans)

  return (
    <FilterContext.Provider value={{ dispatch, allCaravans }} >
      {children}
    </FilterContext.Provider>
  )
};

export default CaravanProvider;

export const useFilter = () => {
  return useContext(FilterContext)
}
