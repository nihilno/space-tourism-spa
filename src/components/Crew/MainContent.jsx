import { useState } from "react";
import { useMenu } from "../../contexts/MenuContext";

import styles from "./CrewCard.module.css";

export default function Planet() {
  const {
    data: { crew },
  } = useMenu();

  const [slide, setSlide] = useState(0);
  const currentCrew = crew.at(slide);

  if (!crew || crew.length === 0) {
    return <div>No destinations available</div>;
  }

  return (
    <>
      <aside className={styles.side}>
        <div
          className={`${styles.image} animationWrapper`}
          key={currentCrew.name}
        >
          <img src={currentCrew.images.png} alt={currentCrew.name} />
        </div>
      </aside>
      <article className={styles.content}>
        <div className="animationWrapper" key={currentCrew.name}>
          <div className={styles.info}>
            <p className={styles.subtitle}>{currentCrew.role}</p>
            <h1 className={styles.title}>{currentCrew.name}</h1>
            <p className="text">{currentCrew.bio}</p>
          </div>
        </div>
        <ul className={styles.list}>
          {crew.map((_, i) => (
            <li key={i}>
              <button
                onClick={() => setSlide(i)}
                className={i === slide ? styles.active : ""}
              >
                &bull;
              </button>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
