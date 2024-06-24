import CaravanCard from "./components/caravan/CaravanCard";
import styles from "./page.module.css";
import data from "./data.json"

const Home = () => {
  const caravans = data.items;

  return (
    <main className={styles.container}>
      {/* Filters */}

      {/* Caravans */}
      {caravans.map((oneCaravan) => {
        return (
          <CaravanCard key={oneCaravan.index} data={oneCaravan} />
        )
      })}
      {/* Button */}
    </main>
  );
}

export default Home;
