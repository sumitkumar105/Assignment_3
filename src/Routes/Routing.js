import React from "react";
import { Switch, Route } from "react-router-dom";
import WeatherData from "../WeatherPages/WeatherData";
import WeatherCard from "../WeatherPages/WeatherCard";

import WeatherDetails from "../WeatherPages/WeatherDetails";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/weather" component={WeatherData} />
        <Route exact path="/" component={WeatherCard} />

        <Route path="/demo" component={WeatherDetails} />
      </Switch>
    </>
  );
};
export default Routing;
