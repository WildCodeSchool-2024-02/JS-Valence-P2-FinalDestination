import { useOutletContext, Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import styles from "./SuggestionsPage.module.css";
import db from "../db";
import noSuggestion from "../assets/images/suggestion-not-found.png";

export default function SuggestionPage() {
  const [formData] = useOutletContext();

  const filteredArray = db.filter(
    (el) =>
      el.activities.includes(formData.Type.toLowerCase()) &&
      el.budget.includes(formData.Budget)
  );

  return (
    <div className={styles.mainSuggestion}>
      <div className={styles.cardContainer}>
        {filteredArray.length === 0 ? (
          <div className={styles.noSuggestion}>
            <img
              className={styles.noSuggestionImg}
              src={noSuggestion}
              alt="travel"
            />
            <p className={styles.noSuggestionText}>
              No destination matching your criteria was found. <br /> Click to
              view all our destinations.
            </p>
            <Link to="/destinations" className={styles.destinationsLink}>
              Destinations
            </Link>
          </div>
        ) : (
          <div>
            <h1>Here are, our suggestions for you!</h1>
            <div className={styles.cardContainer}>
              {" "}
              {filteredArray.map((destination) => (
                <SuggestionCard
                  key={destination.id}
                  name={destination.name}
                  img={destination.img}
                  id={destination.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
