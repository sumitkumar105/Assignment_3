import React, { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";
const WeatherData = () => {
  const [search, setSearch] = useState("Aurangabad");
  const [city, setCity] = useState([]);
  const [sunRise_Set, setSunRise_Set] = useState(city);
  const [cityTemp,setCityTemp]=useState(city);
  
 
  const getProductData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
      
      setCity(res.data);
      setSunRise_Set(res.data.sys);
      setCityTemp(res.data.main);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    getProductData();
  
  }, [search]);
 
  const resetInput = () => {
    setSearch("");
    getProductData();
  };
  return city ? (
    <div className="app">
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={resetInput} className="searchButton" href="#">
          <i className="fas fa-search">X</i>
        </button>
      </div>
      <div className="widget">
        <div className="left-panel panel">
          <div className="date">Weather Card</div>
          <div className="city">
            
            <div className="cityName">   {city.name}</div>
            <div className="cityName">{cityTemp.temp}&deg; </div>
          </div>
          <div className="min-max">
            <div className="label1">
              <label> Sunrise:</label>
              <p>{sunRise_Set.sunrise}&deg;</p>
            </div>
            <div className="label2">
              <label> Sunset:</label>
              <p>{sunRise_Set.sunset}&deg;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    console.log("ther error in fetching")
  );
};
export default WeatherData;
