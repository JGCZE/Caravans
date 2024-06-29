"use client"
import { useFilter } from "@/app/globalContext/globalContext";
import style from "./TypeFilter.module.css"

export const TypeFilter = () => {

  //const handleClick = "helo"


  return (
    <div className={style.container}>
      <div>
        Typ karavanu
      </div>
      <div className={style.filterButtons}>
        {/* <button onClick={handleClick}>Campervan</button> */}
        <button>Integrál</button>
        <button>Vestavba</button>
        <button>Přívěs</button>
      </div>
    </div>
  );
};
