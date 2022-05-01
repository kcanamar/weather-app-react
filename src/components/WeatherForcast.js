import React from "react"
import WeatherIcon from "./WeatherIcon"
import WeatherInfo from "./WeatherInfo"
export default function WeatherForcast(props) {
    return (
        <div className="weather">
          <WeatherIcon img={props.img}/>
          <WeatherInfo conditions={props.conditions} time={props.time}/>
        </div>
        )
}