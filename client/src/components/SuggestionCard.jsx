import PropTypes from "prop-types";
import styles from "./SuggestionCard.module.css";

function SuggestionCard({ img, name }) {
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

SuggestionCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SuggestionCard;
