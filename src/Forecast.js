import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function displayResponse(response) {
    console.log(response.data);
    console.log(forecast);
    setloaded(true);
    setForecast(response.data);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-Day">Thu</div>
            <div>
              <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
            </div>
            <div>
              {" "}
              <span className="forecast-temp-max">19°</span>
              <span className="forecast-temp-min text-muted">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "09t366o3358b69a9ae5287476447dcf2";
    let longitude = props.coords.longitude;
    let latitude = props.coords.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
  }
}
