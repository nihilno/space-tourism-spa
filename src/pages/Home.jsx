import NavBar from "../components/NavBar";
import HomeCard from "../components/Home/HomeCard";
import ExploreButton from "../components/Home/ExploreButton";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.background}>
      <NavBar />
      <article className={`${styles.container} wrapper`}>
        <HomeCard />
        <ExploreButton />
      </article>
    </main>
  );
}
