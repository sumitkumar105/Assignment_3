import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const GetFirstCity = () => {
  const history = useHistory();
  const [firstCity, setFirstCity] = useState([]);
  const [sunRise_Set, setSunRise_Set] = useState(firstCity);
  const [cityTemp, setCityTemp] = useState(firstCity);
  const getFirstCity = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
    
      setFirstCity(res1.data);
      setSunRise_Set(res1.data.sys);
      setCityTemp(res1.data.main);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFirstCity();
  }, []);
  function gotoWeatherDetails(id, cityname) {
    history.push("/demo", { params: id, city: cityname });
  }
  return (
    <>
      <div
        className="app"
        onClick={() => gotoWeatherDetails(firstCity.id, firstCity.name)}
      >
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">Weather Card</div>
            <div className="city">
              <div className="cityName">{firstCity.name} </div>
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
    </>
  );
};
export default GetFirstCity;
