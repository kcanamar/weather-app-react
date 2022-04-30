import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForcast from "./WeatherForcast"

export default function App() {
  const allWeatherData = weatherData.map((ele, index) => {
    return <WeatherForcast img={ele.img} condition={ele.condition} time={ele.time} key={index}/>
  })

  return (
    <div className="App">
      {allWeatherData}
    </div>
  );
}
