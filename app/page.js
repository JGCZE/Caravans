import CaravanCard from "./components/caravan/CaravanCard";
import style from "./page.module.css";
import data from "./data.json"
import { Filters } from "./components/Filters/Filters";

const Home = () => {
  const caravans = data.items;

  if (!caravans) {
    return <div>Žádné karavany</div>
  }

  return (
    <main className={style.container}>
      <Filters />

      <div className={style.wrapper}>
        {caravans.map((oneCaravan) => {
          return (
            <CaravanCard 
              key={oneCaravan.index} data={oneCaravan}
            />
          )
        })}
      </div>


      <button>Načíst další</button>
    </main>
  );
}

export default Home;
