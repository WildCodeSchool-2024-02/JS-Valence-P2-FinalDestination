import styles from "./SuggestionCard.module.css";
import rome from "../assets/images/cities/rome.avif";

export default function SuggestionCard() {
  return (
    <div className={styles.card}>
      <img className={styles.suggestionImg} src={rome} alt="rome" />
      <h2>ROME</h2>
      <button className={styles.suggestionCardButton} type="button">
        Detail
      </button>
    </div>
  );
}
