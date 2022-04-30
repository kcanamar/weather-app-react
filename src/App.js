import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForcast from "./WeatherForcast"

export default function App() {
  console.log(weatherData)
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
    </div>
  );
}
