import React from "react";
import FormatDate from "./FormatDate";
import Units from "./Units";
import DateFormatted from "./DateFormatted";

export default function Climate(props) {
  return (
    <div className="climate">
      <div className="header">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <DateFormatted />
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize"> {props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-center">
            {" "}
            <img
              src={props.data.icon}
              alt={props.data.description}
              size="56"
            />{" "}
            <Units celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 weather-body">
          <ul>
            <li>Feels like: {props.data.feel} ℃ </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
