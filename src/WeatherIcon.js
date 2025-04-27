import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "Clear Sky",
    "clear-sky-night": "Clear Sky",
    "few-clouds-day": "Few Clouds",
    "few-clouds-night": "Few Clouds",
    "scattered-clouds-day": "Scattered Clouds",
    "scattered-clouds-night": "Scattered Clouds",
    "broken-clouds-day": "Broken Clouds",
    "broken-clouds-night": "Broken Clouds",
    "shower-rain-day": "Shower Rain",
    "shower-rain-night": "Shower Rain",
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
