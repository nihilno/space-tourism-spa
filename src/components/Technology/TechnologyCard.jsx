import styles from "./TechnologyCard.module.css";

import Title from "../Title";
import MainContent from "./MainContent";

export default function DestinationCard() {
  return (
    <main className={`${styles.container} wrapper`}>
      <Title part={"3"} title={"Space launch 101"} />
      <MainContent />
    </main>
  );
}
