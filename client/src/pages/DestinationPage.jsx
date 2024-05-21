// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Activity from "../components/Activity";
// import db from "../db";
import "./DestinationPage.css";

export default function DestinationPage() {
  // const [dataGeo, setDataGeo] = useState();
  // const { id } = useParams();

  // const geoApiUrl = import.meta.env.VITE_API_URL_GEO;
  // const placeApiUrl = import.meta.env.VITE_API_URL_PLACES;

  // const fetchGeo = async (place) => {
  //   const res = await fetch(
  //     `${geoApiUrl}${place}&limit=5&appid=${import.meta.env.VITE_API_KEY_GEO}`
  //   );
  //   const data = await res.json();
  //   setDataGeo(data[0]);
  // };

  // const fetchPlace = async (lon, lat) => {
  //   const res = await fetchPlace(`${placeApiUrl}`);
  // };

  // useEffect(() => {
  //   const currentDestination = db.filter(
  //     (destination) => destination.id === Number(id)
  //   )[0];
  //   if (currentDestination) {
  //     fetchGeo(currentDestination.name);
  //   }
  // }, []);

  return (
    <div className="destination">
      <section className="text_content">
        <div className="wrapper">
          <div className="title">
            <h1>Name</h1>
            <h2>Price/day</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate ullam animi assumenda porro eaque sapiente fuga totam
              nostrum unde. Optio officia, earum iste natus fuga quaerat,
              suscipit laborum eveniet quos placeat tempore! Voluptatem pariatur
              nihil quas sit doloribus facere saepe numquam, illo quisquam
              mollitia quo reiciendis autem corrupti eum asperiores!
            </p>
          </div>
        </div>
      </section>
      <div>
        <div className="wrapper">
          <Activity activity="Fun" />
          <Activity activity="Cultural" />
          <Activity activity="Restaurant" />
        </div>
      </div>
    </div>
  );
}
