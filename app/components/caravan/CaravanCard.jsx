import React from "react";
import CaravanType from "./components/CaravanType";
import style from "./CaravanCard.module.css";
import Image from "next/image";

const CaravanCard = (oneCaravan) => {
  const { vehicleType, name, pictures, location } = oneCaravan.data;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <Image
            src={pictures[0]}
            quality={2}
            width={410}
            height={200}
            loading="lazy"
            alt="img"
          />
        </div>
        <div>
          <p>{vehicleType}</p>
          <p>{name}</p>
        </div>
        
        <div>
          <p>{location}</p>
          
        </div>
        {/* location and equip */}
        {/* price */}
      </div>
    </div>
  );
};

export default CaravanCard;
