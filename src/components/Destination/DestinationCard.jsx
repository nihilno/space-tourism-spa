import styles from "./DestinationCard.module.css";

import Title from "../Title";
import MainContent from "./MainContent";

export default function DestinationCard() {
  return (
    <main className={`${styles.container} wrapper`}>
      <Title part={"1"} title={"Pick your destination"} />
      <MainContent />
    </main>
  );
}
