import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../Css/WeatherDetails.css";

import "../App.css";
const Demo = () => {
  const location = useLocation();
  const myparam = location.state.params;
  const mycity = location.state.city;
 
  const [getData, setGetdata] = useState([]);
  const GetData = async () => {
    const fetch = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${myparam}&cnt=5&appid=b1a4c3ac369692413b05de3b1d4976f4`
    );
 
    const val = fetch.data.list;
   
    setGetdata(val);
  };
  
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="main_data">
      <div className="section_1">
        <h3 style={{ textAlign: "center" }}>5 Days Temperature: {mycity}</h3>
        <table style={{ border: "1px solid black", borderRadius: "12px" }}>
          <tr>
            <th>Ground Level</th>
            <th>Sea Level</th>
            <th>Temperature</th>
          </tr>
          {getData.map((v, index) => {
            return (
              <tr key={v.id}>
                <td>{v.main.grnd_level}</td>
                <td>{v.main.sea_level}</td>
                <td>{v.main.temp}&deg;C</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default Demo;
