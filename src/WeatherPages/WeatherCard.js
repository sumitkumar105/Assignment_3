import React from "react";
import GetFifthCityData from "../api/GetFifthCityData";
import { useHistory } from "react-router";
import '../App.css'

const WeatherCard = () => {
  const history = useHistory();
  const gottoWetherData = () => {
    history.push("/weather");
  };
  return (
    <>
      <h1 >
        weather details page
        <button onClick={gottoWetherData}>searchCity</button>
      </h1>
      <div>
        <GetFifthCityData/>
      </div>
     
    </>
  );
};
export default WeatherCard;
