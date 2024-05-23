import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SuggestionCard.module.css";

function SuggestionCard({ img, name, id }) {
  return (
    <div className={styles.card}>
      <img className={styles.suggestionImg} src={img} alt={name} />
      <h2>{name}</h2>
      <Link to={`/destination/${id}`} className={styles.suggestionCardLink}>
        Details
      </Link>
    </div>
  );
}

SuggestionCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SuggestionCard;
