import { Link } from "react-router-dom";
import PropType from "prop-types";
import cultural from "../assets/images/activities/muse.avif";
import fun from "../assets/images/activities/fun.avif";
import restaurant from "../assets/images/activities/restaurant.avif";
import styles from "./Activity.module.css";

export default function Activity({ activity, data }) {
  function handleImage() {
    switch (activity.toLowerCase()) {
      case "fun":
        return fun;
      case "cultural":
        return cultural;
      case "restaurant":
        return restaurant;
      default:
        return "";
    }
  }

  return (
    <article className={styles.activity}>
      <h3>{activity}</h3>
      <div>
        <div>
          <img src={handleImage()} alt={`${activity}`} />
        </div>
        <div>
          <p>{data.formatted ? data.formatted : "no activity found"}</p>
        </div>
        <Link className={styles.button} to={data.website}>
          info
        </Link>
      </div>
    </article>
  );
}

Activity.propTypes = {
  activity: PropType.string,
  data: PropType.object,
};

Activity.defaultProps = {
  activity: PropType.string,
  data: PropType.object,
};
