import NavBar from "../components/NavBar";
import DestinationCard from "../components/Destination/DestinationCard";

import styles from "./Destination.module.css";

export default function Destination() {
  return (
    <main className={styles.background}>
      <NavBar />
      <DestinationCard />
    </main>
  );
}
