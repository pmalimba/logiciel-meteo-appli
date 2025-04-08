import React, { startTransition } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thu
          <WeatherIcon code="01d" />
          19 10
        </div>
      </div>
    </div>
  );
}
