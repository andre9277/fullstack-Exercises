import { useEffect, useState } from "react";
import axios from "axios";

const DetailCountry = ({ ct }) => {
  const [weather, setWeather] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    let lat = ct.capitalInfo.latlng[0];
    let lon = ct.capitalInfo.latlng[1];
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
        //console.log("im in effect", response.data);
      });
  }, []);

  return (
    <div key={ct.name.common}>
      {/*console.log(lat, lon)*/}
      <h1>{ct.name.common}</h1>
      <div>Capital: {ct.capital}</div>
      <div>Area: {ct.area} </div>
      <div>
        Languages:
        <ul>
          {Object.values(ct.languages).map((item) => (
            <li key={item.length}>{item}</li>
          ))}
        </ul>
      </div>
      <img src={ct.flags.png} alt="not found" />
      <h1>Weather in {ct.capital}</h1>
      <div>
        Temperature:
        {weather?.main.temp} °Celsius
      </div>
      <div>
        {weather?.weather.map((item) => {
          return (
            <img
              key={weather.name}
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt=" not found"
            />
          );
        })}
      </div>
      <div>Wind: {weather?.wind.speed} m/s</div>
    </div>
  );
};

export default DetailCountry;
