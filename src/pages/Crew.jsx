import NavBar from "../components/NavBar";
import CrewCard from "../components/Crew/CrewCard";
import styles from "./Crew.module.css";

export default function Crew() {
  return (
    <main className={styles.background}>
      <NavBar />
      <CrewCard />
    </main>
  );
}
