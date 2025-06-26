import styles from "./HomeCard.module.css";

export default function HomeCard() {
  return (
    <aside className={`animationWrapper ${styles.sidebar}`}>
      <h1 className={styles.title}>
        So, you want to travel to<br></br>
        <span>Space</span>
      </h1>
      <p className="text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </aside>
  );
}
