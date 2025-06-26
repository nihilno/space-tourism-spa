import styles from "./AudioPlayer.module.css";

import { useEffect, useRef, useState } from "react";
import Track from "../assets/music/a-better-beginning.mp3";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(function () {
    audioRef.current.volume = 0.1;
  }, []);

  function togglePlayPause() {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Play failed:", error));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  return (
    <section className={styles.player}>
      <div className={styles.audio}>
        <audio controls loop ref={audioRef}>
          <source src={Track} type="audio/mpeg" />
          Twoja przeglądarka nie obsługuje elementu audio.
        </audio>
      </div>
      <div
        className={`${styles.playContain}  ${isPlaying ? styles.trigger : ""}`}
        onClick={togglePlayPause}
      >
        <div
          className={`${styles.playBtn}`}
          title={isPlaying ? "Pause" : "Play"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
