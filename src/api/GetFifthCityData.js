import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const GetFiveCityData = () => {
  const history = useHistory();
  const [fiveCity, setFiveCity] = useState([]);
  const [sunRise_Set, setSunRise_Set] = useState(fiveCity);
  const [cityTemp_4, setCityTemp_4] = useState(fiveCity);
  const getFiveCity_5 = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
     
      setFiveCity(res1.data);
      setSunRise_Set(res1.data.sys);
      setCityTemp_4(res1.data.main);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFiveCity_5();
  }, []);
  const gotoWeatherDetail = (id, cityname) => {
    history.push("/demo", { params: id, city: cityname });
  };
  return (
    <>
      <div
        className="app"
        onClick={() => gotoWeatherDetail(fiveCity.id, fiveCity.name)}
      >
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">Weather Card</div>
            <div className="city">
              <div className="cityName">{fiveCity.name} </div>
              <div className="cityName">{cityTemp_4.temp}&deg; </div>
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
export default GetFiveCityData;
