import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const GetFiveCityData = () => {
  const Adddata = [];
  const history = useHistory();
  const [fiveCity, setFiveCity] = useState([]);
  // const [sunRise_Set, setSunRise_Set] = useState();
  // const [cityTemp_4, setCityTemp_4] = useState();

  const getFiveCity_5 = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
     
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
      
      const res3 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
      const res4 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );
      const res5 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=b1a4c3ac369692413b05de3b1d4976f4`
      );

      Adddata.push(res1.data);
      Adddata.push(res2.data);
      Adddata.push(res3.data);
      Adddata.push(res4.data);
      Adddata.push(res5.data);
     
      setFiveCity(Adddata);
      // setSunRise_Set(res1.data.sys);
      // setCityTemp_4(res1.data.main);
      // console.log("first",res1.data);
      // console.log("second",res2.data)
      
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
      <div className="main_data">
        <div className="section_1">
          <table className="tabledata">
            <tr>
              <th>Water Data cards</th>
            </tr>
            {fiveCity.map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>
                    <div
                      className="app"
                      onClick={() => gotoWeatherDetail(v.id, v.name)}
                    >
                      <div className="widget">
                        <div className="left-panel panel">
                          <div className="date">Weather Card</div>
                          <div className="city">
                            <div className="cityName">{v.name} </div>
                            <div className="cityName">{v.main.temp}&deg; </div>
                          </div>
                          <div className="min-max">
                            <div className="label1">
                              <label> Sunrise:</label>
                              <p>{v.sys.sunrise}&deg;</p>
                            </div>
                            <div className="label2">
                              <label> Sunset:</label>
                              <p>{v.sys.sunset}&deg;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default GetFiveCityData;
