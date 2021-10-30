import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const GetFourCityData = () => {
    const history=useHistory();
  const [fourCity, setFourCity] = useState([]);
  const [sunRise_Set, setSunRise_Set] = useState(fourCity);
  const [cityTemp_3, setCityTemp_3] = useState(fourCity);
  const getFourCity_4 = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
     
      setFourCity(res1.data);
      setSunRise_Set(res1.data.sys);
      setCityTemp_3(res1.data.main);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFourCity_4();
  }, []);
  const gotoWeatherDetail=(id,cityname)=>{
    history.push('/demo',{params:id,city:cityname});
  }
  return (
    <>
      <div className="app" onClick={()=>gotoWeatherDetail(fourCity.id,fourCity.name)}>
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">Weather Card</div>
            <div className="city">
              <div className="cityName">{fourCity.name} </div>
              <div className="cityName">{cityTemp_3.temp}&deg; </div>
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
export default GetFourCityData;
