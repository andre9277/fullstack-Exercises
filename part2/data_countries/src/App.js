import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  let countryfilt = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );
  return (
    <div>
      Find countries:{" "}
      <input value={searchCountry} onChange={handleSearchCountry} />
      <div>
        {countryfilt.length > 10 ? (
          <div> Too many matches, specify another filter!!</div>
        ) : (
          countryfilt.map((ct) => (
            <div key={ct.name.common}>
              {countryfilt.length === 1 ? (
                <div>
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
                </div>
              ) : (
                <li key={ct.name.common}>{ct.name.common}</li>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default App;
