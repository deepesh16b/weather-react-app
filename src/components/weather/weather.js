// 3b973b83c45f9d85dccfdf401b965c9e
// 82ede5388175a84367cbb8ad9c6336ee

// http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=82ede5388175a84367cbb8ad9c6336ee
// https://api.openweathermap.org/data/2.5/weather?q=ondon&appid=3b973b83c45f9d85dccfdf401b965c9e


import React, { useState, useEffect } from "react";
import "./style.css";

const Temp = () => {
   const [searchValue, setSearchValue] = useState("bhopal");
   const getWeatherInfo = ()=> {
    
   }
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event)=> setSearchValue(event.target.value)}
          />

          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* ------------------------------ */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi wi-day-sunny    `}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Bhopal, India</div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
              19:19 PM 
                PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM 
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM 
                <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
              19:19 PM 
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default Temp;
