import React from 'react'
import { PriceFilter } from './components/PriceFilter/PriceFilter'
import { TypeFilter } from './components/TypeFilter/TypeFilter'
import { ReservationFilter } from './components/ReservationFilter/ReservationFilter'
import style from './Filters.module.css'

export const Filters = () => {
  return (
    <div className={style.container}>
      <PriceFilter />
      <TypeFilter />
      <ReservationFilter />
    </div>
  )
}
