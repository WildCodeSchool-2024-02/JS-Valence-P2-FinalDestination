import db from "../db";

import "./DestinationPage.css";

export default function DestinationsPage() {
  return (
    <div className="page_destination">
      {/* <div className="plane">
        <img className="airplaine" src={airplane} alt="airplane" />
      </div> */}
      <div className="title">
        <h1 className="paragraphe">
          We have brought together<span>the most visited</span>
        </h1>
        <h2> holiday routes for you!</h2>
      </div>
      <div className="card_container">
        {db.map((element) => (
          <div
            key={element.id}
            className="picture"
            style={{ background: `url(${element.img}) center/cover` }}
          >
            <h3>{element.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
