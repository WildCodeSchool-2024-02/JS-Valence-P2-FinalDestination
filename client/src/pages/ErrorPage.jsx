import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import img404 from "../assets/images/page-not-found.png";

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <img src={img404} alt="" />
      <Link to="/">go back to home page</Link>
    </div>
  );
}
