import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coords]);

  function displayResponse(response) {
    console.log(response.data.daily);

    setForecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "09t366o3358b69a9ae5287476447dcf2";
    let longitude = props.coords.longitude;
    let latitude = props.coords.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
  }
}
