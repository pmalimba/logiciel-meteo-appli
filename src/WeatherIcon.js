import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "Clear sky",
    "clear-sky-night": "Clear sky",
    "few-clouds-day": "Few clouds",
    "few-clouds-night": "Few clouds",
    "scattered-clouds-day": "Scattered clouds",
    "scattered-clouds-night": "Scattered clouds",
    "broken-clouds-day": "Broken clouds",
    "broken-clouds-night": "Broken clouds",
    "shower-rain-day": "Shower rain",
    "shower-rain-night": "Shower rain",
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
