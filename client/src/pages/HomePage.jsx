import FemaleAbuSimbel from "../assets/images/female-abu-simbel-temple-southern-egypt-lake-nasser.avif";
import Lettering from "../assets/images/lettering.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="Homepage">
      <div className="Vaccation">
        <img src={Lettering} alt="" className="Lettering" />
        <br />
        <p>
          Vaccation is approaching,
          <br />
          but you still haven't decided
        </p>

        <span className="Where">"WHERE TO GO?"</span>

        <br />
        <br />
        <h2>
          Be ready
          <br />
          to know !<br />
        </h2>
        <button type="submit">START QUIZ</button>
      </div>

      <h3>
        The most preferred
        <br />
        <br /> cultural route of 2023
        <br />
        <br />
        <span className="Caire">CAIRE</span>
      </h3>
      <img src={FemaleAbuSimbel} alt="abu-simbel" className="FemaleAbuSimbel" />
    </div>
  );
}
