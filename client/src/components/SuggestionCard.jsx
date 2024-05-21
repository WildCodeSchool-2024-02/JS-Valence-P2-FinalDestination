import styles from "./SuggestionCard.module.css";

export default function SuggestionCard(description) {
  const { img, name } = description;
  return (
    <div className={styles.card}>
      <img className={styles.suggestionImg} src={img} alt={name} />
      <h2>{name}</h2>
      <button className={styles.suggestionCardButton} type="button">
        Detail
      </button>
    </div>
  );
}
