import React from "react";
import "./Weather.css";
export default function ForecastDay(props) {
  function max() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}`;
  }

  function min() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-Day">{day()}</div>
            <div>
              <img
                src={props.data.condition.icon_url}
                alt={props.data.condition.description}
                sizes="20"
              />
            </div>
            <div>
              {" "}
              <span className="forecast-temp-max">{max()}°</span>
              <span className="forecast-temp-min text-muted">{min()}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
