import airplane from "../assets/images/AVIF photos/airplane.png";

import "./DestinationPage.css";

export default function DestinationsPage() {
  return (
    <>
      <div className="text">
        <img className="airplaine" src={airplane} alt="airplane" />

        <p>
          the most visited <br />
          holiday routes for you
        </p>
        <h3>We have brought together</h3>
      </div>

      <div className="contenu">
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
        <div className="picture">
          <h2>amsterdam</h2>
        </div>
      </div>
    </>
  );
}
