import airplane from "../assets/images/airplane.jpg";

import "./DestinationPage.css";

export default function DestinationsPage() {
  return (
    <>
      <div className="plane">
        <img className="airplaine" src={airplane} alt="airplane" />
      </div>

      <p className="paragraphe">We have brought together</p>

      <div className="title">
        <h1>the most visited </h1>
        <h2> holiday routes for you!</h2>
      </div>
      <div className="container">
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
        <div className="picture">
          <h3>Amsterdam</h3>
        </div>
      </div>
    </>
  );
}
