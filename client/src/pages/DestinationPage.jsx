import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Activity from "../components/Activity";
import db from "../db";
import "./DestinationPage.css";

export default function DestinationPage() {
  const [dataGeo, setDataGeo] = useState();
  const [dataCulturalPlace, setDataCulturalPlace] = useState();
  const [dataFunPlace, setDataFunPlace] = useState();
  const [dataRestoPlace, setDataRestoPlace] = useState();
  const { id } = useParams();

  const geoApiUrl = import.meta.env.VITE_API_URL_GEO;
  const placeApiUrl = import.meta.env.VITE_API_URL_PLACES;

  const fetchGeo = async (place) => {
    const res = await fetch(
      `${geoApiUrl}${place}&limit=5&appid=${import.meta.env.VITE_API_KEY_GEO}`
    );
    const data = await res.json();
    setDataGeo(data[0]);
  };

  const fetchCulturalPlace = async (lon, lat) => {
    const res = await fetch(
      `${placeApiUrl}categories=entertainment.museum&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
    );
    const data = await res.json();
    setDataCulturalPlace(data.features[0].properties.formatted);
  };
  const fetchFunPlace = async (lon, lat) => {
    const res = await fetch(
      `${placeApiUrl}categories=adult.nightclub&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
    );
    const data = await res.json();
    setDataFunPlace(data.features[0].properties.formatted);
  };
  const fetchRestoPlace = async (lon, lat) => {
    const res = await fetch(
      `${placeApiUrl}categories=catering.restaurant&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
    );
    const data = await res.json();
    setDataRestoPlace(data.features[0].properties.formatted);
  };

  useEffect(() => {
    const currentDestination = db.find(
      (destination) => destination.id === Number(id)
    );

    if (currentDestination) {
      fetchGeo(currentDestination.name);
    }
  }, [id]);

  useEffect(() => {
    if (dataGeo) {
      fetchCulturalPlace(dataGeo.lon, dataGeo.lat);
      fetchFunPlace(dataGeo.lon, dataGeo.lat);
      fetchRestoPlace(dataGeo.lon, dataGeo.lat);
    }
  }, [dataGeo]);

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
          <Activity activity="Cultural" address={dataCulturalPlace} />
          <Activity activity="fun" address={dataFunPlace} />
          <Activity activity="Restaurant" address={dataRestoPlace} />
        </div>
      </div>
    </div>
  );
}
