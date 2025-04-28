import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "Clear_Sky",
    "clear-sky-night": "Clear_Sky",
    "few-clouds-day": "Few_Clouds",
    "few-clouds-night": "Few_Clouds",
    "scattered-clouds-day": "Scattered_Clouds",
    "scattered-clouds-night": "Scattered_Clouds",
    "broken-clouds-day": "Broken_Clouds",
    "broken-clouds-night": "Broken_Clouds",
    "shower-rain-day": "Shower_Rain",
    "shower-rain-night": "Shower_Rain",
    "rain-day": "Rain",
    "rain-night": "Rain",
    "thunderstorm-day": "Thunderstorm",
    "thunderstorm-night": "Thunderstorm",
    "snow-day": "Snow",
    "snow-night": "Snow",
    "fog-day": "Mist",
    "fog-night": "Mist",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="yellow"
      size={props.size}
      animate={true}
    />
  );
}
