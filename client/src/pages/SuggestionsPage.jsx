// import { useOutletContext } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import styles from "./SuggestionsPage.module.css";
import db from "../db";

export default function SuggestionPage() {
  return (
    <div className={styles.mainSuggestion}>
      <h1>Here are, our suggestions for you!</h1>
      <div className={styles.cardContainer}>
        {db.slice(0, 3).map((destination) => (
          <SuggestionCard
            key={destination.id}
            name={destination.name}
            img={destination.img}
          />
        ))}
      </div>
    </div>
  );
}
