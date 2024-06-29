import React from "react";
import CaravanType from "./components/CaravanType";
import style from "./CaravanCard.module.css";
import Image from "next/image";

const CaravanCard = (oneCaravan) => {
  const { vehicleType, name, pictures, location, price } = oneCaravan.data;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <Image
            src={pictures[0]}
            quality={1}
            width={400}
            height={200}
            loading="lazy"
            alt="img"
          />
        </div>

        <div>
          <p className={style.vehicleType}>{vehicleType}</p>
          <p>{name}</p>
        </div>
        
        <div>
          <p>{location}</p>
          <p>icons</p>
        </div>
        
        <div>
          <p>Cena od: <span>{price}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CaravanCard;
