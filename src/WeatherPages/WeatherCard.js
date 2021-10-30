import React from "react";
import GetFirstCity from "../api/GetFirstCity";
import GetSecondCityData from "../api/GetSecondCityData";
import GetThirdCityData from "../api/GetThirdCityData";
import GetFourCityData from "../api/GetFourCityData";
import GetFifthCityData from "../api/GetFifthCityData";
import { useHistory } from "react-router";

const WeatherCard = () => {
  const history = useHistory();
  const gottoWetherData = () => {
    history.push("/weather");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        weather details page
        <button onClick={gottoWetherData}>searchCity</button>
      </h1>
      <div style={{ height: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <GetFirstCity />
          <GetSecondCityData />
          <GetThirdCityData />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <GetFourCityData />
          <GetFifthCityData />
        </div>
      </div>
    </>
  );
};
export default WeatherCard;
