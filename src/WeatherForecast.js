import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);

    const apiKey = "51035d71b84ac5cet75eof3fb55a84d0";
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.coordinates]);

  if (loaded && forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="clear-sky" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperatures-min">
                {" "}
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
