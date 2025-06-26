import { useState } from "react";
import { useMenu } from "../../contexts/MenuContext";

import styles from "./TechnologyCard.module.css";

export default function Planet() {
  const {
    data: { technology },
  } = useMenu();

  const [slide, setSlide] = useState(0);
  const currentTechnology = technology.at(slide);

  if (!technology || technology.length === 0) {
    return <div>No destinations available</div>;
  }

  return (
    <>
      <aside className={styles.side}>
        <div
          className={`${styles.image} animationWrapper`}
          key={currentTechnology.name}
        >
          <img
            src={currentTechnology.images.portrait}
            alt={currentTechnology.name}
          />
        </div>
      </aside>
      <article className={styles.content}>
        <ul className={styles.list}>
          {technology.map((_, i) => (
            <li key={i}>
              <button
                onClick={() => setSlide(i)}
                className={i === slide ? styles.active : ""}
              >
                <span>{i + 1}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.info}>
          <div
            className={`${styles.info} animationWrapper`}
            key={currentTechnology.name}
          >
            <p className={styles.subtitle}>The terminology...</p>
            <h1 className={styles.title}>{currentTechnology.name}</h1>
            <p className="text">{currentTechnology.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
