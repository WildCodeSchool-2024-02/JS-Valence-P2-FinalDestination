// import { useOutletContext } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import styles from "./SuggestionsPage.module.css";

export default function SuggestionPage() {
  // const [formData, setFormData] = useOutletContext();

  return (
    <div className={styles.mainSuggestion}>
      <h1>Here are, our suggestions for you!</h1>
      <div className={styles.cardContainer}>
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
}
