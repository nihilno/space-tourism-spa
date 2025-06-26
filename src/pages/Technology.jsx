import NavBar from "../components/NavBar";
import TechnologyCard from "../components/Technology/TechnologyCard";
import styles from "./Technology.module.css";

export default function Technology() {
  return (
    <main className={styles.background}>
      <NavBar />
      <TechnologyCard />
    </main>
  );
}
