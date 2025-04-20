import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  let codeMapping = {
    "01d": "Clear_Sky",
    "01n": "Clear_Sky",
    "02d": "Cloudy",
    "02n": "Cloudy",
    "03d": "Cloudy",
    "03n": "Cloudy",
    "04d": "Cloudy",
    "04n": "Cloudy",
    "09d": "Shower_Rain",
    "09n": "Shower_Rain",
    "10d": "Rain",
    "10n": "Rain",
    "11d": "Thunderstorm",
    "11n": "Thunderstorm",
    "13d": "Snow",
    "13n": "Snow",
    "50d": "Fog",
    "50n": "Fog",
  };
  
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="yellow"
      size={64}
      animate={true}
    />
  );
}
