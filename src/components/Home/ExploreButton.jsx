import { Link } from "react-router-dom";
import styles from "./ExploreButton.module.css";

export default function ExploreButton() {
  return (
    <Link to="/destination">
      <button className={styles.button}>Explore</button>
    </Link>
  );
}
