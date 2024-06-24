import React from "react";
import CaravanType from "./components/CaravanType";
import style from "./CaravanCard.module.css"
import Image from "next/image";

const CaravanCard = (oneCaravan) => {
const { vehicleType, name, pictures } = oneCaravan.data;
console.log(pictures)
return (
    <div className={style.container}>
      <Image 
        src={pictures[0]}
        width={50}
        height={50}
        loading="lazy"
        alt="img"
        />
      <div>
        <p>{vehicleType}</p>
        <p>{name}</p>
      </div>
      {/* location and equip */}
      {/* price */}
    </div>
  );
};

export default CaravanCard;
