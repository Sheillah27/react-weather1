import React, { useState } from "react";
import axios from "axios";
import Climate from "./Climate";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      city: response.data.city,
      coords: response.data.coordinates,
      feel: Math.round(response.data.temperature.feels_like),
    });
  }
  function search() {
    let apiKey = "09t366o3358b69a9ae5287476447dcf2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder=" Enter city"
                className="form-control"
                onChange={handleUpdate}
              />
            </div>
            <div className="col-3 ">
              <input
                type="Submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <Climate data={weatherData} />
        <Forecast
          coords={weatherData.coords}
          forecasteicon={weatherData.icon}
        />
      </div>
    );
  } else {
    search();
  }
}
