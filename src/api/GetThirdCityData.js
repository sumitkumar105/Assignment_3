import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const GetThirdCityData = () => {
  const history = useHistory();
  const [thirdCity, setThirdCity] = useState([]);
  const [sunRise_Set, setSunRise_Set] = useState(thirdCity);
  const [cityTemp_2, setCityTemp_2] = useState(thirdCity);
  const getThirdCity = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
    
      setThirdCity(res1.data);
      setSunRise_Set(res1.data.sys);
      setCityTemp_2(res1.data.main);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getThirdCity();
  }, []);
  const gotoWeatherDetail = (id, cityname) => {
    history.push("/demo", { params: id, city: cityname });
  };
  return (
    <>
      <div
        className="app"
        onClick={() => gotoWeatherDetail(thirdCity.id, thirdCity.name)}
      >
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">Weather Card</div>
            <div className="city">
              <div className="cityName">{thirdCity.name} </div>
              <div className="cityName">{cityTemp_2.temp}&deg; </div>
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
export default GetThirdCityData;
