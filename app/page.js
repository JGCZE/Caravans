"use client"
import CaravanCard from "./components/caravan/CaravanCard";
import style from "./page.module.css";
import { Filters } from "./components/Filters/Filters";
import { useFilter } from "./globalContext/globalContext";

const Home = () => {

  const allCaravans = useFilter()
  const caravans = allCaravans.allCaravans
  console.log(caravans)


  if (!caravans) {
    return <div>Žádné karavany</div>
  }

  return (
    <main className={style.container}>
      <Filters />

      <div className={style.wrapper}>
        {caravans.map((oneCaravan, index) => {
          return (
            <CaravanCard 
              key={index} data={oneCaravan}
            />
          )
        })}
      </div>

      <button>Načíst další</button>
    </main>
  );
}

export default Home;
