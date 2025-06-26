import styles from "./CrewCard.module.css";

import Title from "../Title";
import MainContent from "./MainContent";

export default function DestinationCard() {
  return (
    <main className={`${styles.container} wrapper`}>
      <Title part={"2"} title={"Meet your crew"} />
      <MainContent />
    </main>
  );
}
