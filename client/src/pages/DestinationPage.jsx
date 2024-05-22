import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Activity from "../components/Activity";
import "./DestinationPage.css";

export default function DestinationPage() {
  const currentDestination = useLoaderData();

  const [dataGeo, setDataGeo] = useState();
  const [dataCulturalPlace, setDataCulturalPlace] = useState();
  const [dataFunPlace, setDataFunPlace] = useState();
  const [dataRestoPlace, setDataRestoPlace] = useState();

  const geoApiUrl = import.meta.env.VITE_API_URL_GEO;
  const placeApiUrl = import.meta.env.VITE_API_URL_PLACES;

  const fetchGeo = async (place) => {
    try {
      const res = await fetch(
        `${geoApiUrl}${place}&limit=5&appid=${import.meta.env.VITE_API_KEY_GEO}`
      );
      const data = await res.json();
      setDataGeo(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCulturalPlace = async (lon, lat) => {
    try {
      const res = await fetch(
        `${placeApiUrl}categories=entertainment.museum&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
      );
      const data = await res.json();
      setDataCulturalPlace(data.features[0].properties);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchFunPlace = async (lon, lat) => {
    try {
      const res = await fetch(
        `${placeApiUrl}categories=adult.nightclub&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
      );
      const data = await res.json();
      setDataFunPlace(data.features[0].properties);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRestoPlace = async (lon, lat) => {
    try {
      const res = await fetch(
        `${placeApiUrl}categories=catering.restaurant&filter=circle:${lon},${lat},5000&limit=1&apiKey=${import.meta.env.VITE_API_KEY_PLACES}`
      );
      const data = await res.json();
      setDataRestoPlace(data.features[0].properties);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentDestination) {
      fetchGeo(currentDestination.name);
    }
  }, [currentDestination]);

  useEffect(() => {
    if (dataGeo) {
      fetchCulturalPlace(dataGeo.lon, dataGeo.lat);
      fetchFunPlace(dataGeo.lon, dataGeo.lat);
      fetchRestoPlace(dataGeo.lon, dataGeo.lat);
    }
  }, [dataGeo]);

  return (
    <div
      className="destination background_img"
      style={{
        background: currentDestination
          ? `url(${currentDestination.img}) center/cover`
          : "",
      }}
    >
      <section className="text_content">
        <div className="wrapper">
          <div className="title">
            <h1>{currentDestination?.name}</h1>
            <h2>${currentDestination?.budget[0]}/day</h2>
          </div>
          <div className="description">
            <p>{currentDestination?.description}</p>
          </div>
        </div>
      </section>
      <div>
        <div className="wrapper">
          <Activity activity="Cultural" data={dataCulturalPlace} />
          <Activity activity="Fun" data={dataFunPlace} />
          <Activity activity="Restaurant" data={dataRestoPlace} />
        </div>
      </div>
    </div>
  );
}
