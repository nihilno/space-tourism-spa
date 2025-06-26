import { useState } from "react";
import { useMenu } from "../../contexts/MenuContext";

import styles from "./DestinationCard.module.css";

export default function Planet() {
  const {
    data: { destinations },
  } = useMenu();

  const [slide, setSlide] = useState(0);
  const currentDestination = destinations.at(slide);

  if (!destinations || destinations.length === 0) {
    return <div>No destinations available</div>;
  }

  return (
    <>
      <aside className={styles.side}>
        <div className="animationWrapper" key={currentDestination.name}>
          <img
            src={currentDestination.images.png}
            alt={currentDestination.name}
          />
        </div>
      </aside>
      <article className={styles.content}>
        <ul className={styles.list}>
          {destinations.map((item, i) => (
            <li key={item.name}>
              <button
                className={`title ${i === slide ? styles.active : ""}`}
                onClick={() => setSlide(i)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="animationWrapper" key={currentDestination.name}>
          <div className={styles.info}>
            <h1 className={styles.title}>{currentDestination.name}</h1>
            <p className="text">{currentDestination.description}</p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.stats}>
              <h2 className="title">Avg. distance</h2>
              <p>{currentDestination.distance}</p>
            </div>
            <div className={styles.stats}>
              <h2 className="title">Est. travel time</h2>
              <p>{currentDestination.travel}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
