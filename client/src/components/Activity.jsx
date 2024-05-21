import PropType from "prop-types";
import styles from "./Activity.module.css";
import cultural from "../assets/images/activities/muse.avif";
import fun from "../assets/images/activities/fun.avif";
import restaurant from "../assets/images/activities/restaurant.avif";

export default function Activity({ activity }) {
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

  function handleBooking() {
    window.location.href =
      "https://www.booking.com/index.fr.html?label=gen173nr-1BCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQHoAQGIAgGoAgO4ArjorbIGwAIB0gIkYjZlNjhhZGEtNzNhMi00Yjk3LWJiMmMtNDU5NWY4YmFiMWM32AIF4AIB&sid=f4149078c97b4a7dfc344c7243dd1824&keep_landing=1&sb_price_type=total&";
  }
  return (
    <article className={styles.activity}>
      <h3>{activity}</h3>
      <div>
        <div>
          <img src={handleImage()} alt={`${activity}`} />
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <button type="button" onClick={handleBooking}>
          Book
        </button>
      </div>
    </article>
  );
}

Activity.propTypes = {
  activity: PropType.string,
};

Activity.defaultProps = {
  activity: PropType.string,
};
